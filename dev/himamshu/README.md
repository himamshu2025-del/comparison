# TradeFlow Data Frontend - UN Goal Focus

Welcome to the **TradeFlow Data Frontend** developed by Himamshu for ModelEarth. This project visualizes trade data with a focus on **United Nations Sustainable Development Goals (SDGs)**. The goal is to provide clear, interactive, and insightful views of trade flows across countries and years.

## Vibe Prompt
This project is designed to:
- Visualize trade patterns and flows per country and year.
- Highlight connections to UN SDGs, particularly those related to sustainable production, responsible consumption, and global trade fairness.
- Generate actionable insights for each country and globally, including at least 10 general insights and 10 per country.
- Provide intuitive charts and graphs to compare trade flows.
- Serve as a frontend interface for the `comparison` repo, connecting to `tradeflow/[year]/[country]` data.

## Folder Structure

## How It Works
1. Data for each year and country is stored in `tradeflow/[year]/[country]`.
2. The frontend fetches the CSV/JSON files automatically.
3. Scripts process the data to generate:
   - Interactive charts
   - Top 10 insights globally
   - Top 10 insights per country
4. Styles make the page visually appealing, with cards, tables, and charts.

## How to Contribute
- Place new data in `tradeflow/[year]/[country]`.
- Add charts or insights in `script.js`.
- Customize appearance in `styles.css`.
- Push changes to your forked repository and create a PR to ModelEarth.

