import { state, AUTH_USER, AUTH_PASSWORD, resetStateData } from "./state.js";
import { el } from "./elements.js";
import { loadFromStorage } from "./storage.js";
import { renderDashboard } from "./views/dashboard.js";
import { renderCharts } from "./charts.js";
import { renderMonthlySummary } from "./views/monthly.js";
import { handleSimulator } from "./views/simulator.js";
import { renderExpenses, renderIncomes } from "./views/cashflow.js";

const USERS_KEY = "fintrack_users";
const SESSION_KEY = "fintrack_session";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function getRegisteredUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

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

function loginSuccess(username) {
  state.user = username;
  resetStateData(username);
  loadFromStorage(username);
  sessionStorage.setItem(SESSION_KEY, username);
  el.loginError.textContent = "";
  el.welcomeText.textContent = `Bem-vindo, ${state.user}. Veja seus indicadores de hoje.`;
  setAuthView(true);
  renderExpenses();
  renderIncomes();
  activateTab("dashboard");
}

export function restoreSession(username) {
  state.user = username;
  resetStateData(username);
  loadFromStorage(username);
  el.welcomeText.textContent = `Bem-vindo, ${state.user}. Veja seus indicadores de hoje.`;
  setAuthView(true);
  el.tabs.forEach((tab) =>
    tab.classList.toggle("active", tab.dataset.view === "dashboard"),
  );
  el.views.forEach((view) =>
    view.classList.toggle("active", view.id === "dashboard"),
  );
}

export function handleLogin(event) {
  event.preventDefault();
  const formData = new FormData(el.loginForm);
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "").trim();

  if (username === AUTH_USER && password === AUTH_PASSWORD) {
    loginSuccess(username);
    return;
  }

  const users = getRegisteredUsers();
  const found = users.find(
    (u) =>
      u.nome.toLowerCase() === username.toLowerCase() && u.senha === password,
  );
  if (found) {
    loginSuccess(found.nome);
    return;
  }

  el.loginError.textContent = "Usuário ou senha inválidos.";
}

export function handleRegister(event) {
  event.preventDefault();
  const formData = new FormData(el.registerForm);
  const nome = String(formData.get("nome") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const senha = String(formData.get("senha") || "").trim();

  el.registerError.textContent = "";

  if (!EMAIL_REGEX.test(email)) {
    el.registerError.textContent = "Informe um e-mail válido.";
    return;
  }

  if (senha.length < 6) {
    el.registerError.textContent = "A senha deve ter no mínimo 6 caracteres.";
    return;
  }

  const users = getRegisteredUsers();
  if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
    el.registerError.textContent = "Este e-mail já está cadastrado.";
    return;
  }

  users.push({ nome, email, senha });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  el.registerSuccess.textContent = `Conta criada! Faça login com o usuário "${nome}".`;
  el.registerSuccess.style.display = "block";
  el.registerForm.reset();

  setTimeout(() => {
    el.registerSuccess.style.display = "none";
    el.registerSuccess.textContent = "";
    toggleAuthMode("login");
  }, 2500);
}

export function toggleAuthMode(mode) {
  const isRegister = mode === "register";
  el.loginForm.style.display = isRegister ? "none" : "";
  el.registerForm.style.display = isRegister ? "" : "none";
  el.toggleToRegister.style.display = isRegister ? "none" : "";
  el.toggleToLogin.style.display = isRegister ? "" : "none";
  el.loginError.textContent = "";
  el.registerError.textContent = "";
}
