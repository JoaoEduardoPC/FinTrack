export const AUTH_USER = "Claudio";
export const AUTH_PASSWORD = "12345678";
export const STORAGE_KEY = "fintrack_data";

export const DEFAULT_EXPENSES = [
  {
    id: 1,
    date: "02/05/2026",
    category: "Moradia",
    description: "Aluguel",
    value: 2500,
  },
  {
    id: 2,
    date: "04/05/2026",
    category: "Transporte",
    description: "Combustivel",
    value: 420,
  },
  {
    id: 3,
    date: "05/05/2026",
    category: "Lazer",
    description: "Cinema",
    value: 85,
  },
  {
    id: 4,
    date: "06/05/2026",
    category: "Alimentacao",
    description: "Supermercado",
    value: 690.3,
  },
  {
    id: 5,
    date: "07/05/2026",
    category: "Saude",
    description: "Farmacia",
    value: 120.2,
  },
];

export const DEFAULT_INCOMES = [
  {
    id: 1,
    date: "01/05/2026",
    category: "Salário",
    description: "Salário mensal",
    value: 8000,
  },
  {
    id: 2,
    date: "05/05/2026",
    category: "Freelance",
    description: "Projeto web",
    value: 2500,
  },
];

export const state = {
  user: null,
  _nextId: 6,
  _nextIncomeId: 3,
  financial: {
    availableMoney: 12450.75,
    investedAmount: 36780.4,
  },
  expenses: DEFAULT_EXPENSES.map((e) => ({ ...e })),
  incomes: DEFAULT_INCOMES.map((e) => ({ ...e })),
};

export function resetStateData(userId) {
  const isDemo = userId === AUTH_USER;
  state.expenses = isDemo ? DEFAULT_EXPENSES.map((e) => ({ ...e })) : [];
  state.incomes = isDemo ? DEFAULT_INCOMES.map((e) => ({ ...e })) : [];
  state._nextId = isDemo ? 6 : 1;
  state._nextIncomeId = isDemo ? 3 : 1;
  state.financial = {
    availableMoney: isDemo ? 12450.75 : 0,
    investedAmount: isDemo ? 36780.4 : 0,
  };
}
