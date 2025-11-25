const COUNTRIES = {
    // North America
    US: { name: 'United States', coords: [37.09, -95.71], flag: '🇺🇸', color: '#4A90E2', region: 'Americas' },
    CA: { name: 'Canada', coords: [56.13, -106.35], flag: '🇨🇦', color: '#E74C3C', region: 'Americas' },
    MX: { name: 'Mexico', coords: [23.63, -102.55], flag: '🇲🇽', color: '#16A085', region: 'Americas' },
    BR: { name: 'Brazil', coords: [-14.24, -51.93], flag: '🇧🇷', color: '#27AE60', region: 'Americas' },
    
    // Europe
    GB: { name: 'United Kingdom', coords: [55.38, -3.44], flag: '🇬🇧', color: '#3498DB', region: 'Europe' },
    DE: { name: 'Germany', coords: [51.17, 10.45], flag: '🇩🇪', color: '#9B59B6', region: 'Europe' },
    FR: { name: 'France', coords: [46.23, 2.21], flag: '🇫🇷', color: '#E67E22', region: 'Europe' },
    IT: { name: 'Italy', coords: [41.87, 12.57], flag: '🇮🇹', color: '#1ABC9C', region: 'Europe' },
    ES: { name: 'Spain', coords: [40.46, -3.75], flag: '🇪🇸', color: '#F39C12', region: 'Europe' },
    NL: { name: 'Netherlands', coords: [52.13, 5.29], flag: '🇳🇱', color: '#E74C3C', region: 'Europe' },
    BE: { name: 'Belgium', coords: [50.50, 4.48], flag: '🇧🇪', color: '#34495E', region: 'Europe' },
    AT: { name: 'Austria', coords: [47.52, 14.55], flag: '🇦🇹', color: '#C0392B', region: 'Europe' },
    SE: { name: 'Sweden', coords: [60.13, 18.64], flag: '🇸🇪', color: '#2980B9', region: 'Europe' },
    PL: { name: 'Poland', coords: [51.92, 19.15], flag: '🇵🇱', color: '#8E44AD', region: 'Europe' },
    NO: { name: 'Norway', coords: [60.47, 8.47], flag: '🇳🇴', color: '#16A085', region: 'Europe' },
    DK: { name: 'Denmark', coords: [56.26, 9.50], flag: '🇩🇰', color: '#D35400', region: 'Europe' },
    FI: { name: 'Finland', coords: [61.92, 25.75], flag: '🇫🇮', color: '#27AE60', region: 'Europe' },
    PT: { name: 'Portugal', coords: [39.40, -8.22], flag: '🇵🇹', color: '#2C3E50', region: 'Europe' },
    GR: { name: 'Greece', coords: [39.07, 21.82], flag: '🇬🇷', color: '#2980B9', region: 'Europe' },
    CZ: { name: 'Czech Republic', coords: [49.82, 15.47], flag: '🇨🇿', color: '#8E44AD', region: 'Europe' },
    RO: { name: 'Romania', coords: [45.94, 24.97], flag: '🇷🇴', color: '#E67E22', region: 'Europe' },
    HU: { name: 'Hungary', coords: [47.16, 19.50], flag: '🇭🇺', color: '#16A085', region: 'Europe' },
    IE: { name: 'Ireland', coords: [53.41, -8.24], flag: '🇮🇪', color: '#27AE60', region: 'Europe' },
    SK: { name: 'Slovakia', coords: [48.67, 19.70], flag: '🇸🇰', color: '#3498DB', region: 'Europe' },
    BG: { name: 'Bulgaria', coords: [42.73, 25.49], flag: '🇧🇬', color: '#E74C3C', region: 'Europe' },
    HR: { name: 'Croatia', coords: [45.10, 15.20], flag: '🇭🇷', color: '#9B59B6', region: 'Europe' },
    SI: { name: 'Slovenia', coords: [46.15, 14.99], flag: '🇸🇮', color: '#1ABC9C', region: 'Europe' },
    LT: { name: 'Lithuania', coords: [55.17, 23.88], flag: '🇱🇹', color: '#F39C12', region: 'Europe' },
    LV: { name: 'Latvia', coords: [56.88, 24.60], flag: '🇱🇻', color: '#E67E22', region: 'Europe' },
    EE: { name: 'Estonia', coords: [58.60, 25.01], flag: '🇪🇪', color: '#34495E', region: 'Europe' },
    LU: { name: 'Luxembourg', coords: [49.82, 6.13], flag: '🇱🇺', color: '#C0392B', region: 'Europe' },
    MT: { name: 'Malta', coords: [35.94, 14.38], flag: '🇲🇹', color: '#2980B9', region: 'Europe' },
    CY: { name: 'Cyprus', coords: [35.13, 33.43], flag: '🇨🇾', color: '#16A085', region: 'Europe' },
    
    // Asia
    CN: { name: 'China', coords: [35.86, 104.20], flag: '🇨🇳', color: '#E74C3C', region: 'Asia' },
    JP: { name: 'Japan', coords: [36.20, 138.25], flag: '🇯🇵', color: '#9B59B6', region: 'Asia' },
    IN: { name: 'India', coords: [20.59, 78.96], flag: '🇮🇳', color: '#E67E22', region: 'Asia' },
    KR: { name: 'South Korea', coords: [35.91, 127.77], flag: '🇰🇷', color: '#3498DB', region: 'Asia' },
    ID: { name: 'Indonesia', coords: [-0.79, 113.92], flag: '🇮🇩', color: '#1ABC9C', region: 'Asia' },
    TW: { name: 'Taiwan', coords: [23.70, 121.00], flag: '🇹🇼', color: '#27AE60', region: 'Asia' },
    TR: { name: 'Turkey', coords: [38.96, 35.24], flag: '🇹🇷', color: '#E74C3C', region: 'Asia' },
    
    // Russia
    RU: { name: 'Russia', coords: [61.52, 105.31], flag: '🇷🇺', color: '#C0392B', region: 'Europe' },
    
    // Oceania
    AU: { name: 'Australia', coords: [-25.27, 133.78], flag: '🇦🇺', color: '#F39C12', region: 'Oceania' },
    
    // Africa
    ZA: { name: 'South Africa', coords: [-30.56, 22.94], flag: '🇿🇦', color: '#16A085', region: 'Africa' }
};

