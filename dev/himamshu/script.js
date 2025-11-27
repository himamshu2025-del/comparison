// Global Insights
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

// Country-specific Insights and Icons
const countryData = {
  "Germany": {
    insights: ["Germany enforces the Supply Chain Due Diligence Act (LkSG)...", "One of the top 3 exporters...", "Focus on human rights...", "Supports VSS...", "Promotes green economy exports...", "Integrates sustainability in agreements...", "Emphasizes supply-chain resilience...", "Collaborates with EU/UN...", "Fair labor practices...", "Capacity-building for SMEs..."],
    icon: "https://flagcdn.com/de.svg"
  },
  "USA": {
    insights: ["US enforces regulations on forced/child labor...", "Largest global exporter of biodiversity-based products ($332.9B)...", "Strengthens compliance via legal requirements...", "VSS certifications bridge market access...", "Integrates environmental considerations...", "Digital traceability tools improve reporting...", "Supports capacity-building abroad...", "Focus on green trade policies aligned with SDGs...", "Promotes inclusive supply chains...", "Invests in data/monitoring infrastructure..."],
    icon: "https://flagcdn.com/us.svg"
  },
  "China": {
    insights: ["China is a leading exporter of biodiversity-based products ($318.4B)...", "Major player in global sustainable trade markets...", "Implements VSS for compliance...", "Developing digital traceability and monitoring...", "Encourages diversification into green sectors...", "Focus on meeting international importers' requirements...", "Works with multilateral institutions...", "Supports social inclusion and benefit-sharing...", "Monitors environmental risks...", "Promotes sustainable practices..."],
    icon: "https://flagcdn.com/cn.svg"
  },
  "India": {
    insights: ["India engages in trade agreements with sustainable development commitments...", "Some exporters rely on VSS for market access...", "Among top global exporters (~3.2% share in 2022)...", "Policies integrate sustainability in trade...", "Promotes green economy exports...", "Digital traceability initiatives emerging...", "Supports small producers to comply...", "Strengthens inclusive trade practices...", "Works with UNCTAD/UNIDO programs...", "Focuses on biodiversity-based trade..."],
    icon: "https://flagcdn.com/in.svg"
  },
  "Netherlands": {
    insights: ["Uses VSS certifications and integrates sustainability in trade policies...", "Top exporters of biodiversity-based products (~5.3%)...", "Promotes traceability in supply chains...", "Encourages renewable and green exports...", "Focuses on EU-aligned sustainability laws...", "Supports SMEs for compliance...", "Emphasizes fair labor practices...", "Integrates environmental policies in agreements...", "Capacity-building programs active...", "Monitors sustainable trade metrics..."],
    icon: "https://flagcdn.com/nl.svg"
  },
  "France": {
    insights: ["Corporate Duty of Vigilance Law requires due diligence...", "Significant contributor to EU biodiversity exports...", "Focus on human rights and environment in supply chains...", "Supports VSS and certifications...", "Green export policies implemented...", "Promotes renewable and sustainable sectors...", "Works with EU and UN programs...", "Encourages fair labor practices...", "Capacity-building initiatives ongoing...", "Monitors sustainable trade outcomes..."],
    icon: "https://flagcdn.com/fr.svg"
  },
  "Norway": {
    insights: ["Transparency Act requires supply-chain due diligence...", "Contributes to EU biodiversity exports...", "Supports VSS certifications...", "Promotes green energy and renewable exports...", "Integrates sustainability in trade policies...", "Capacity-building for SMEs...", "Fair labor practices emphasized...", "Works with UN programs...", "Monitors environmental compliance...", "Digital traceability in supply chains..."],
    icon: "https://flagcdn.com/no.svg"
  },
  "Switzerland": {
    insights: ["Swiss Code amendments require non-financial reporting...", "Part of European biodiversity exports...", "Supports VSS and traceability...", "Encourages green and sustainable exports...", "Focus on fair labor practices...", "Integrates sustainability in national policies...", "Capacity-building initiatives for exporters...", "Promotes renewable energy exports...", "Monitors compliance in supply chains...", "Collaborates with EU and UN programs..."],
    icon: "https://flagcdn.com/ch.svg"
  },
  "UK": {
    insights: ["Modern Slavery Act requires supply-chain reporting...", "EU biodiversity exports contributor...", "Supports VSS certifications...", "Promotes fair labor practices...", "Green trade policies integrated...", "Capacity-building for SMEs...", "Monitors sustainable trade metrics...", "Encourages renewable exports...", "Implements traceability tools...", "Works with UN/EU programs..."],
    icon: "https://flagcdn.com/gb.svg"
  },
  "Brazil": {
    insights: ["Improves supply-chain sustainability for agriculture and timber...", "Among top 7 global biodiversity exporters in 2022...", "Supports VSS certifications...", "Promotes renewable agriculture exports...", "Capacity-building and technical support...", "Digital traceability initiatives emerging...", "Integrates sustainability in trade policies...", "Monitors environmental impact...", "Fair labor practices emphasized...", "Collaborates with multilateral organizations..."],
    icon: "https://flagcdn.com/br.svg"
  }
};

// Biodiversity-based export values in USD Billion
const tradeValues = {
  "Germany": 300, "USA": 332.9, "China": 318.4, "India": 110,
  "Netherlands": 180, "France": 150, "Norway": 90, "Switzerland": 85,
  "UK": 140, "Brazil": 75
};

// Populate country dropdown
const countrySelect = document.getElementById("country-select");
Object.keys(countryData).forEach(c => {
  const option = document.createElement("option");
  option.value = c;
  option.textContent = c;
  countrySelect.appendChild(option);
});

// Generate global insights
document.getElementById("generate-global").addEventListener("click", () => {
  const ul = document.getElementById("global-list");
  ul.innerHTML = "";
  globalInsights.forEach(ins => {
    const li = document.createElement("li");
    li.textContent = ins;
    ul.appendChild(li);
  });
});

// Display country insights and flag on selection
countrySelect.addEventListener("change", () => {
  const country = countrySelect.value;
  const container = document.getElementById("country-container");
  container.innerHTML = "";
  if (!country) return;

  const card = document.createElement("div");
  card.className = "country-card";

  const title = document.createElement("h3");
  title.textContent = country + " Insights";

  const img = document.createElement("img");
  img.src = countryData[country].icon;
  img.alt = country + " flag";
  img.className = "country-flag";

  const ul = document.createElement("ul");
  countryData[country].insights.forEach(ins => {
    const li = document.createElement("li");
    li.textContent = ins;
    ul.appendChild(li);
  });

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(ul);
  container.appendChild(card);
});

// Chart
const ctx = document.getElementById('tradeChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: Object.keys(tradeValues),
    datasets: [{
      label: 'Biodiversity-Based Exports 2022 (USD Billion)',
      data: Object.values(tradeValues),
      backgroundColor: ['#4CAF50','#FF9800','#2196F3','#9C27B0','#FFC107','#8BC34A','#FF5722','#607D8B','#9C27B0','#03A9F4']
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
