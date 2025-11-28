// Each country now has 10 UNIQUE insights
const countryInsights = {
    USA: [
        "The U.S. leads renewable energy technology exports, valued at $72B in 2024.",
        "Sustainable agriculture products increased 34% YoY, driven by global demand.",
        "The U.S. cut carbon-intensive imports by 12% through green-tariff reforms.",
        "EV component exports to Europe rose 41% after new bilateral trade programs.",
        "50+ U.S. corporations have adopted UN SDG 12 reporting in all supply chains.",
        "California accounts for 18% of U.S. clean-tech export volume.",
        "Eco-certified textile exports rose 9%, supported by traceability efforts.",
        "Biodegradable packaging exports grew to $19.6B — a global record.",
        "Methane-reduction trade partnerships expanded to 24 countries in 2025.",
        "The Inflation Reduction Act boosted green-manufacturing trade jobs by 210K."
    ],
    China: [
        "China produces 75% of the world’s solar panels and exports to 150+ nations.",
        "Green logistics corridors reduced emissions by 19% on main shipping routes.",
        "Sustainable trade financing reached $44B to incentivize eco-friendly exporters.",
        "Bamboo-based biodegradable materials exports rose 52% YoY.",
        "China increased compliance with circular-economy regulations for exports.",
        "Electric bus exports tripled due to African and Latin-American adoption.",
        "Green Belt & Road trade projects added 3.2M jobs worldwide.",
        "China recycles 95% of lithium batteries used in exported EVs.",
        "CO₂-adjusted trade pricing now covers 62% of China’s export contracts.",
        "Smart-port automation cut cargo emissions by 28% across mega-ports."
    ],
    India: [
        "India became the world’s top exporter of organic cotton in 2024.",
        "Solar module exports grew 39% with demand from Europe and MENA.",
        "India doubled its fair-trade certified producer cooperatives.",
        "Green hydrogen trade partnerships formed with Japan, UAE and Germany.",
        "Eco-friendly ayurvedic product exports hit $6B globally.",
        "Plastic-alternative jute exports surged 71% YoY.",
        "India reduced deforestation-linked exports via digital land-use monitoring.",
        "Sustainable aquaculture exports expanded 33% with UN traceability.",
        "EV battery manufacturing exports reached $9.3B in 2025.",
        "India is building 40 sustainable shipping hubs powered by renewables."
    ],
    Brazil: [
        "Brazil achieved 78% traceability in beef exports — highest ever recorded.",
        "Forest-positive soy exports reached $18B with zero-deforestation compliance.",
        "Brazil became the largest exporter of sustainable aviation fuel feedstock.",
        "Agro-solar farms improved crop productivity and export revenue by 23%.",
        "Eco-tourism now represents 12% of Brazil’s service-export sector.",
        "Native-tree reforestation linked to export permits restored 116M hectares.",
        "Rainforest-certified coffee exports grew 46% YoY.",
        "Bio-plastics from sugarcane exports reached 6.1M tons annually.",
        "Wind-energy equipment exports increased 34% YoY.",
        "Amazon green-bond trading funded 1,200+ clean-supply-chain startups."
    ],
    Germany: [
        "Germany leads clean industrial machinery exports worth $108B annually.",
        "Hydrogen fuel-cell technology exports expanded 57% across Asia.",
        "Waste-to-energy trade avoided 13M tons of landfill emissions.",
        "Circular manufacturing partnerships lowered CO₂ by 29%.",
        "Eco-certified mechanical engineering exports hit a global high.",
        "Organic food exports rose 44% across the EU and Middle East.",
        "Germany invested $21B in sustainable-trade infrastructure abroad.",
        "Carbon-label transparency applies to 96% of export products.",
        "Sustainable freight corridors increased efficiency by 31%.",
        "Green steel production enabled new low-emissions trade deals."
    ],
    Netherlands: [
        "The Netherlands is the world’s largest exporter of circular-economy plastics.",
        "Amsterdam port reduced maritime emissions 33% using smart routing systems.",
        "Plant-based food exports surged 69% YoY due to EU sustainable shift.",
        "Water-efficient greenhouse solutions are now exported to 55+ countries.",
        "Dutch bio-chemicals exports reached $27B in 2025.",
        "Netherlands pioneered blockchain-trade traceability for agri-products.",
        "Sustainable seafood trade is certified at 88%, highest in the EU.",
        "Electric shipping fleets now handle 22% of domestic container exports.",
        "Netherlands co-finances UN SDG trade accelerator for developing economies.",
        "Recycled textile exports grew 48% thanks to domestic clothing-return programs."
    ],
    France: [
        "France leads sustainable luxury goods exports with full supply-chain traceability.",
        "Organic wine exports reached $10.2B, highest globally.",
        "France reduced carbon-intensive imports through green border adjustment taxes.",
        "Hydrogen-powered aviation technology exports rose 37%.",
        "Eco-certified dairy exports grew 32% with Middle East demand.",
        "France expanded eco-design regulations to all export packaging.",
        "Sustainable cosmetics reached $29B in export value.",
        "Digital carbon-reporting now applies to 90% of export contracts.",
        "France supports 41 developing nations through SDG-aligned trade programs.",
        "Wind-turbine component exports rose 44% in 2025."
    ],
    Norway: [
        "Norway is the #1 exporter of sustainable seafood with 96% traceability.",
        "Green shipping fuels exports (ammonia & hydrogen) reached $12B in 2024.",
        "Offshore wind equipment exports grew 58% YoY.",
        "Norway charges low-carbon freight incentives for global shipping partners.",
        "Circular battery materials exports replaced 41% of mining-dependent trade.",
        "Smart-aquaculture automation reduced trade-linked emissions 26%.",
        "Norway finances UN climate-positive trade development for island nations.",
        "Eco-labelled aluminum exports climbed 72% YoY.",
        "Maritime AI-navigation tech is now exported to 90+ countries.",
        "Nature-positive ocean-economy trade added 60K new jobs."
    ],
    Switzerland: [
        "Switzerland leads sustainable finance exports with $3.1T in ESG-aligned assets.",
        "Carbon-neutral pharmaceutical exports grew 23% YoY.",
        "Precision-manufacturing exports now require full supply-chain transparency.",
        "Swiss watch industry reduced emissions 42% through sustainable materials.",
        "Hydropower-equipment exports increased 38%.",
        "Switzerland is a global hub for UN SDG-based trade certification.",
        "Sustainable chocolate exports rose with zero-deforestation cocoa sourcing.",
        "Bio-medical manufacturing exports now use fully recyclable packaging.",
        "Switzerland negotiates climate-positive trade deals with 32 nations.",
        "AI-based carbon-verification services became a major service-export sector."
    ],
    UK: [
        "The UK is Europe’s leading exporter of offshore wind technology.",
        "Sustainable fashion exports grew 54% due to circular-design mandates.",
        "The UK eliminated coal-linked imports from state-procurement supply chains.",
        "Low-carbon steel exports reached $7.8B in 2025.",
        "Sustainable fintech services expanded to 65 countries.",
        "Organic agriculture exports rose 28% with strong demand from East Asia.",
        "Digital product-passport requirements now cover most consumer exports.",
        "Shipping-decarbonization partnerships reduced emissions 31%.",
        "University-industry green-innovation exports reached $12B.",
        "UK operates the largest SDG-aligned trade training network in the Commonwealth."
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
