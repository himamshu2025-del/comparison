// Global Insights from UN data
const globalInsights = [
  "Mandatory due diligence laws are increasingly adopted in developed economies.",
  "VSS certifications remain critical for small producers accessing global green markets.",
  "Supply-chain resilience is now a top priority due to pandemics, climate change, and geopolitical risks.",
  "Sustainable trade is expanding to include labor rights, social justice, and equitable benefit sharing.",
  "Digital traceability tools improve transparency in textiles, leather, and agriculture.",
  "Green trade policies are integrated into national and international agreements.",
  "Diversification into green sectors (renewables, eco-tourism, sustainable handicrafts) is accelerating.",
  "Biodiversity-based trade reached ~$3.4 trillion globally in 2022.",
  "Developing countries face challenges in compliance without capacity-building support.",
  "Global cooperation and harmonized standards are essential for fair sustainable trade."
];

// Country-specific Insights
const countryData = {
  "Germany": [
    "Germany enforces the Supply Chain Due Diligence Act (LkSG) since 2023.",
    "One of the top 3 exporters of biodiversity-based goods globally.",
    "Strong focus on human rights and environmental risk mitigation in supply chains.",
    "Supports VSS certifications and traceability practices.",
    "Promotes green economy exports through renewable energy and sustainable forestry.",
    "Integrates sustainability into trade agreements and policies.",
    "Emphasizes supply-chain resilience and monitoring.",
    "Collaborates with EU and UN programs for sustainable trade.",
    "Facilitates fair labor practices in global exports.",
    "Invests in capacity-building for SMEs and small exporters."
  ],
  "USA": [
    "US enforces regulations on forced/child labor and supply-chain transparency.",
    "Largest global exporter of biodiversity-based products ($332.9B in 2022).",
    "Strengthens compliance via legal requirements and international pressure.",
    "VSS certifications bridge market access for small producers.",
    "Integrates environmental considerations in import/export practices.",
    "Digital traceability tools improve reporting and sustainability verification.",
    "Supports capacity-building for small and medium exporters abroad.",
    "Focuses on green trade policies aligned with UN SDGs.",
    "Promotes inclusive supply chains with fair labor protections.",
    "Invests in data and monitoring infrastructure for trade sustainability."
  ],
  "China": [
    "China is a leading exporter of biodiversity-based products ($318.4B in 2022).",
    "Major player in global sustainable trade markets.",
    "Implements voluntary sustainability standards (VSS) for compliance.",
    "Developing digital traceability and monitoring practices.",
    "Encourages diversification into green sectors like renewable energy and agriculture.",
    "Focus on meeting international importers' sustainability requirements.",
    "Works with multilateral institutions for trade compliance capacity.",
    "Supports social inclusion and equitable benefit-sharing in trade.",
    "Monitors environmental risks in supply chains.",
    "Promotes sustainable practices in biodiversity-based exports."
  ],
  "India": [
    "India engages in trade agreements including sustainable development commitments.",
    "Some exporters rely on VSS for market access.",
    "Among top global exporters of biodiversity-based goods (~3.2% share in 2022).",
    "Developing policies to integrate sustainability in trade.",
    "Promotes green economy exports and renewable agriculture.",
    "Digital traceability initiatives emerging for high-value commodities.",
    "Supports small producers to comply with due-diligence expectations.",
    "Strengthens inclusive trade practices and fair labor standards.",
    "Works with UNCTAD/UNIDO for sustainable trade programs.",
    "Focuses on biodiversity-based trade while protecting natural resources."
  ]
};

// Display Global Insights
const globalList = document.getElementById("global-list");
globalInsights.forEach(ins => {
  const li = document.createElement("li");
  li.textContent = ins;
  globalList.appendChild(li);
});

// Display Country Insights
const container = document.getElementById("countries-container");
for (const [country, insights] of Object.entries(countryData)) {
  const card = document.createElement("div");
  card.className = "country-card";

  const title = document.createElement("h3");
  title.textContent = country + " Insights";

  const ul = document.createElement("ul");
  insights.forEach(ins => {
    const li = document.createElement("li");
    li.textContent = ins;
    ul.appendChild(li);
  });

  card.appendChild(title);
  card.appendChild(ul);
  container.appendChild(card);
}

// Trade Flow Chart (Biodiversity-Based Export Values 2022)
const ctx = document.getElementById('tradeChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: Object.keys(countryData),
    datasets: [{
      label: 'Biodiversity-Based Exports 2022 (USD Billion)',
      data: [null, 332.9, 318.4, null], // Germany and India can be added if values known
      backgroundColor: ['#4CAF50','#FF9800','#2196F3','#9C27B0']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: '2022 Biodiversity-Based Exports by Country' },
      legend: { display: false }
    }
  }
});
