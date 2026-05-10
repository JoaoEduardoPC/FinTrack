import { formatMoney } from "../utils.js";
import { el } from "../elements.js";
import { _charts, destroyChart } from "../charts.js";

export function handleSimulator(event) {
  event.preventDefault();

  const initialAmount = Number(
    document.getElementById("initial-amount").value || 0,
  );
  const monthlyAmount = Number(
    document.getElementById("monthly-amount").value || 0,
  );
  const monthlyRate = Number(document.getElementById("rate").value || 0) / 100;
  const months = Number(document.getElementById("months").value || 0);

  const labels = [];
  const totals = [];
  const contributed = [];

  let running = initialAmount;
  let totalContributed = initialAmount;

  for (let i = 1; i <= months; i++) {
    running = (running + monthlyAmount) * (1 + monthlyRate);
    totalContributed += monthlyAmount;
    if (i % Math.max(1, Math.floor(months / 24)) === 0 || i === months) {
      labels.push(`M${i}`);
      totals.push(parseFloat(running.toFixed(2)));
      contributed.push(parseFloat(totalContributed.toFixed(2)));
    }
  }

  const finalValue = totals[totals.length - 1] ?? initialAmount;
  const gain = finalValue - totalContributed;

  el.simResultValue.textContent = formatMoney(finalValue);
  if (el.simContributed)
    el.simContributed.textContent = formatMoney(totalContributed);
  if (el.simGain) el.simGain.textContent = formatMoney(gain);

  destroyChart("simulator");
  const canvas = document.getElementById("chart-simulator");
  if (!canvas || typeof Chart === "undefined") return;

  _charts.simulator = new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Patrimônio total",
          data: totals,
          borderColor: "#0f7b6c",
          backgroundColor: "rgba(15,123,108,0.1)",
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2,
        },
        {
          label: "Total aportado",
          data: contributed,
          borderColor: "#105e8a",
          backgroundColor: "transparent",
          fill: false,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2,
          borderDash: [5, 4],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { labels: { boxWidth: 14, font: { size: 12 } } },
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: ${formatMoney(ctx.raw)}`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          grid: { color: "rgba(30,42,47,0.07)" },
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
