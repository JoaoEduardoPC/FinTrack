import { state } from "./state.js";
import { formatMoney } from "./utils.js";

export const _charts = {};

export function destroyChart(key) {
  if (_charts[key]) {
    _charts[key].destroy();
    _charts[key] = null;
  }
}

export function groupBy(list, key) {
  return list.reduce((acc, item) => {
    acc[item[key]] = (acc[item[key]] || 0) + item.value;
    return acc;
  }, {});
}

export const DONUT_COLORS = [
  "#0f7b6c",
  "#105e8a",
  "#8a5f10",
  "#a12424",
  "#5a348a",
  "#1a9e5a",
  "#c47c0a",
];

export function renderCharts() {
  if (typeof Chart === "undefined") return;
  const expByCategory = groupBy(state.expenses, "category");
  const incByCategory = groupBy(state.incomes, "category");

  destroyChart("expenses");
  destroyChart("incomes");
  destroyChart("balance");

  const donutDefaults = {
    type: "doughnut",
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutout: "62%",
      plugins: {
        legend: {
          position: "right",
          labels: { boxWidth: 14, font: { size: 12 } },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.label}: ${formatMoney(ctx.raw)}`,
          },
        },
      },
    },
  };

  _charts.expenses = new Chart(document.getElementById("chart-expenses"), {
    ...donutDefaults,
    data: {
      labels: Object.keys(expByCategory),
      datasets: [
        {
          data: Object.values(expByCategory),
          backgroundColor: DONUT_COLORS,
          borderWidth: 2,
          borderColor: "#fff",
        },
      ],
    },
  });

  _charts.incomes = new Chart(document.getElementById("chart-incomes"), {
    ...donutDefaults,
    data: {
      labels: Object.keys(incByCategory),
      datasets: [
        {
          data: Object.values(incByCategory),
          backgroundColor: [
            "#1a9e5a",
            "#0f7b6c",
            "#105e8a",
            "#5a8a10",
            "#8a5f10",
          ],
          borderWidth: 2,
          borderColor: "#fff",
        },
      ],
    },
  });

  const totalIncome = state.incomes.reduce((s, i) => s + i.value, 0);
  const totalExpense = state.expenses.reduce((s, i) => s + i.value, 0);

  _charts.balance = new Chart(document.getElementById("chart-balance"), {
    type: "bar",
    data: {
      labels: ["Rendas", "Gastos", "Saldo"],
      datasets: [
        {
          label: "Valor (R$)",
          data: [totalIncome, totalExpense, totalIncome - totalExpense],
          backgroundColor: [
            "rgba(26, 158, 90, 0.82)",
            "rgba(161, 36, 36, 0.78)",
            totalIncome - totalExpense >= 0
              ? "rgba(15, 123, 108, 0.82)"
              : "rgba(161, 36, 36, 0.78)",
          ],
          borderRadius: 10,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (ctx) => ` ${formatMoney(ctx.raw)}` } },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: "rgba(30,42,47,0.08)" },
          ticks: {
            callback: (v) =>
              v.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
              }),
          },
        },
        x: { grid: { display: false } },
      },
    },
  });
}
