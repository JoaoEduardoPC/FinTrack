import { state } from "./state.js";
import { el } from "./elements.js";
import {
  handleLogin,
  handleRegister,
  toggleAuthMode,
  setAuthView,
  activateTab,
} from "./auth.js";
import { handleSimulator } from "./views/simulator.js";
import {
  handleAddExpense,
  handleDeleteExpense,
  handleAddIncome,
  handleDeleteIncome,
  openEditDialog,
  handleSaveEdit,
} from "./views/cashflow.js";

export function bindEvents() {
  el.loginForm.addEventListener("submit", handleLogin);
  el.registerForm.addEventListener("submit", handleRegister);

  el.showRegisterLink.addEventListener("click", (e) => {
    e.preventDefault();
    toggleAuthMode("register");
  });
  el.showLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    toggleAuthMode("login");
  });

  el.tabs.forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab.dataset.view));
  });

  el.logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("fintrack_session");
    state.user = null;
    el.loginForm.reset();
    setAuthView(false);
    el.welcomeText.textContent = "Bem-vindo";
  });

  // Simulator
  el.simulatorForm.addEventListener("submit", handleSimulator);

  document.querySelectorAll(".preset-btn[data-rate]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("rate").value = btn.dataset.rate;
      handleSimulator(new Event("submit"));
    });
  });

  document.querySelectorAll(".preset-btn[data-months]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("months").value = btn.dataset.months;
      handleSimulator(new Event("submit"));
    });
  });

  // Cash flow – expenses
  el.expenseForm.addEventListener("submit", handleAddExpense);

  el.expensesBody.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-id]");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (btn.classList.contains("delete-btn")) handleDeleteExpense(id);
    if (btn.classList.contains("edit-btn")) openEditDialog(id, "expense");
  });

  // Cash flow – incomes
  el.incomeForm.addEventListener("submit", handleAddIncome);

  el.incomeBody.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-id]");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (btn.classList.contains("delete-btn")) handleDeleteIncome(id);
    if (btn.classList.contains("edit-btn")) openEditDialog(id, "income");
  });

  // Flow sub-tabs (Gastos / Rendas)
  document.querySelectorAll(".flow-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".flow-tab")
        .forEach((t) => t.classList.remove("active"));
      document
        .querySelectorAll(".flow-panel")
        .forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.flow).classList.add("active");
    });
  });

  // Edit dialog
  el.editForm.addEventListener("submit", handleSaveEdit);

  document.getElementById("edit-cancel-btn").addEventListener("click", () => {
    el.editDialog.close();
  });

  el.editDialog.addEventListener("click", (e) => {
    if (e.target === el.editDialog) el.editDialog.close();
  });
}
