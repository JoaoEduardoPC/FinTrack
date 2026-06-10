import { state } from "./state.js";

function storageKey(userId) {
  return `fintrack_data_${userId.toLowerCase()}`;
}

export function saveToStorage() {
  if (!state.user) return;
  localStorage.setItem(
    storageKey(state.user),
    JSON.stringify({
      expenses: state.expenses,
      incomes: state.incomes,
      financial: state.financial,
      nextId: state._nextId,
      nextIncomeId: state._nextIncomeId,
    }),
  );
}

export function loadFromStorage(userId) {
  try {
    const raw = localStorage.getItem(storageKey(userId));
    if (!raw) return;
    const saved = JSON.parse(raw);

    if (Array.isArray(saved.expenses)) {
      state.expenses = saved.expenses;
      state._nextId =
        saved.nextId ??
        Math.max(...saved.expenses.map((e) => e.id ?? 0), 0) + 1;
    }
    if (Array.isArray(saved.incomes)) {
      state.incomes = saved.incomes;
      state._nextIncomeId =
        saved.nextIncomeId ??
        Math.max(...saved.incomes.map((e) => e.id ?? 0), 0) + 1;
    }
    if (saved.financial) {
      state.financial.availableMoney =
        saved.financial.availableMoney ?? state.financial.availableMoney;
      state.financial.investedAmount =
        saved.financial.investedAmount ?? state.financial.investedAmount;
    }
  } catch (_) {
    /* ignore corrupt storage */
  }
}
