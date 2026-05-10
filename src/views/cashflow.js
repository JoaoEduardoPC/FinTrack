import { state } from "../state.js";
import { saveToStorage } from "../storage.js";
import {
  formatMoney,
  escapeHtml,
  toInputDate,
  fromInputDate,
} from "../utils.js";
import { el } from "../elements.js";
import { renderDashboard } from "./dashboard.js";
import { renderCharts } from "../charts.js";
import { renderMonthlySummary } from "./monthly.js";

export const EXPENSE_CATEGORIES = [
  "Moradia",
  "Alimentacao",
  "Transporte",
  "Saude",
  "Lazer",
  "Educacao",
  "Outros",
];
export const INCOME_CATEGORIES = [
  "Salário",
  "Freelance",
  "Rendimentos",
  "Bônus",
  "Outros",
];

function refreshAll() {
  renderDashboard();
  renderCharts();
  renderMonthlySummary();
}

export function renderExpenses() {
  if (state.expenses.length === 0) {
    el.expensesBody.innerHTML =
      '<tr><td colspan="5" class="empty-row">Nenhum gasto registrado.</td></tr>';
    return;
  }
  el.expensesBody.innerHTML = state.expenses
    .map(
      (item) => `<tr>
      <td>${escapeHtml(item.date)}</td>
      <td>${escapeHtml(item.category)}</td>
      <td>${escapeHtml(item.description)}</td>
      <td>${formatMoney(item.value)}</td>
      <td class="actions">
        <button class="action-btn edit-btn"   data-id="${item.id}">Editar</button>
        <button class="action-btn delete-btn" data-id="${item.id}">Excluir</button>
      </td>
    </tr>`,
    )
    .join("");
}

export function renderIncomes() {
  if (state.incomes.length === 0) {
    el.incomeBody.innerHTML =
      '<tr><td colspan="5" class="empty-row">Nenhuma renda registrada.</td></tr>';
    return;
  }
  el.incomeBody.innerHTML = state.incomes
    .map(
      (item) => `<tr class="income-row">
      <td>${escapeHtml(item.date)}</td>
      <td>${escapeHtml(item.category)}</td>
      <td>${escapeHtml(item.description)}</td>
      <td>${formatMoney(item.value)}</td>
      <td class="actions">
        <button class="action-btn edit-btn"   data-id="${item.id}" data-type="income">Editar</button>
        <button class="action-btn delete-btn" data-id="${item.id}" data-type="income">Excluir</button>
      </td>
    </tr>`,
    )
    .join("");
}

export function handleAddExpense(event) {
  event.preventDefault();
  const f = el.expenseForm;
  state.expenses.push({
    id: state._nextId++,
    date: fromInputDate(f.querySelector("#exp-date").value),
    category: f.querySelector("#exp-category").value,
    description: f.querySelector("#exp-description").value.trim(),
    value: Number(f.querySelector("#exp-value").value),
  });
  saveToStorage();
  renderExpenses();
  refreshAll();
  f.reset();
}

export function handleDeleteExpense(id) {
  if (!confirm("Confirma exclusão deste gasto?")) return;
  state.expenses = state.expenses.filter((e) => e.id !== id);
  saveToStorage();
  renderExpenses();
  refreshAll();
}

export function handleAddIncome(event) {
  event.preventDefault();
  const f = el.incomeForm;
  state.incomes.push({
    id: state._nextIncomeId++,
    date: fromInputDate(f.querySelector("#inc-date").value),
    category: f.querySelector("#inc-category").value,
    description: f.querySelector("#inc-description").value.trim(),
    value: Number(f.querySelector("#inc-value").value),
  });
  saveToStorage();
  renderIncomes();
  refreshAll();
  f.reset();
}

export function handleDeleteIncome(id) {
  if (!confirm("Confirma exclusão desta renda?")) return;
  state.incomes = state.incomes.filter((e) => e.id !== id);
  saveToStorage();
  renderIncomes();
  refreshAll();
}

export function populateCategorySelect(selectEl, categories, selected) {
  selectEl.innerHTML = categories
    .map(
      (c) =>
        `<option${c === selected ? " selected" : ""}>${escapeHtml(c)}</option>`,
    )
    .join("");
}

export function openEditDialog(id, type) {
  const list = type === "income" ? state.incomes : state.expenses;
  const item = list.find((e) => e.id === id);
  if (!item) return;
  const d = el.editDialog;
  const categories = type === "income" ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;
  populateCategorySelect(
    d.querySelector("#edit-category"),
    categories,
    item.category,
  );
  d.querySelector("#edit-date").value = toInputDate(item.date);
  d.querySelector("#edit-description").value = item.description;
  d.querySelector("#edit-value").value = item.value;
  d.dataset.editId = String(id);
  d.dataset.editType = type;
  d.showModal();
}

export function handleSaveEdit(event) {
  event.preventDefault();
  const d = el.editDialog;
  const id = Number(d.dataset.editId);
  const type = d.dataset.editType;
  const list = type === "income" ? state.incomes : state.expenses;
  const idx = list.findIndex((e) => e.id === id);
  if (idx === -1) {
    d.close();
    return;
  }

  list[idx] = {
    id,
    date: fromInputDate(d.querySelector("#edit-date").value),
    category: d.querySelector("#edit-category").value,
    description: d.querySelector("#edit-description").value.trim(),
    value: Number(d.querySelector("#edit-value").value),
  };
  saveToStorage();
  if (type === "income") renderIncomes();
  else renderExpenses();
  refreshAll();
  d.close();
}
