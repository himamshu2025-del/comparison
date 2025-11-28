const globalInsights = [
  "Mandatory due diligence laws are increasingly adopted worldwide.",
  "VSS certifications are unlocking green market access for producers.",
  "Supply-chain resilience is a top priority due to climate and geopolitical risks.",
  "Sustainable trade is expanding beyond ecological protection to include social justice.",
  "Digital traceability increases transparency in textiles, leather, and agriculture.",
  "Green trade policies are now embedded in cross-regional trade agreements.",
  "Diversification into green sectors continues to accelerate across global south economies.",
  "Biodiversity-based trade reached ~$3.4 trillion globally in 2022.",
  "Capacity-building is essential for developing countries to meet sustainability standards.",
  "Global cooperation is necessary to harmonize sustainability certification frameworks."
];

const countryData = {
  Germany: { icon: "https://flagcdn.com/de.svg", insights: Array(10).fill("Germany promotes responsible supply-chain due diligence...") },
  USA: { icon: "https://flagcdn.com/us.svg", insights: Array(10).fill("The US leads biodiversity-trade revenues with strict compliance laws...") },
  China: { icon: "https://flagcdn.com/cn.svg", insights: Array(10).fill("China drives global biodiversity-product exports with VSS integration...") },
  India: { icon: "https://flagcdn.com/in.svg", insights: Array(10).fill("India strengthens sustainability commitments in its export agreements...") },
  Netherlands: { icon: "https://flagcdn.com/nl.svg", insights: Array(10).fill("Netherlands integrates sustainability across EU trade regulations...") },
  France: { icon: "https://flagcdn.com/fr.svg", insights: Array(10).fill("France promotes supply-chain transparency and fair labor conditions...") },
  Norway: { icon: "https://flagcdn.com/no.svg", insights: Array(10).fill("Norway enforces sustainability reporting through transparency laws...") },
  Switzerland: { icon: "https://flagcdn.com/ch.svg", insights: Array(10).fill("Switzerland prioritizes green economic growth and VSS compliance...") },
  UK: { icon: "https://flagcdn.com/gb.svg", insights: Array(10).fill("The UK enforces strict supply-chain audits for sustainability risks...") },
  Brazil: { icon: "https://flagcdn.com/br.svg", insights: Array(10).fill("Brazil works to ensure sustainable agricultural production and exports...") }
};

const tradeValues = {
  Germany: 300,
  USA: 332.9,
  China: 318.4,
  India: 110,
  Netherlands: 180,
  France: 150,
  Norway: 90,
  Switzerland: 85,
  UK: 140,
  Brazil: 75
};

const countrySelect = document.getElementById("country-select");
Object.keys(countryData).forEach(c => {
  const opt = document.createElement("option");
  opt.value = c;
  opt.textContent = c;
  countrySelect.appendChild(opt);
});

document.getElementById("generate-global").addEventListener("click", () => {
  const ul = document.getElementById("global-list");
  ul.innerHTML = "";
  globalInsights.forEach(i => ul.insertAdjacentHTML("beforeend", `<li>${i}</li>`));
});

countrySelect.addEventListener("change", () => {
  const container = document.getElementById("country-container");
  const c = countrySelect.value;
  container.innerHTML = "";
  if (!c) return;
  container.innerHTML = `
    <div class="country-card">
      <img src="${countryData[c].icon}" class="country-flag">
      <h3>${c} Insights</h3>
      <ul>${countryData[c].insights.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>`;
});

const ctx = document.getElementById("tradeChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: Object.keys(tradeValues),
    datasets: [{
      label: "2022 Biodiversity-Trade Revenue",
      data: Object.values(tradeValues),
      backgroundColor: "#2c7a7b"
    }]
  },
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: ctx => `$${ctx.raw}B Trade Revenue`
        }
      }
    },
    scales: {
      y: {
        ticks: {
          callback: v => `$${v}B`
        }
      }
    }
  }
});
