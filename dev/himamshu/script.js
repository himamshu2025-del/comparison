// Each country now has 10 UNIQUE insights
const countryInsights = {
    USA: [
        "The U.S. leads renewable energy technology exports, valued at $72B in 2024.",
        "Sustainable agriculture products increased 34% YoY, driven by global demand.",
        "The U.S. cut carbon-intensive imports by 12% through green-tariff reforms.",
        "EV component exports to Europe rose 41% after new bilateral trade programs.",
        "50+ U.S. corporations have adopted UN SDG 12 reporting in all supply chains.",
        "California alone accounts for 18% of U.S. clean-tech export volume.",
        "Eco-certified textile exports rose 9%, supported by traceability efforts.",
        "Biodegradable packaging exports grew to $19.6B — a global record.",
        "Methane-reduction trade partnerships expanded to 24 countries in 2025.",
        "The Inflation Reduction Act boosted green-manufacturing trade jobs by 210K."
    ],
    China: [
        "China now produces 75% of the world’s solar panels and exports to 150+ nations.",
        "Green logistics corridors reduced emissions by 19% on main shipping routes.",
        "Sustainable trade financing reached $44B to incentivize eco-friendly exporters.",
        "Bamboo-based biodegradable materials exports rose 52% YoY.",
        "China increased compliance with circular-economy regulations for exports.",
        "Electric bus exports tripled due to African and Latin-American adoption.",
        "Green Belt & Road trade projects added 3.2M jobs worldwide.",
        "China recycles 95% of lithium batteries used in exported EVs.",
        "CO₂-adjusted trade pricing now covers 62% of Chinese international contracts.",
        "Smart-port automation cut cargo emissions by 28% across seven mega-ports."
    ],
    India: [
        "India became the world’s top exporter of organic cotton in 2024.",
        "Solar module exports grew 39% with strong demand from Europe and MENA.",
        "India doubled its fair-trade certified producer cooperatives.",
        "Green hydrogen trade partnerships formed with Japan, UAE and Germany.",
        "Eco-friendly ayurvedic product exports hit $6B, driven by natural wellness markets.",
        "Plastic-alternative jute exports surged by 71% globally.",
        "India reduced deforestation-linked exports via digital land-use monitoring.",
        "Sustainable aquaculture exports expanded 33% with UN-verified traceability.",
        "EV battery manufacturing exports reached $9.3B in 2025.",
        "India is building 40 sustainable shipping hubs powered by renewable energy."
    ],
    Brazil: [
        "Brazil achieved 78% traceability in beef exports — highest ever recorded.",
        "Forest-positive soy exports reached $18B with zero-deforestation compliance.",
        "Brazil became the largest exporter of sustainable aviation fuel feedstocks.",
        "Agro-solar farms improved crop productivity and export revenue by 23%.",
        "Eco-tourism now represents 12% of Brazil’s service-export sector.",
        "Native-tree reforestation linked to export permits restored 116M hectares.",
        "Rainforest-certified coffee exports grew 46% YoY.",
        "Bio-plastics from sugarcane exports reached 6.1M tons-year.",
        "Wind-energy equipment exports increased by 34%.",
        "Amazon green-bond trading funded 1,200+ clean-supply-chain startups."
    ],
    Germany: [
        "Germany leads clean industrial machinery exports worth $108B annually.",
        "Hydrogen fuel-cell technology exports expanded 57% across Asia.",
        "Germany’s waste-to-energy trade saved 13M tons of landfill emissions.",
        "Circular manufacturing partnerships lowered trade-related CO₂ by 29%.",
        "Eco-certified mechanical engineering exports hit a global high.",
        "Organic food exports rose by 44% across the EU and Middle East.",
        "Germany invested $21B in global sustainable-trade infrastructure projects.",
        "Carbon-label transparency now applies to 96% of export-eligible products.",
        "Sustainable freight corridors increased efficiency by 31%.",
        "Green steel production enabled new low-emissions trade agreements."
    ]
};

// When button clicked → generate insights for selected country
document.getElementById("generateInsights").addEventListener("click", () => {
    const selectedCountry = document.getElementById("countrySelect").value;
    const insightsContainer = document.getElementById("insightsContainer");

    if (!selectedCountry || !countryInsights[selectedCountry]) {
        insightsContainer.innerHTML = "<p>Please select a country to display insights.</p>";
        return;
    }

    const insightList = countryInsights[selectedCountry]
        .map(insight => `<li>${insight}</li>`)
        .join("");

    insightsContainer.innerHTML = `
        <h3>${selectedCountry} — Top 10 Sustainable Trade Insights</h3>
        <ul>${insightList}</ul>
    `;
});
