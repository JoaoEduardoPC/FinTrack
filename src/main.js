import { renderDashboard } from "./views/dashboard.js";
import { renderCharts } from "./charts.js";
import { renderExpenses, renderIncomes } from "./views/cashflow.js";
import { renderMonthlySummary } from "./views/monthly.js";
import { handleSimulator } from "./views/simulator.js";
import { setAuthView, restoreSession } from "./auth.js";
import { bindEvents } from "./events.js";

function init() {
  bindEvents();

  const savedSession = sessionStorage.getItem("fintrack_session");
  if (savedSession) {
    restoreSession(savedSession);
  } else {
    setAuthView(false);
  }

  renderDashboard();
  renderExpenses();
  renderIncomes();
  renderMonthlySummary();
  renderCharts();
  handleSimulator(new Event("submit"));
}

init();
