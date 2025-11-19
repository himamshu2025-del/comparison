# Antariksh – International Comparison Prompt Experiments

This folder contains my experiments for generating comparison pages
from EXIOBASE tradeflow data using the Model Earth **comparison** project.

I will log my successful prompts here and refine them over time.

# Prompt Experiment 1— CSV Dashboard Prototype 

This folder contains my first prompt-driven attempt to generate a comparison dashboard using real EXIOBASE tradeflow data.

## Prompt Used
I need you to create a data visualization dashboard with 3 files (index.html, script.js, styles.css) that displays international trade and environmental impact data.
Data Source: Load CSV files from:
https://raw.githubusercontent.com/ModelEarth/trade-data/main/year/2019/

Reference documentation:
https://github.com/ModelEarth/exiobase/blob/main/tradeflow/CLAUDE.md

Countries (hardcoded for this experiment):
US, IN, RU

Requirements:
• Leaflet world map to select countries
• Summary cards
• Factor grouping dropdown (air / water / energy / land / materials / employment)
• 3 ECharts charts: country comparison, tradeflow breakdown, industry breakdown
• Key Insights section powered by script.js
• Load CSVs with Papa.parse (no fake placeholder data)
• Handle missing CSV files gracefully (console.warn)
• Output must include index.html, script.js, and styles.css in a single response only

## What this experiment achieved
- Claude generated `index.html`, `script.js`, and `styles.css` in one response as requested.
- Dashboard UI renders with map, cards, dropdown, charts, and insights panel.
- Real CSV loading logic was implemented (no static placeholder arrays).
- Debug console panel currently prints which CSVs load successfully vs missing.

## Notes for collaborators
- GitHub RAW CSV links were used intentionally so the app can run directly from the browser without needing local dataset folders.
- Only **3 countries** (US, IN, RU) were used in this prototype to keep testing fast and visual. Full expansion to all countries will happen once dataset structure is confirmed.
- Debug logging is currently visible on purpose — it will be hidden later once data reliability is stable.