const DATA_BASE_PATH = 'https://raw.githubusercontent.com/ModelEarth/trade-data/main/year/2019';
const TRADE_FLOWS = ['domestic', 'exports', 'imports'];

let selectedCountries = new Set(['US']);
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

const ALL_FACTOR_GROUPS = ['air', 'water', 'energy', 'land', 'materials', 'employment'];

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
    updateCountryButtonStates();
    updateUI();
}

function selectAllCountries() {
    Object.keys(COUNTRIES).forEach(code => selectedCountries.add(code));
    debugLog('Selected all countries');
    updateCountryButtonStates();
    updateUI();
}

function clearAllCountries() {
    selectedCountries.clear();
    debugLog('Cleared all country selections');
    updateCountryButtonStates();
    updateUI();
}

function toggleRegion(regionId) {
    const regionDiv = document.getElementById(`region-${regionId}`);
    const toggle = event.currentTarget;
    const arrow = toggle.querySelector('.toggle-arrow');
    
    if (regionDiv.style.display === 'none') {
        regionDiv.style.display = 'flex';
        arrow.textContent = '▲';
        toggle.classList.add('active');
    } else {
        regionDiv.style.display = 'none';
        arrow.textContent = '▼';
        toggle.classList.remove('active');
    }
}

function updateCountryButtonStates() {
    document.querySelectorAll('.country-btn').forEach(btn => {
        const country = btn.dataset.country;
        if (selectedCountries.has(country)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updateUI() {
    updateCountryCards();
    updateStoryline();
    updateCharts();
    updateAdvancedCharts();
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

function updateStoryline() {
    const container = document.getElementById('storyline-content');
    
    if (selectedCountries.size === 0) {
        container.innerHTML = '<p class="storyline-empty">Select countries to see their environmental impact story</p>';
        return;
    }
    
    let storylineHTML = '<div class="storyline-wrapper">';
    
    selectedCountries.forEach((code, index) => {
        const country = COUNTRIES[code];
        const total = calculateTotalForCountry(code, currentFactorGroup);
        const domestic = calculateTotalByFlow(code, currentFactorGroup, 'domestic');
        const exports = calculateTotalByFlow(code, currentFactorGroup, 'exports');
        const imports = calculateTotalByFlow(code, currentFactorGroup, 'imports');
        
        const dominantFlow = Math.max(domestic, exports, imports);
        let flowType = 'domestic production';
        if (dominantFlow === exports) flowType = 'export activities';
        if (dominantFlow === imports) flowType = 'import activities';
        
        const percentage = total > 0 ? ((dominantFlow / total) * 100).toFixed(0) : 0;
        
        storylineHTML += `
            <div class="storyline-card" style="border-left: 5px solid ${country.color}">
                <div class="storyline-header">
                    <span class="storyline-flag">${country.flag}</span>
                    <h3>${country.name}</h3>
                    <span class="storyline-chapter">Chapter ${index + 1}</span>
                </div>
                <div class="storyline-body">
                    <p class="storyline-lead">
                        In 2019, <strong>${country.name}</strong>'s ${currentFactorGroup} impact story begins with 
                        <strong>${flowType}</strong>, accounting for <strong>${percentage}%</strong> of its total footprint.
                    </p>
                    <div class="storyline-metrics">
                        <div class="storyline-metric">
                            <div class="metric-icon">🏭</div>
                            <div class="metric-content">
                                <span class="metric-label">Domestic Impact</span>
                                <span class="metric-value">${formatNumber(domestic)}</span>
                            </div>
                        </div>
                        <div class="storyline-metric">
                            <div class="metric-icon">📤</div>
                            <div class="metric-content">
                                <span class="metric-label">Export Impact</span>
                                <span class="metric-value">${formatNumber(exports)}</span>
                            </div>
                        </div>
                        <div class="storyline-metric">
                            <div class="metric-icon">📥</div>
                            <div class="metric-content">
                                <span class="metric-label">Import Impact</span>
                                <span class="metric-value">${formatNumber(imports)}</span>
                            </div>
                        </div>
                    </div>
                    <div class="storyline-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${(domestic/total)*100}%; background: #5470C6"></div>
                            <div class="progress-fill" style="width: ${(exports/total)*100}%; background: #91CC75"></div>
                            <div class="progress-fill" style="width: ${(imports/total)*100}%; background: #FAC858"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    storylineHTML += '</div>';
    container.innerHTML = storylineHTML;
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
        Object.values(charts).forEach(chart => chart.clear && chart.clear());
        return;
    }
    
    updateComparisonChart();
    updateTradeflowChart();
    updateIndustryChart();
}

function updateAdvancedCharts() {
    if (selectedCountries.size === 0) {
        ['bubble', 'pie', 'radar', 'heatmap', 'sankey', 'gauge', 'area', 'treemap'].forEach(type => {
            if (charts[type]) charts[type].clear();
        });
        return;
    }
    
    updateBubbleChart();
    updatePieChart();
    updateRadarChart();
    updateHeatmapChart();
    updateSankeyChart();
    updateGaugeChart();
    updateAreaChart();
    updateTreemapChart();
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
        itemStyle: { 
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: COUNTRIES[code].color },
                { offset: 1, color: COUNTRIES[code].color + 'cc' }
            ]),
            shadowBlur: 10,
            shadowColor: COUNTRIES[code].color + '40',
            shadowOffsetY: 5
        }
    }));

    const option = {
        animationDuration: 1500,
        animationEasing: 'elasticOut',
        backgroundColor: 'transparent',
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '8%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter: params => {
                const p = params[0];
                return `<strong>${p.name}</strong><br/>${formatNumber(p.value)}`;
            },
            backgroundColor: 'rgba(50,50,50,0.9)',
            borderColor: '#333',
            borderWidth: 1,
            textStyle: {
                color: '#fff',
                fontSize: 13
            },
            padding: 12
        },
        xAxis: {
            type: 'category',
            data: data.map(d => d.name),
            axisLabel: { 
                interval: 0, 
                rotate: 0,
                color: '#666',
                fontSize: 12,
                fontWeight: 500
            },
            axisLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 2
                }
            }
        },
        yAxis: {
            type: 'value',
            name: 'Total Impact',
            nameTextStyle: {
                fontSize: 12,
                fontWeight: 600,
                color: '#333'
            },
            axisLabel: { 
                formatter: value => formatNumber(value),
                color: '#666',
                fontSize: 11
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: '#f0f0f0',
                    type: 'dashed'
                }
            }
        },
        series: [{
            type: 'bar',
            data: data,
            barWidth: '60%',
            label: {
                show: true,
                position: 'top',
                formatter: params => formatNumber(params.value),
                fontSize: 12,
                fontWeight: 600,
                color: '#333'
            },
            itemStyle: {
                borderRadius: [10, 10, 0, 0]
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

function updateBubbleChart() {
    const chartDiv = document.getElementById('chart-bubble');
    if (!charts.bubble) {
        charts.bubble = echarts.init(chartDiv);
    }

    const data = Array.from(selectedCountries).map(code => {
        const domestic = calculateTotalByFlow(code, currentFactorGroup, 'domestic');
        const exports = calculateTotalByFlow(code, currentFactorGroup, 'exports');
        const total = calculateTotalForCountry(code, currentFactorGroup);
        
        return {
            name: COUNTRIES[code].name,
            value: [domestic, exports, total],
            itemStyle: { 
                color: COUNTRIES[code].color,
                opacity: 0.75,
                shadowBlur: 10,
                shadowColor: COUNTRIES[code].color,
                shadowOffsetY: 3
            }
        };
    });

    const option = {
        animationDuration: 2000,
        animationEasing: 'cubicOut',
        backgroundColor: 'transparent',
        grid: {
            left: '8%',
            right: '8%',
            top: '12%',
            bottom: '12%'
        },
        tooltip: {
            formatter: params => {
                return `<strong>${params.name}</strong><br/>
                        Domestic: ${formatNumber(params.value[0])}<br/>
                        Exports: ${formatNumber(params.value[1])}<br/>
                        <strong>Total Impact: ${formatNumber(params.value[2])}</strong>`;
            },
            backgroundColor: 'rgba(50,50,50,0.9)',
            borderColor: '#333',
            borderWidth: 1,
            textStyle: {
                color: '#fff',
                fontSize: 13
            },
            padding: 12
        },
        xAxis: {
            name: 'Domestic Impact',
            nameLocation: 'middle',
            nameGap: 30,
            nameTextStyle: {
                fontSize: 13,
                fontWeight: 600,
                color: '#333'
            },
            axisLabel: { 
                formatter: value => formatNumber(value),
                color: '#666',
                fontSize: 11
            },
            axisLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 2
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#f0f0f0',
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            name: 'Export Impact',
            nameLocation: 'middle',
            nameGap: 50,
            nameTextStyle: {
                fontSize: 13,
                fontWeight: 600,
                color: '#333'
            },
            axisLabel: { 
                formatter: value => formatNumber(value),
                color: '#666',
                fontSize: 11
            },
            axisLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 2
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#f0f0f0',
                    type: 'dashed'
                }
            }
        },
        series: [{
            type: 'scatter',
            symbolSize: d => Math.sqrt(d[2]) / 800 + 30,
            data: data,
            label: {
                show: true,
                position: 'top',
                formatter: '{a}',
                fontSize: 12,
                fontWeight: 600,
                color: '#333',
                distance: 8
            },
            emphasis: {
                focus: 'self',
                scale: 1.3,
                itemStyle: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0,0,0,0.3)'
                }
            }
        }]
    };

    charts.bubble.setOption(option, true);
}

function updatePieChart() {
    const chartDiv = document.getElementById('chart-pie');
    if (!charts.pie) {
        charts.pie = echarts.init(chartDiv);
    }

    const data = [];
    selectedCountries.forEach(code => {
        TRADE_FLOWS.forEach(flow => {
            const value = calculateTotalByFlow(code, currentFactorGroup, flow);
            if (value > 0) {
                data.push({
                    name: `${COUNTRIES[code].name} - ${flow}`,
                    value: value,
                    itemStyle: {
                        color: COUNTRIES[code].color,
                        opacity: flow === 'domestic' ? 1 : (flow === 'exports' ? 0.8 : 0.6)
                    }
                });
            }
        });
    });

    const option = {
        animationDuration: 1500,
        animationEasing: 'cubicInOut',
        tooltip: {
            trigger: 'item',
            formatter: params => `${params.name}<br/>${formatNumber(params.value)} (${params.percent}%)`,
            backgroundColor: 'rgba(50,50,50,0.9)',
            borderColor: '#333',
            borderWidth: 1,
            textStyle: {
                color: '#fff',
                fontSize: 13
            }
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 'center',
            textStyle: { 
                fontSize: 11,
                lineHeight: 16
            },
            pageIconSize: 12,
            pageTextStyle: {
                fontSize: 11
            }
        },
        series: [{
            type: 'pie',
            radius: ['35%', '65%'],
            center: ['40%', '50%'],
            roseType: 'area',
            avoidLabelOverlap: true,
            itemStyle: {
                borderRadius: 8,
                borderColor: '#fff',
                borderWidth: 3
            },
            label: {
                show: true,
                position: 'outside',
                fontSize: 11,
                lineHeight: 14,
                formatter: '{d}%',
                color: '#333'
            },
            labelLine: {
                show: true,
                length: 10,
                length2: 10,
                smooth: 0.3
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 13,
                    fontWeight: 'bold'
                },
                itemStyle: {
                    shadowBlur: 15,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.4)'
                },
                scale: true,
                scaleSize: 8
            },
            data: data
        }]
    };

    charts.pie.setOption(option, true);
}

function updateRadarChart() {
    const chartDiv = document.getElementById('chart-radar');
    if (!charts.radar) {
        charts.radar = echarts.init(chartDiv);
    }

    const indicator = ALL_FACTOR_GROUPS.map(group => ({
        name: group.charAt(0).toUpperCase() + group.slice(1),
        max: 0
    }));

    const seriesData = [];
    
    selectedCountries.forEach(code => {
        const values = ALL_FACTOR_GROUPS.map(group => 
            calculateTotalForCountry(code, group)
        );
        
        values.forEach((val, idx) => {
            indicator[idx].max = Math.max(indicator[idx].max, val);
        });
        
        seriesData.push({
            name: COUNTRIES[code].name,
            value: values,
            areaStyle: { opacity: 0.3 }
        });
    });

    indicator.forEach(ind => ind.max = ind.max * 1.1);

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: params => {
                let result = `${params.name}<br/>`;
                params.value.forEach((val, idx) => {
                    result += `${indicator[idx].name}: ${formatNumber(val)}<br/>`;
                });
                return result;
            }
        },
        legend: {
            data: Array.from(selectedCountries).map(code => COUNTRIES[code].name),
            bottom: 0
        },
        radar: {
            indicator: indicator
        },
        series: [{
            type: 'radar',
            data: seriesData
        }]
    };

    charts.radar.setOption(option, true);
}

function updateHeatmapChart() {
    const chartDiv = document.getElementById('chart-heatmap');
    if (!charts.heatmap) {
        charts.heatmap = echarts.init(chartDiv);
    }

    const countries = Array.from(selectedCountries);
    const data = [];
    
    countries.forEach((code, xIdx) => {
        ALL_FACTOR_GROUPS.forEach((group, yIdx) => {
            const value = calculateTotalForCountry(code, group);
            data.push([xIdx, yIdx, value]);
        });
    });

    const option = {
        tooltip: {
            position: 'top',
            formatter: params => {
                const country = countries[params.value[0]];
                const group = ALL_FACTOR_GROUPS[params.value[1]];
                return `${COUNTRIES[country].name}<br/>${group}: ${formatNumber(params.value[2])}`;
            }
        },
        grid: {
            left: 100,
            bottom: 60,
            right: 40
        },
        xAxis: {
            type: 'category',
            data: countries.map(code => COUNTRIES[code].name),
            splitArea: { show: true }
        },
        yAxis: {
            type: 'category',
            data: ALL_FACTOR_GROUPS.map(g => g.charAt(0).toUpperCase() + g.slice(1)),
            splitArea: { show: true }
        },
        visualMap: {
            min: 0,
            max: Math.max(...data.map(d => d[2])),
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: 0,
            inRange: {
                color: ['#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695']
            }
        },
        series: [{
            type: 'heatmap',
            data: data,
            label: {
                show: true,
                formatter: params => formatNumber(params.value[2])
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    charts.heatmap.setOption(option, true);
}

function updateSankeyChart() {
    const chartDiv = document.getElementById('chart-sankey');
    if (!charts.sankey) {
        charts.sankey = echarts.init(chartDiv);
    }

    const nodes = [];
    const links = [];
    
    selectedCountries.forEach(code => {
        const countryName = COUNTRIES[code].name;
        nodes.push({ name: countryName });
        
        TRADE_FLOWS.forEach(flow => {
            const flowName = `${countryName}-${flow}`;
            nodes.push({ name: flowName });
            
            const value = calculateTotalByFlow(code, currentFactorGroup, flow);
            if (value > 0) {
                links.push({
                    source: countryName,
                    target: flowName,
                    value: value
                });
            }
        });
    });

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: params => {
                if (params.dataType === 'edge') {
                    return `${params.data.source} → ${params.data.target}<br/>Impact: ${formatNumber(params.value)}`;
                }
                return params.name;
            }
        },
        series: [{
            type: 'sankey',
            layout: 'none',
            emphasis: {
                focus: 'adjacency'
            },
            data: nodes,
            links: links,
            lineStyle: {
                color: 'gradient',
                curveness: 0.5
            }
        }]
    };

    charts.sankey.setOption(option, true);
}

function updateGaugeChart() {
    const gaugesContainer = document.getElementById('gauges-container');
    if (!gaugesContainer) return;
    
    gaugesContainer.innerHTML = '';
    
    if (selectedCountries.size === 0) {
        gaugesContainer.innerHTML = '<p class="empty-message">Select countries to view intensity gauges</p>';
        return;
    }

    const allCountries = Object.keys(COUNTRIES);
    const allTotals = allCountries.map(c => calculateTotalForCountry(c, currentFactorGroup));
    const maxTotal = Math.max(...allTotals.filter(t => t > 0));
    
    selectedCountries.forEach(code => {
        const gaugeDiv = document.createElement('div');
        gaugeDiv.className = 'gauge-item';
        gaugeDiv.innerHTML = `
            <div class="gauge-header">
                <span class="gauge-flag">${COUNTRIES[code].flag}</span>
                <h4>${COUNTRIES[code].name}</h4>
            </div>
            <div id="gauge-${code}" class="gauge-chart"></div>
            <div class="gauge-footer">
                <span class="gauge-value">${formatNumber(calculateTotalForCountry(code, currentFactorGroup))}</span>
                <span class="gauge-label">${currentFactorGroup} impact</span>
            </div>
        `;
        gaugesContainer.appendChild(gaugeDiv);
        
        const total = calculateTotalForCountry(code, currentFactorGroup);
        const percentage = maxTotal > 0 ? (total / maxTotal * 100) : 0;
        
        const gaugeChartDiv = document.getElementById(`gauge-${code}`);
        const gaugeChart = echarts.init(gaugeChartDiv);
        
        charts[`gauge-${code}`] = gaugeChart;
        
        const option = {
            series: [{
                type: 'gauge',
                startAngle: 180,
                endAngle: 0,
                center: ['50%', '60%'],
                radius: '80%',
                min: 0,
                max: 100,
                splitNumber: 4,
                axisLine: {
                    lineStyle: {
                        width: 5,
                        color: [
                            [0.3, '#67C23A'],
                            [0.7, '#E6A23C'],
                            [1, '#F56C6C']
                        ]
                    }
                },
                pointer: {
                    icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                    length: '60%',
                    width: 7,
                    offsetCenter: [0, '15%'],
                    itemStyle: {
                        color: COUNTRIES[code].color
                    }
                },
                axisTick: {
                    length: 4,
                    lineStyle: {
                        color: 'auto',
                        width: 1
                    }
                },
                splitLine: {
                    length: 7,
                    lineStyle: {
                        color: 'auto',
                        width: 2
                    }
                },
                axisLabel: {
                    color: '#666',
                    fontSize: 8,
                    distance: -24,
                    formatter: value => {
                        if (value === 0) return '0';
                        if (value === 100) return '100';
                        if (value === 50) return '50';
                        return '';
                    }
                },
                title: {
                    show: false
                },
                detail: {
                    show: false
                },
                data: [{
                    value: 0
                }],
                animationDuration: 2000,
                animationEasing: 'cubicInOut'
            }]
        };
        
        gaugeChart.setOption(option);
        
        setTimeout(() => {
            gaugeChart.setOption({
                series: [{
                    data: [{
                        value: percentage.toFixed(1)
                    }]
                }]
            });
        }, 100);
    });
}

function updateAreaChart() {
    const chartDiv = document.getElementById('chart-area');
    if (!charts.area) {
        charts.area = echarts.init(chartDiv);
    }

    const countries = Array.from(selectedCountries);
    
    const series = TRADE_FLOWS.map((flow, idx) => ({
        name: flow.charAt(0).toUpperCase() + flow.slice(1),
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
            focus: 'series'
        },
        data: countries.map(code => calculateTotalByFlow(code, currentFactorGroup, flow)),
        smooth: true
    }));

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            formatter: params => {
                let result = `${params[0].axisValue}<br/>`;
                params.forEach(p => {
                    result += `${p.marker} ${p.seriesName}: ${formatNumber(p.value)}<br/>`;
                });
                return result;
            }
        },
        legend: {
            data: ['Domestic', 'Exports', 'Imports'],
            bottom: 0
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: countries.map(code => COUNTRIES[code].name)
        },
        yAxis: {
            type: 'value',
            axisLabel: { formatter: value => formatNumber(value) }
        },
        series: series
    };

    charts.area.setOption(option, true);
}

function updateTreemapChart() {
    const chartDiv = document.getElementById('chart-treemap');
    if (!charts.treemap) {
        charts.treemap = echarts.init(chartDiv);
    }

    const data = [];
    
    selectedCountries.forEach(code => {
        const country = COUNTRIES[code];
        const children = TRADE_FLOWS.map(flow => ({
            name: flow,
            value: calculateTotalByFlow(code, currentFactorGroup, flow)
        })).filter(f => f.value > 0);
        
        const total = children.reduce((sum, f) => sum + f.value, 0);
        
        if (total > 0) {
            data.push({
                name: country.name,
                value: total,
                itemStyle: { color: country.color },
                children: children
            });
        }
    });

    const option = {
        animationDuration: 1800,
        animationEasing: 'cubicOut',
        tooltip: {
            formatter: params => `${params.name}<br/>Impact: ${formatNumber(params.value)}`
        },
        series: [{
            type: 'treemap',
            data: data,
            leafDepth: 2,
            roam: false,
            nodeClick: 'zoomToNode',
            label: {
                show: true,
                formatter: '{b}',
                fontSize: 12
            },
            upperLabel: {
                show: true,
                height: 30,
                fontSize: 14,
                fontWeight: 'bold'
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 2,
                gapWidth: 2
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0,0,0,0.3)',
                    borderColor: '#333',
                    borderWidth: 3
                },
                label: {
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            },
            levels: [
                {
                    itemStyle: {
                        borderColor: '#777',
                        borderWidth: 0,
                        gapWidth: 2
                    },
                    upperLabel: {
                        show: false
                    }
                },
                {
                    itemStyle: {
                        borderColor: '#555',
                        borderWidth: 5,
                        gapWidth: 1
                    }
                },
                {
                    colorSaturation: [0.35, 0.5],
                    itemStyle: {
                        borderWidth: 3,
                        gapWidth: 1,
                        borderColorSaturation: 0.6
                    }
                }
            ]
        }]
    };

    charts.treemap.setOption(option, true);
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
        Object.values(charts).forEach(chart => {
            if (chart && chart.resize) chart.resize();
        });
    });
    
    // Update button states to show USA as selected
    updateCountryButtonStates();
    
    loadAllData();
});

window.toggleCountry = toggleCountry;
window.selectAllCountries = selectAllCountries;
window.clearAllCountries = clearAllCountries;
window.toggleRegion = toggleRegion;