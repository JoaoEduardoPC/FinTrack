# FinTrack

Aplicação web de controle de gastos e gerenciamento de investimentos. Desenvolvida em HTML, CSS e JavaScript puro, sem dependência de frameworks ou build tools.

> **Projeto Integrador III — CEUB 2026**
> Professor: Ricardo Alves Neiva

---

## Como executar localmente

O projeto usa **ES Modules** (`import/export`), o que exige um servidor HTTP local — abrir o `index.html` diretamente pelo sistema de arquivos (`file://`) não funciona.

### Opção 1 — Python (sem instalar nada)

```bash
python3 -m http.server 8080
```

Acesse **http://localhost:8080** no browser.

### Opção 2 — Live Server (VS Code)

1. Instale a extensão **Live Server** no VS Code.
2. Clique com o botão direito em `index.html` → **Open with Live Server**.

### Opção 3 — Node.js `serve`

```bash
npx serve .
```

---

## Credenciais de acesso

| Campo   | Valor      |
|---------|------------|
| Usuário | `Claudio`  |
| Senha   | `12345678` |

---

## Funcionalidades

### Dashboard
- 6 cards de KPIs: Total de Rendas, Total de Gastos, Saldo do Mês, Disponível em Conta, Montante Investido e Patrimônio Total.
- Gráfico de rosca com gastos por categoria.
- Gráfico de rosca com rendas por tipo.
- Gráfico de barras comparando Renda × Gastos × Saldo.

### Fluxo de Caixa
- Sub-abas separadas para **Gastos** e **Rendas**.
- Cadastro de gastos com data, categoria, descrição e valor.
- Cadastro de rendas (salário, freelance, bônus etc.).
- Edição e exclusão de cada lançamento.
- Dados persistidos no `localStorage`.

### Resumo Mensal
- 6 KPIs: Rendas, Gastos, Saldo do Mês, Taxa de Poupança, % do Patrimônio em Investimentos e Número de Lançamentos.
- Barra de progresso de comprometimento da renda (verde / amarelo / vermelho).
- Gráfico de rosca com distribuição de gastos por categoria no mês.
- Lista dos 5 maiores gastos do mês.

### Simulador de Investimentos
- Aporte inicial, aporte mensal, taxa de juros mensal e prazo em meses.
- Presets rápidos de taxa (0,5 % / 0,8 % / 1 %) e prazo (12 / 24 / 60 meses).
- KPIs de resultado: Total Aportado, Rendimento e Patrimônio Final.
- Gráfico de linha com evolução do patrimônio × total aportado ao longo do tempo.

---

## Estrutura do projeto

```
Gerenciador-de-Investimentos/
├── index.html               # Estrutura HTML e todas as views
├── styles.css               # Estilos e responsividade
├── APRESENTACAO.html        # Apresentação final — 17 slides navegáveis (Sistematização 2)
├── COLETA_DE_OPINOES.md     # Relato dos 4 usuários simulados + resultados (Sistematização 2)
├── DOCUMENTO_INTEGRADOR.md  # Documento integrador com todas as etapas (Sistematização 2)
├── PLANO_IMPLANTACAO.md     # Plano de implantação e 15 KPIs de impacto
└── src/
    ├── main.js         # Entrypoint — inicializa a aplicação
    ├── state.js        # Estado global e dados padrão
    ├── utils.js        # Funções utilitárias (formatação, datas)
    ├── elements.js     # Referências centralizadas ao DOM
    ├── storage.js      # Persistência via localStorage
    ├── charts.js       # Gráficos do dashboard (Chart.js)
    ├── auth.js         # Login, logout e troca de abas
    ├── events.js       # Registro de todos os event listeners
    └── views/
        ├── dashboard.js   # Renderização do dashboard
        ├── cashflow.js    # CRUD de gastos e rendas
        ├── monthly.js     # Resumo mensal
        └── simulator.js   # Simulador de investimentos
```

---

## Documentação acadêmica (Sistematização 2)

| Arquivo | Descrição |
|---------|-----------|
| `COLETA_DE_OPINOES.md` | Simulação de 4 usuários (Gabriela, Eduardo, Isaías, Nira) com relatos, notas por critério e análise consolidada. Média geral: **4,50/5,00**. |
| `DOCUMENTO_INTEGRADOR.md` | Documento integrador com introdução, metodologia, entregas de cada etapa, protótipo, resultados e análise crítica, lições aprendidas e próximos passos. |
| `APRESENTACAO.html` | Apresentação final com 17 slides navegáveis. Abrir via servidor local: `http://localhost:8080/APRESENTACAO.html`. Navegação por teclado (←/→), clique nos pontos ou swipe. |
| `PLANO_IMPLANTACAO.md` | Plano de implantação em 5 etapas, cronograma de 0–18 meses, recursos e 15 KPIs em 4 dimensões. |

---

## Tecnologias

- **HTML5 / CSS3 / JavaScript ES2022** — sem frameworks
- **Chart.js 4.4.3** — carregado via CDN
- **localStorage** — persistência local de dados
