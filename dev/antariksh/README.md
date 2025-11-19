# Antariksh – International Comparison Prompt Experiments

This folder contains my experiments for generating comparison pages
from EXIOBASE tradeflow data using the Model Earth **comparison** project.

I will log my successful prompts here and refine them over time.

## Prompt Experiment 1 — GitHub RAW CSV Trade Dashboard (US / IN / RU)

### Goal
Create a dashboard that pulls **real EXIOBASE tradeflow CSV data** from GitHub for 3 countries (US, IN, RU) and visualizes international trade and environmental impacts using Leaflet + ECharts.

### Prompt Used


I need you to create a data visualization dashboard with 3 files (index.html, script.js, styles.css) that displays international trade and environmental impact data.
1.Requirements:

Data Source: Load CSV files from this GitHub repository: https://raw.githubusercontent.com/ModelEarth/trade-data/main/year/2019/

The data structure is documented here: https://github.com/ModelEarth/exiobase/blob/main/tradeflow/CLAUDE.md
Key files: industry.csv, factor.csv, and for each country (US, IN, RU) there are trade.csv and trade_factor.csv files in domestic/, exports/, and imports/ folders


2.Dashboard Features:

Interactive Leaflet map to select countries (US, India, Russia)
Summary cards showing environmental impact totals for each selected country
Dropdown to switch between environmental factor groups (air, water, energy, land, materials, employment)
Three ECharts visualizations:

Country comparison bar chart
Trade flow breakdown (domestic vs exports vs imports) stacked bar chart
Industry breakdown bar chart


Dynamic insights section with bullet points


3.Data Processing:

Load industry.csv and factor.csv first for reference lookups
Map factor.csv's "extension" column to environmental groups (air, water, energy, etc.)
Load trade_factor.csv for each country/flow combination
Use trade.csv to map trade_id to industry information
Aggregate impact_value from trade_factor.csv by factor group


4.Design:

Modern, clean design with gradient hero header
Card-based layout for countries
Responsive charts that update when countries or factor groups change
Include a debug panel showing data loading progress


5.Technical:

Use PapaParse to load CSV files
Use ECharts for visualizations
Use Leaflet for the map
All libraries loaded from CDN
No fake data - handle missing files gracefully with console warnings



Output the complete code for all 3 files in one response.


## What this experiment achieved
- Claude generated `index.html`, `script.js`, and `styles.css` in one response as requested.
- Dashboard UI renders with map, cards, dropdown, charts, and insights panel.
- Real CSV loading logic was implemented (no static placeholder arrays).
- Debug console panel currently prints which CSVs load successfully vs missing.

## Notes for collaborators
- GitHub RAW CSV links were used intentionally so the app can run directly from the browser without needing local dataset folders.
- Only **3 countries** (US, IN, RU) were used in this prototype to keep testing fast and visual. Full expansion to all countries will happen once dataset structure is confirmed.
- Debug logging is currently visible on purpose — it will be hidden later once data reliability is stable.
