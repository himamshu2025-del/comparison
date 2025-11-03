document.getElementById('generate').addEventListener('click', () => {
  const messages = [
    "India increased its renewable exports by 12% this year 🌞",
    "Germany leads in low-carbon manufacturing exports 🏭",
    "Brazil’s sustainable agriculture exports rose by 9% 🌾",
    "China is expanding its solar panel trade network ☀️",
    "Canada’s clean energy trade balance improved in 2025 ⚡"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('output').innerHTML = `<strong>${randomMessage}</strong>`;
});
