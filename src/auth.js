import { state, AUTH_USER, AUTH_PASSWORD } from "./state.js";
import { el } from "./elements.js";
import { renderDashboard } from "./views/dashboard.js";
import { renderCharts } from "./charts.js";
import { renderMonthlySummary } from "./views/monthly.js";
import { handleSimulator } from "./views/simulator.js";

export function setAuthView(isLogged) {
  el.loginView.classList.toggle("active", !isLogged);
  el.appView.classList.toggle("active", isLogged);
}

export function activateTab(viewId) {
  el.tabs.forEach((tab) =>
    tab.classList.toggle("active", tab.dataset.view === viewId),
  );
  el.views.forEach((view) =>
    view.classList.toggle("active", view.id === viewId),
  );

  if (viewId === "dashboard") {
    renderDashboard();
    renderCharts();
  }
  if (viewId === "monthly") {
    renderMonthlySummary();
  }
  if (viewId === "simulator") {
    handleSimulator(new Event("submit"));
  }
}

export function handleLogin(event) {
  event.preventDefault();
  const formData = new FormData(el.loginForm);
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "").trim();

  if (username === AUTH_USER && password === AUTH_PASSWORD) {
    state.user = username;
    el.loginError.textContent = "";
    el.welcomeText.textContent = `Bem-vindo, ${state.user}. Veja seus indicadores de hoje.`;
    setAuthView(true);
    activateTab("dashboard");
    return;
  }

  el.loginError.textContent = "Usuário ou senha inválidos.";
}
