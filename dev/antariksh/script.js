const COUNTRIES = {
    US: { name: 'United States', coords: [37.09, -95.71], flag: '🇺🇸', color: '#4A90E2' },
    IN: { name: 'India', coords: [20.59, 78.96], flag: '🇮🇳', color: '#E67E22' },
    RU: { name: 'Russia', coords: [61.52, 105.31], flag: '🇷🇺', color: '#9B59B6' }
};

const DATA_BASE_PATH = 'https://raw.githubusercontent.com/ModelEarth/trade-data/main/year/2019';
const TRADE_FLOWS = ['domestic', 'exports', 'imports'];

let selectedCountries = new Set();
let industryLookup = {};
let factorLookup = {};
let tradeData = {};
let tradeLookup = {};
let currentFactorGroup = 'air';
let dataLoadingComplete = false;
let loadingErrors = [];

let map;
let markers = {};
let charts = {};

const FACTOR_GROUP_MAPPING = {
    'air': ['Air', 'Emissions to air', 'GHG emissions'],
    'water': ['Water', 'Emissions to water', 'Water use'],
    'energy': ['Energy', 'Energy use'],
    'land': ['Land', 'Land use'],
    'materials': ['Materials', 'Material use', 'Resources'],
    'employment': ['Employment', 'Labour']
};

function getFactorGroup(extension) {
    if (!extension) return 'other';
    const extLower = extension.toLowerCase();
    
    for (const [group, keywords] of Object.entries(FACTOR_GROUP_MAPPING)) {
        for (const keyword of keywords) {
            if (extLower.includes(keyword.toLowerCase())) {
                return group;
            }
        }
    }
    return 'other';
}

function debugLog(message, isError = false) {
    const debugDiv = document.getElementById('debug-log');
    const timestamp = new Date().toLocaleTimeString();
    const className = isError ? 'error' : 'success';
    debugDiv.innerHTML += `<div class="log-entry ${className}">[${timestamp}] ${message}</div>`;
    debugDiv.scrollTop = debugDiv.scrollHeight;
    console.log(message);
}

function showStatus(message, isError = false) {
    const statusEl = document.getElementById('loading-status');
    if (statusEl) {
        statusEl.textContent = message;
        statusEl.className = isError ? 'status-message error' : 'status-message';
        statusEl.style.display = 'block';
        
        if (!isError && dataLoadingComplete) {
            setTimeout(() => {
                statusEl.style.display = 'none';
            }, 3000);
        }
    }
    debugLog(message, isError);
}

function initMap() {
    debugLog('Initializing map...');
    map = L.map('map').setView([30, 20], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);

    Object.entries(COUNTRIES).forEach(([code, country]) => {
        const marker = L.marker(country.coords).addTo(map);
        marker.bindPopup(`<b>${country.flag} ${country.name}</b><br>Click to select`);
        marker.on('click', () => toggleCountry(code));
        markers[code] = marker;
    });
    debugLog('Map initialized successfully');
}

function toggleCountry(code) {
    if (selectedCountries.has(code)) {
        selectedCountries.delete(code);
        debugLog(`Deselected ${COUNTRIES[code].name}`);
    } else {
        selectedCountries.add(code);
        debugLog(`Selected ${COUNTRIES[code].name}`);
    }
    updateUI();
}

function updateUI() {
    updateCountryCards();
    updateCharts();
    updateInsights();
}

