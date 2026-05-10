import { loadFromStorage } from "./storage.js";
import { renderDashboard } from "./views/dashboard.js";
import { renderCharts } from "./charts.js";
import { renderExpenses, renderIncomes } from "./views/cashflow.js";
import { renderMonthlySummary } from "./views/monthly.js";
import { handleSimulator } from "./views/simulator.js";
import { setAuthView } from "./auth.js";
import { bindEvents } from "./events.js";

function init() {
  loadFromStorage();
  bindEvents();
  setAuthView(false);
  renderDashboard();
  renderExpenses();
  renderIncomes();
  renderMonthlySummary();
  renderCharts();
  handleSimulator(new Event("submit"));
}

init();
