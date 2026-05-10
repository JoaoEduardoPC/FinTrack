import { state } from "../state.js";
import { formatMoney } from "../utils.js";
import { el } from "../elements.js";
import { renderCharts } from "../charts.js";

export function renderDashboard() {
  const totalIncome = state.incomes.reduce((s, i) => s + i.value, 0);
  const totalExpense = state.expenses.reduce((s, i) => s + i.value, 0);
  const netBalance = totalIncome - totalExpense;
  const wealth =
    state.financial.availableMoney + state.financial.investedAmount;

  el.balanceValue.textContent = formatMoney(state.financial.availableMoney);
  el.investedValue.textContent = formatMoney(state.financial.investedAmount);
  el.kpiIncome.textContent = formatMoney(totalIncome);
  el.kpiExpense.textContent = formatMoney(totalExpense);
  el.kpiWealth.textContent = formatMoney(wealth);
  el.kpiBalance.textContent = formatMoney(netBalance);
  el.kpiBalance
    .closest(".kpi")
    .classList.toggle("kpi-balance--negative", netBalance < 0);

  el.dashDate.textContent = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