function updateCountryCards() {
    const container = document.getElementById('country-cards');
    container.innerHTML = '';
    
    if (selectedCountries.size === 0) {
        container.innerHTML = '<p class="empty-message">Select countries on the map to view data</p>';
        return;
    }
    
    selectedCountries.forEach(code => {
        const country = COUNTRIES[code];
        const card = document.createElement('div');
        card.className = 'country-card';
        card.style.borderLeft = `4px solid ${country.color}`;
        
        const total = calculateTotalForCountry(code, currentFactorGroup);
        const domestic = calculateTotalByFlow(code, currentFactorGroup, 'domestic');
        const exports = calculateTotalByFlow(code, currentFactorGroup, 'exports');
        const imports = calculateTotalByFlow(code, currentFactorGroup, 'imports');
        
        card.innerHTML = `
            <div class="card-header">
                <span class="flag">${country.flag}</span>
                <h3>${country.name}</h3>
                <button class="remove-btn" onclick="toggleCountry('${code}')">×</button>
            </div>
            <div class="card-body">
                <div class="stat">
                    <span class="stat-label">Total ${currentFactorGroup}:</span>
                    <span class="stat-value">${formatNumber(total)}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Domestic:</span>
                    <span class="stat-value">${formatNumber(domestic)}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Exports:</span>
                    <span class="stat-value">${formatNumber(exports)}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Imports:</span>
                    <span class="stat-value">${formatNumber(imports)}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function formatNumber(num) {
    if (num === 0) return '0';
    if (num >= 1000000000) return (num / 1000000000).toFixed(2) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(2) + 'K';
    return num.toFixed(2);
}

function calculateTotalForCountry(code, factorGroup) {
    let total = 0;
    TRADE_FLOWS.forEach(flow => {
        total += calculateTotalByFlow(code, factorGroup, flow);
    });
    return total;
}

function calculateTotalByFlow(code, factorGroup, flow) {
    let total = 0;
    const countryData = tradeData[code];
    if (!countryData || !countryData[flow] || !countryData[flow].trade_factor) {
        return 0;
    }

    const tradeFactorData = countryData[flow].trade_factor;
    
    tradeFactorData.forEach(row => {
        const factorId = row.factor_id;
        if (!factorId) return;
        
        const factor = factorLookup[factorId];
        if (factor && factor.group === factorGroup) {
            const value = parseFloat(row.impact_value || row.coefficient || 0);
            if (!isNaN(value) && value !== 0) {
                total += Math.abs(value);
            }
        }
    });

    return total;
}

function calculateByIndustry(code, factorGroup) {
    const industryTotals = {};
    const countryData = tradeData[code];
    if (!countryData) return industryTotals;

    TRADE_FLOWS.forEach(flow => {
        const flowData = countryData[flow];
        if (flowData && flowData.trade_factor && flowData.trade) {
            flowData.trade_factor.forEach(row => {
                const factorId = row.factor_id;
                if (!factorId) return;
                
                const factor = factorLookup[factorId];
                if (factor && factor.group === factorGroup) {
                    const tradeId = row.trade_id;
                    const tradeRow = tradeLookup[code]?.[flow]?.[tradeId];
                    
                    if (tradeRow) {
                        const industryId = tradeRow.industry2_id || tradeRow.industry_id;
                        const industryName = industryLookup[industryId]?.name || industryId || 'Unknown';
                        const value = parseFloat(row.impact_value || row.coefficient || 0);
                        
                        if (!isNaN(value) && value !== 0) {
                            industryTotals[industryName] = (industryTotals[industryName] || 0) + Math.abs(value);
                        }
                    }
                }
            });
        }
    });

    return industryTotals;
}

function updateCharts() {
    if (selectedCountries.size === 0) {
        Object.values(charts).forEach(chart => chart.clear());
        return;
    }
    
    updateComparisonChart();
    updateTradeflowChart();
    updateIndustryChart();
}

function updateComparisonChart() {
    const chartDiv = document.getElementById('chart-comparison');
    if (!charts.comparison) {
        charts.comparison = echarts.init(chartDiv);
    }

    const countries = Array.from(selectedCountries);
    const data = countries.map(code => ({
        name: COUNTRIES[code].name,
        value: calculateTotalForCountry(code, currentFactorGroup),
        itemStyle: { color: COUNTRIES[code].color }
    }));

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter: params => {
                const p = params[0];
                return `${p.name}<br/>${formatNumber(p.value)}`;
            }
        },
        xAxis: {
            type: 'category',
            data: data.map(d => d.name),
            axisLabel: { interval: 0, rotate: 0 }
        },
        yAxis: {
            type: 'value',
            name: 'Total Impact',
            axisLabel: { formatter: value => formatNumber(value) }
        },
        series: [{
            type: 'bar',
            data: data,
            label: {
                show: true,
                position: 'top',
                formatter: params => formatNumber(params.value)
            }
        }]
    };

    charts.comparison.setOption(option, true);
}

function updateTradeflowChart() {
    const chartDiv = document.getElementById('chart-tradeflow');
    if (!charts.tradeflow) {
        charts.tradeflow = echarts.init(chartDiv);
    }

    const countries = Array.from(selectedCountries);
    const series = TRADE_FLOWS.map((flow, idx) => ({
        name: flow.charAt(0).toUpperCase() + flow.slice(1),
        type: 'bar',
        stack: 'total',
        data: countries.map(code => calculateTotalByFlow(code, currentFactorGroup, flow)),
        itemStyle: {
            color: ['#5470C6', '#91CC75', '#FAC858'][idx]
        }
    }));

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter: params => {
                let result = `${params[0].axisValue}<br/>`;
                params.forEach(p => {
                    result += `${p.marker} ${p.seriesName}: ${formatNumber(p.value)}<br/>`;
                });
                return result;
            }
        },
        legend: {
            data: ['Domestic', 'Exports', 'Imports']
        },
        xAxis: {
            type: 'category',
            data: countries.map(code => COUNTRIES[code].name)
        },
        yAxis: {
            type: 'value',
            name: 'Impact by Trade Flow',
            axisLabel: { formatter: value => formatNumber(value) }
        },
        series: series
    };

    charts.tradeflow.setOption(option, true);
}

function updateIndustryChart() {
    const chartDiv = document.getElementById('chart-industry');
    if (!charts.industry) {
        charts.industry = echarts.init(chartDiv);
    }

    if (selectedCountries.size === 0) {
        charts.industry.clear();
        return;
    }

    const allIndustries = new Set();
    const countriesData = {};

    selectedCountries.forEach(code => {
        const industryTotals = calculateByIndustry(code, currentFactorGroup);
        countriesData[code] = industryTotals;
        Object.keys(industryTotals).forEach(ind => allIndustries.add(ind));
    });

    let industries = Array.from(allIndustries);
    const industriesWithData = industries
        .map(ind => ({
            name: ind,
            total: Array.from(selectedCountries).reduce((sum, code) => 
                sum + (countriesData[code][ind] || 0), 0)
        }))
        .filter(ind => ind.total > 0)
        .sort((a, b) => b.total - a.total)
        .slice(0, 15);

    industries = industriesWithData.map(ind => ind.name);

    if (industries.length === 0) {
        charts.industry.setOption({
            title: {
                text: 'No industry data available',
                left: 'center',
                top: 'middle',
                textStyle: { color: '#999', fontSize: 14 }
            }
        });
        return;
    }

    const series = Array.from(selectedCountries).map(code => ({
        name: COUNTRIES[code].name,
        type: 'bar',
        data: industries.map(ind => countriesData[code][ind] || 0),
        itemStyle: { color: COUNTRIES[code].color }
    }));

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter: params => {
                let result = `Industry: ${params[0].axisValue}<br/>`;
                params.forEach(p => {
                    result += `${p.marker} ${p.seriesName}: ${formatNumber(p.value)}<br/>`;
                });
                return result;
            }
        },
        legend: {
            data: Array.from(selectedCountries).map(code => COUNTRIES[code].name)
        },
        xAxis: {
            type: 'category',
            data: industries,
            axisLabel: {
                rotate: 45,
                interval: 0,
                fontSize: 10
            }
        },
        yAxis: {
            type: 'value',
            name: 'Impact by Industry',
            axisLabel: { formatter: value => formatNumber(value) }
        },
        series: series,
        grid: {
            bottom: 120,
            left: 60,
            right: 40
        }
    };

    charts.industry.setOption(option, true);
}

function updateInsights() {
    const insightsDiv = document.getElementById('insights');
    
    if (selectedCountries.size === 0) {
        insightsDiv.innerHTML = '<p>Select countries on the map to view insights.</p>';
        return;
    }

    const insights = [];
    const totals = [];

    selectedCountries.forEach(code => {
        const total = calculateTotalForCountry(code, currentFactorGroup);
        totals.push({ code, total });
    });

    totals.sort((a, b) => b.total - a.total);

    if (totals.length > 0 && totals[0].total > 0) {
        insights.push(`${COUNTRIES[totals[0].code].name} has the highest ${currentFactorGroup} impact (${formatNumber(totals[0].total)}) among selected countries.`);
        
        if (totals.length > 1 && totals[1].total > 0) {
            const ratio = (totals[0].total / totals[1].total).toFixed(2);
            insights.push(`This is ${ratio}x higher than ${COUNTRIES[totals[1].code].name}.`);
        }
    }

    selectedCountries.forEach(code => {
        const domestic = calculateTotalByFlow(code, currentFactorGroup, 'domestic');
        const exports = calculateTotalByFlow(code, currentFactorGroup, 'exports');
        const imports = calculateTotalByFlow(code, currentFactorGroup, 'imports');
        const total = domestic + exports + imports;

        if (total > 0) {
            const domesticPct = ((domestic / total) * 100).toFixed(1);
            const exportsPct = ((exports / total) * 100).toFixed(1);
            const importsPct = ((imports / total) * 100).toFixed(1);
            
            const flows = [
                { name: 'domestic', pct: parseFloat(domesticPct), value: domestic },
                { name: 'exports', pct: parseFloat(exportsPct), value: exports },
                { name: 'imports', pct: parseFloat(importsPct), value: imports }
            ].sort((a, b) => b.pct - a.pct);
            
            insights.push(`${COUNTRIES[code].name}: ${flows[0].name} production accounts for ${flows[0].pct}% of ${currentFactorGroup} impact.`);
        }
    });

    if (insights.length > 0) {
        const html = '<ul>' + insights.map(i => `<li>${i}</li>`).join('') + '</ul>';
        insightsDiv.innerHTML = html;
    } else {
        insightsDiv.innerHTML = '<p>No insights available. Data may not be loaded correctly.</p>';
    }
}

async function loadCSV(path) {
    return new Promise((resolve) => {
        debugLog(`Loading: ${path}`);
        Papa.parse(path, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: results => {
                if (results.data && results.data.length > 0) {
                    debugLog(`✓ Loaded ${path}: ${results.data.length} rows, columns: ${Object.keys(results.data[0]).join(', ')}`);
                    resolve(results.data);
                } else {
                    debugLog(`⚠ ${path}: File empty or no data`, true);
                    loadingErrors.push(`${path}: Empty or no data`);
                    resolve([]);
                }
            },
            error: err => {
                debugLog(`✗ ERROR loading ${path}: ${err.message}`, true);
                loadingErrors.push(`${path}: ${err.message}`);
                resolve([]);
            }
        });
    });
}

async function loadAllData() {
    showStatus('Starting data load...');
    loadingErrors = [];
    
    debugLog('=== LOADING REFERENCE DATA ===');
    showStatus('Loading reference data (industry.csv, factor.csv)...');
    
    const industryData = await loadCSV(`${DATA_BASE_PATH}/industry.csv`);
    const factorData = await loadCSV(`${DATA_BASE_PATH}/factor.csv`);
    
    industryData.forEach(row => {
        const id = row.industry_id;
        if (id) {
            industryLookup[id] = {
                name: row.name || id,
                category: row.category || ''
            };
        }
    });
    
    factorData.forEach(row => {
        const id = row.factor_id;
        if (id) {
            const group = getFactorGroup(row.extension);
            factorLookup[id] = {
                stressor: row.stressor || '',
                extension: row.extension || '',
                unit: row.unit || '',
                group: group
            };
        }
    });
    
    debugLog(`Industry lookup: ${Object.keys(industryLookup).length} entries`);
    debugLog(`Factor lookup: ${Object.keys(factorLookup).length} entries`);
    
    const groupCounts = {};
    Object.values(factorLookup).forEach(f => {
        groupCounts[f.group] = (groupCounts[f.group] || 0) + 1;
    });
    debugLog(`Factor groups: ${JSON.stringify(groupCounts)}`);
    
    if (Object.keys(factorLookup).length === 0) {
        showStatus('⚠ Warning: factor.csv not loaded correctly.', true);
    }
    
    debugLog('=== LOADING COUNTRY TRADE DATA ===');
    
    for (const code of Object.keys(COUNTRIES)) {
        debugLog(`--- Loading ${COUNTRIES[code].name} (${code}) ---`);
        showStatus(`Loading data for ${COUNTRIES[code].name}...`);
        
        tradeData[code] = {};
        tradeLookup[code] = {};
        
        for (const flow of TRADE_FLOWS) {
            debugLog(`  Flow: ${flow}`);
            tradeData[code][flow] = {};
            tradeLookup[code][flow] = {};
            
            const tradePath = `${DATA_BASE_PATH}/${code}/${flow}/trade.csv`;
            const tradeRows = await loadCSV(tradePath);
            tradeData[code][flow].trade = tradeRows;
            
            tradeRows.forEach(row => {
                if (row.trade_id) {
                    tradeLookup[code][flow][row.trade_id] = row;
                }
            });
            
            const tradeFactorPath = `${DATA_BASE_PATH}/${code}/${flow}/trade_factor.csv`;
            const tradeFactorData = await loadCSV(tradeFactorPath);
            tradeData[code][flow].trade_factor = tradeFactorData;
            
            if (tradeFactorData.length > 0) {
                debugLog(`    trade_factor: ${tradeFactorData.length} rows`);
                debugLog(`    Sample row: ${JSON.stringify(tradeFactorData[0])}`);
            }
        }
    }
    
    dataLoadingComplete = true;
    
    if (loadingErrors.length > 0) {
        showStatus(`⚠ Data load complete with ${loadingErrors.length} errors. Check debug panel.`, true);
        debugLog(`=== LOAD SUMMARY: ${loadingErrors.length} ERRORS ===`, true);
    } else {
        showStatus('✓ All data loaded successfully!');
        debugLog('=== ALL DATA LOADED SUCCESSFULLY ===');
    }
    
    debugLog('Updating UI...');
    updateUI();
}

window.addEventListener('DOMContentLoaded', () => {
    debugLog('Page loaded, initializing...');
    
    const toggleBtn = document.getElementById('toggle-debug');
    toggleBtn.addEventListener('click', () => {
        const logDiv = document.getElementById('debug-log');
        if (logDiv.style.display === 'none') {
            logDiv.style.display = 'block';
            toggleBtn.textContent = 'Hide';
        } else {
            logDiv.style.display = 'none';
            toggleBtn.textContent = 'Show';
        }
    });
    
    initMap();
    
    document.getElementById('factor-group').addEventListener('change', (e) => {
        currentFactorGroup = e.target.value;
        debugLog(`Factor group changed to: ${currentFactorGroup}`);
        updateUI();
    });
    
    window.addEventListener('resize', () => {
        Object.values(charts).forEach(chart => chart.resize());
    });
    
    loadAllData();
});

window.toggleCountry = toggleCountry;