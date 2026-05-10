import { state } from "../state.js";
import { formatMoney, escapeHtml } from "../utils.js";
import { el } from "../elements.js";
import { _charts, destroyChart, groupBy, DONUT_COLORS } from "../charts.js";

export function renderMonthlySummary() {
  const totalExpenses = state.expenses.reduce(
    (sum, item) => sum + item.value,
    0,
  );
  const totalIncomes = state.incomes.reduce((sum, item) => sum + item.value, 0);
  const netBalance = totalIncomes - totalExpenses;
  const savingsRate = totalIncomes > 0 ? (netBalance / totalIncomes) * 100 : 0;
  const investRatio =
    (state.financial.investedAmount /
      (state.financial.investedAmount + state.financial.availableMoney)) *
    100;
  const pctCommitted =
    totalIncomes > 0 ? Math.min((totalExpenses / totalIncomes) * 100, 100) : 0;
  const totalEntries = state.expenses.length + state.incomes.length;

  if (el.monthlyBadge) {
    el.monthlyBadge.textContent = new Date().toLocaleDateString("pt-BR", {
      month: "short",
      year: "numeric",
    });
  }

  const cards = [
    {
      label: "Total de Rendas",
      value: formatMoney(totalIncomes),
      cls: "positive",
    },
    {
      label: "Total de Gastos",
      value: formatMoney(totalExpenses),
      cls: "negative",
    },
    {
      label: "Saldo do Mês",
      value: formatMoney(netBalance),
      cls: netBalance >= 0 ? "positive" : "negative",
    },
    {
      label: "Taxa de Poupança",
      value: `${savingsRate.toFixed(1)}%`,
      cls: savingsRate >= 0 ? "positive" : "negative",
    },
    {
      label: "Patrimônio em Invest.",
      value: `${investRatio.toFixed(1)}%`,
      cls: "",
    },
    { label: "Nº de Lançamentos", value: String(totalEntries), cls: "" },
  ];

  el.monthlySummary.innerHTML = cards
    .map(
      (c) =>
        `<article class="summary-card ${c.cls}"><p>${c.label}</p><strong>${c.value}</strong></article>`,
    )
    .join("");

  // Progress bar
  if (el.monthlyBar) {
    el.monthlyBar.style.width = `${pctCommitted}%`;
    el.monthlyBar.className =
      "monthly-progress-bar" +
      (pctCommitted >= 100
        ? " bar-danger"
        : pctCommitted >= 75
          ? " bar-warn"
          : " bar-ok");
    el.monthlyPct.textContent = `${pctCommitted.toFixed(1)}%`;
    el.monthlyHint.textContent =
      pctCommitted >= 100
        ? "⚠️ Gastos ultrapassaram a renda do mês."
        : pctCommitted >= 75
          ? "Atenção: mais de 75% da renda comprometida."
          : "Bom controle financeiro ✔️";
  }

  // Category doughnut
  destroyChart("monthlycat");
  const catCanvas = document.getElementById("chart-monthly-cat");
  if (catCanvas && state.expenses.length > 0 && typeof Chart !== "undefined") {
    const byCat = groupBy(state.expenses, "category");
    _charts.monthlycat = new Chart(catCanvas, {
      type: "doughnut",
      data: {
        labels: Object.keys(byCat),
        datasets: [
          {
            data: Object.values(byCat),
            backgroundColor: DONUT_COLORS,
            borderWidth: 2,
            borderColor: "#fff",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        cutout: "60%",
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
    });
  }

  // Top-5 gastos
  if (el.monthlyTopList) {
    const sorted = [...state.expenses]
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
    el.monthlyTopList.innerHTML =
      sorted.length === 0
        ? '<li class="empty-row">Nenhum gasto registrado.</li>'
        : sorted
            .map(
              (e) => `<li class="top-item">
            <span class="top-desc">${escapeHtml(e.description)}<small>${escapeHtml(e.category)}</small></span>
            <strong>${formatMoney(e.value)}</strong>
          </li>`,
            )
            .join("");
  }
}
