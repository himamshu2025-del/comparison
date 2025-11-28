/* -------------------------------
   Biodiversity-Based Trade Chart
-------------------------------- */
const ctx = document.getElementById('tradeChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'United States',
            'China',
            'Germany',
            'Netherlands',
            'France',
            'India',
            'Brazil'
        ],
        datasets: [{
            label: 'Biodiversity-based exports (USD Billions)',
            data: [332.9, 318.41, 210.0, 181.6, 160.4, 109.3, 102.2],
            backgroundColor: [
                '#3e95cd', '#8e5ea2', '#3cba9f',
                '#e8c3b9', '#c45850', '#4bc0c0', '#ffa600'
            ]
        }]
    },
    options: {
        plugins: {
            tooltip: { enabled: true }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: value => value + "B USD"
                }
            }
        }
    }
});

/* --------------------------------------
   Country-Specific Sustainable Insights
--------------------------------------- */

const countryInsights = {
    USA: [
        "Leads global biodiversity-based exports at USD 332.9B in 2022.",
        "Growing consumer demand for sustainable and ethically sourced goods.",
        "Major companies implement ESG and sustainability reporting in supply chains.",
        "Investments in traceability technology for agriculture and manufacturing.",
        "High compliance requirements related to forced-labor and transparency.",
        "Strong role in development of sustainability-focused trade agreements.",
        "Retailers increasingly require sustainability certifications from suppliers.",
        "High import standards push exporters globally toward sustainability upgrades.",
        "Government subsidies support renewable and sustainable production sectors.",
        "Biodiversity-based products contribute significantly to US green economy growth."
    ],
    China: [
        "Ranked 2nd globally in biodiversity-based exports at USD 318.41B in 2022.",
        "Rapid growth in sustainable agriculture and forestry initiatives.",
        "Adoption of traceability systems driven by demand from European and US buyers.",
        "Green manufacturing reforms reduce water and carbon footprints in exports.",
        "Expansion of policies for sustainability within value-chain sectors.",
        "Large renewable energy production supports sustainable trade transitions.",
        "Growing participation in voluntary sustainability certifications for export access.",
        "Digital supply-chain tracking used across textile, leather, and electronics.",
        "Strong government support for circular-economy business models.",
        "Eco-friendly production increasingly a driver of global competitiveness."
    ],
    Germany: [
        "Supply Chain Due Diligence Act legally requires sustainability risk management.",
        "Among top exporters of biodiversity-based products in the world.",
        "Sustainability reporting mandatory for large corporations across value chains.",
        "High demand for certified sustainable forestry and agricultural imports.",
        "Green consumption trends shape import/export conditions.",
        "Carbon-neutral logistics emerging across German ports and transport.",
        "Government investment in climate innovation to support greener exports.",
        "Industry partnerships promote fair labor and biodiversity protection.",
        "Wide adoption of renewable energy in manufacturing supply chains.",
        "Major player in global transition toward mandatory sustainable trade compliance."
    ],
    Netherlands: [
        "Integrates sustainability enforcement into national trade policy frameworks.",
        "Large share of world biodiversity-based exports via global ports (Rotterdam).",
        "A global hub for sustainable agricultural and horticultural goods.",
        "Digital traceability programs adopted across food value chains.",
        "Government incentives support sustainability certification for exporters.",
        "Businesses rapidly adopting ESG in supply-chain risk management.",
        "Supports developing nations to meet sustainability standards in trade.",
        "Key advocate for sustainability clauses in EU trade agreements.",
        "Strong consumer preference for eco-labeled imported products.",
        "Gateway role forces continuous investment in low-carbon port logistics."
    ],
    France: [
        "Corporate Duty of Vigilance Law requires mandatory due-diligence reporting.",
        "Major contributor to European biodiversity-based trade flows.",
        "High demand for fair-trade and eco-certification in import markets.",
        "Investment in sustainable agriculture and low-emission production sectors.",
        "Carbon reporting and supply-chain transparency enforced for large firms.",
        "Active use of social and environmental indicators for trade decisions.",
        "Growing innovation in climate-friendly logistics infrastructure.",
        "Leading exporter of sustainable wine, cosmetics, and agricultural goods.",
        "Policies extend sustainability obligations to global suppliers.",
        "Supports international financing to help developing-country exporters comply."
    ],
    Norway: [
        "Transparency Act requires supply-chain due diligence for human rights.",
        "Sustainability integrated heavily into import regulations and procurement.",
        "High sustainability standards in seafood and forestry exports.",
        "Monitoring systems ensure compliance with global certification requirements.",
        "Government investments encourage sustainable maritime and logistics systems.",
        "Public reporting obligations ensure traceability for global supply partners.",
        "Strong adoption of circular-economy principles across industries.",
        "International cooperation to build sustainable supply chains with partners.",
        "Consumer preference strongly favors certified sustainable imports.",
        "Plays leading role in sustainability-focused European trade strategies."
    ],
    Switzerland: [
        "Mandatory ESG reporting for large companies per 2022 legal framework.",
        "Strong focus on ethical sourcing in pharmaceuticals, metals & food imports.",
        "Financial industry supports global sustainable-trade investments.",
        "Certification systems widely adopted for agricultural and luxury goods.",
        "High traceability standards for high-value natural-resource imports.",
        "Policies reinforce human-rights protection in international trade.",
        "Participation in global supply-chain transparency initiatives.",
        "Partnerships support sustainable trade capacity in developing nations.",
        "Focus on biodiversity-conserving sourcing for global supply chains.",
        "Consumers drive demand for clean, transparent supply chains."
    ],
    UK: [
        "Modern Slavery Act requires mandatory transparency in supply chains.",
        "Supports business transition toward full ESG and sustainability reporting.",
        "Large importer with tightening sustainability requirements for exporters.",
        "Growing marketplace for eco-labeled and fair-trade certified imports.",
        "Government promotes sustainable logistics and carbon-neutral shipping.",
        "Retailers impose sustainability standards on overseas suppliers.",
        "Strong trade-policy alignment with climate and biodiversity commitments.",
        "Circular-economy innovation encouraged across industries and ports.",
        "Partnering with developing countries for sustainable supply capacity.",
        "Sustainability increasingly decisive for export market access."
    ],
    India: [
        "Among top biodiversity-based exporters globally (3.2% of world share).",
        "Export sectors increasingly rely on sustainability certifications.",
        "Digital traceability emerging in textiles, spices, and agricultural trade.",
        "Growing demand from EU/US markets pushing exporters to upgrade standards.",
        "Free Trade Agreements include sustainability chapters and obligations.",
        "Government support programs help MSMEs meet global sustainability rules.",
        "Green production technologies adopted in renewable and bio-resources sectors.",
        "Focus on forest-based livelihood products and fair benefit-sharing.",
        "Eco-tourism and handicrafts contribute to sustainable-trade diversification.",
        "Challenges remain with cost and complexity of compliance for small producers."
    ],
    Brazil: [
        "Among top global exporters of biodiversity-based goods.",
        "High demand for sustainability in soy, timber and agricultural trade flows.",
        "New traceability infrastructure developed for forestry and livestock.",
        "Pressure from importing markets drives sustainability upgrades.",
        "Large-scale protection of biodiversity linked to trade competitiveness.",
        "Expansion of green-logistics initiatives in major export ports.",
        "Increased participation in certification programs for agriculture.",
        "Indigenous and rural communities supported in sustainable supply chains.",
        "Government and private sector promoting climate-aligned production.",
        "Sustainability now linked to economic opportunity in international markets."
    ]
};

/* -------------------------------
    Populate Country Dropdown
-------------------------------- */
const select = document.getElementById("countrySelect");
Object.keys(countryInsights).forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    select.appendChild(option);
});

/* -------------------------------
      Display Country Insights
-------------------------------- */
function displayInsights(country) {
    const container = document.getElementById("insightsContainer");
    container.innerHTML = "";

    if (!country || !countryInsights[country]) return;

    countryInsights[country].forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "insight-box";
        div.innerHTML = `<strong>Insight ${index + 1}:</strong> ${item}`;
        container.appendChild(div);
    });
}

/* -------------------------------
   On Country Selection Change
-------------------------------- */
select.addEventListener("change", e => {
    displayInsights(e.target.value);
});
