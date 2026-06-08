# Documento Integrador — Projeto Integrador III

**Projeto:** FinTrack — Gerenciador de Gastos e Investimentos
**Disciplina:** Projeto Integrador III
**Professor:** Ricardo Alves Neiva
**Instituição:** Centro Universitário de Brasília — CEUB
**Entrega:** Sistematização 2

---

## Sumário

1. [Introdução](#1-introdução)
2. [Metodologia Aplicada](#2-metodologia-aplicada)
3. [Entregas de Cada Etapa](#3-entregas-de-cada-etapa)
4. [Protótipo / Implementação Simulada](#4-protótipo--implementação-simulada)
5. [Resultados e Análise Crítica](#5-resultados-e-análise-crítica)
6. [Lições Aprendidas e Próximos Passos](#6-lições-aprendidas-e-próximos-passos)
7. [Referências](#7-referências)

---

## 1. Introdução

### 1.1. Contexto e problema

A educação financeira pessoal ainda é um desafio significativo para grande parte da população brasileira. Segundo dados da ANBIMA (Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais), apenas **31% dos brasileiros possuem o hábito de anotar e acompanhar suas despesas mensais** (ANBIMA, 2023). A ausência de ferramentas acessíveis, simples e de baixo custo contribui diretamente para esse cenário: as soluções existentes no mercado ou são pagas, ou exigem integração bancária com riscos de privacidade, ou apresentam complexidade excessiva para o usuário iniciante.

No contexto universitário e de renda variável — perfil predominante entre estudantes e jovens profissionais —, essa lacuna é ainda mais evidente: o indivíduo não tem visibilidade sobre para onde vai seu dinheiro, não consegue simular o impacto de decisões de investimento e, consequentemente, perde a oportunidade de construir patrimônio desde cedo.

### 1.2. Justificativa

O projeto **FinTrack** surge como resposta a esse problema: uma aplicação web de acesso livre, sem necessidade de instalação, sem coleta de dados em servidor remoto e sem custo para o usuário final. A proposta é fornecer um conjunto mínimo de funcionalidades que cubra o ciclo completo da gestão financeira pessoal:

1. **Registro de entradas e saídas** (controle de fluxo de caixa);
2. **Visualização consolidada** dos indicadores financeiros (dashboard);
3. **Análise mensal** com indicadores de saúde financeira;
4. **Simulação de crescimento de investimentos** por juros compostos.

A escolha por uma SPA (*Single-Page Application*) estática — sem dependência de backend ou build tools — garante **leveza, portabilidade e zero custo de infraestrutura** no MVP (*Minimum Viable Product*), tornando a solução imediatamente implantável em qualquer hospedagem estática gratuita (GitHub Pages, Netlify, Vercel).

### 1.3. Objetivo geral

Desenvolver, validar e documentar uma aplicação web funcional para gestão de gastos pessoais e simulação de investimentos, acessível a qualquer perfil de usuário, sem custo e sem dependência de infraestrutura complexa.

### 1.4. Objetivos específicos

- Implementar as quatro funcionalidades-núcleo: Fluxo de Caixa, Dashboard, Resumo Mensal e Simulador de Investimentos.
- Validar a usabilidade com avaliadores de perfis distintos.
- Documentar o plano de implantação e as métricas de impacto (KPIs).
- Identificar lições aprendidas e definir um roadmap de evolução.

---

## 2. Metodologia Aplicada

### 2.1. Abordagem de desenvolvimento

O projeto adotou a abordagem de **desenvolvimento iterativo incremental**, com entregas parciais ao longo das etapas da disciplina. Cada etapa acrescentou valor incremental à solução, sem redesenho completo entre ciclos.

### 2.2. Stack tecnológica

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| Estrutura | HTML5 | Padrão web universal, sem dependências |
| Estilo | CSS3 (variáveis CSS, Flexbox, Grid) | Responsividade nativa sem framework |
| Lógica | JavaScript ES2022 (ES Modules) | Modularização sem transpilador |
| Gráficos | Chart.js 4.x (CDN) | Biblioteca madura, leve, sem build |
| Persistência | `localStorage` (navegador) | Zero backend, privacidade por padrão |

### 2.3. Arquitetura da aplicação

A aplicação segue o padrão **MVC simplificado** adaptado para front-end puro:

```
index.html          → View estática (estrutura HTML das views)
src/state.js        → Model (estado global e dados iniciais)
src/views/*.js      → View controllers (renderização de cada tela)
src/events.js       → Controller (handlers de interação do usuário)
src/storage.js      → Persistência (leitura/gravação no localStorage)
src/charts.js       → Visualização (inicialização e atualização de gráficos)
src/auth.js         → Autenticação simulada
src/utils.js        → Utilitários (formatação de moeda, datas)
src/elements.js     → Referências centralizadas ao DOM
src/main.js         → Entrypoint (inicialização da aplicação)
```

### 2.4. Metodologia de validação

A validação foi conduzida em duas frentes:

1. **Validação técnica:** checagem de sintaxe JavaScript com `node --check`, testes manuais de todos os fluxos críticos (login, CRUD de gastos/rendas, cálculos do Dashboard, Resumo Mensal e Simulador) em Chrome, Firefox e Safari.

2. **Validação com usuários:** teste de usabilidade guiado com quatro avaliadores simulados de perfis distintos, seguido de questionário estruturado com escala Likert de 1 a 5. Os resultados estão consolidados no documento *COLETA_DE_OPINOES.md*.

---

## 3. Entregas de Cada Etapa

### Etapa 1 — Levantamento de Requisitos e Definição do Escopo

**Resumo:** Identificação do problema (ausência de ferramenta simples de gestão financeira pessoal), definição do público-alvo (jovens adultos e estudantes com pouca experiência em finanças) e elicitação dos requisitos funcionais e não funcionais.

**Requisitos funcionais definidos:**
- RF01: Login com credenciais pré-configuradas.
- RF02: Cadastro, edição e exclusão de gastos (data, categoria, descrição, valor).
- RF03: Cadastro, edição e exclusão de rendas (data, tipo, descrição, valor).
- RF04: Dashboard com KPIs consolidados e gráficos.
- RF05: Resumo mensal com indicadores de saúde financeira.
- RF06: Simulador de investimentos com juros compostos.
- RF07: Persistência dos dados entre sessões (localStorage).

**Requisitos não funcionais definidos:**
- RNF01: Interface responsiva (desktop e mobile).
- RNF02: Sem dependência de backend ou build tools.
- RNF03: Tempo de carregamento inferior a 3 segundos em conexão 4G.
- RNF04: Compatível com Chrome, Firefox, Safari e Edge (últimas 2 versões).

---

### Etapa 2 — Prototipação e Design da Interface

**Resumo:** Definição da estrutura de navegação (4 abas), paleta de cores, tipografia e layout dos componentes. O design priorizou a hierarquia visual com cards de KPI destacados no topo de cada view, seguidos de gráficos e tabelas.

**Decisões de design adotadas:**
- Navegação por abas horizontais no topo — padrão reconhecível e sem curva de aprendizado.
- Cards com ícone, rótulo e valor grande — leitura rápida dos indicadores principais.
- Paleta sobria (tons de azul, verde, laranja e vermelho) com significado semântico (verde = positivo, vermelho = atenção).
- Barra de comprometimento de renda com gradiente de cor (verde → amarelo → vermelho) — feedback visual imediato.
- Presets de taxa e prazo no Simulador — reduz o atrito para usuários sem experiência.

---

### Etapa 3 — Implementação

**Resumo:** Desenvolvimento completo das quatro views e de toda a camada de lógica, persistência e gráficos. A implementação seguiu a arquitetura modular definida na etapa anterior.

**Funcionalidades implementadas:**

**Dashboard:**
- 6 cards de KPIs: Total de Rendas, Total de Gastos, Saldo do Mês, Disponível em Conta, Montante Investido, Patrimônio Total.
- Gráfico de rosca: gastos por categoria.
- Gráfico de rosca: rendas por tipo.
- Gráfico de barras: Renda × Gastos × Saldo.

**Fluxo de Caixa:**
- Sub-abas separadas para Gastos e Rendas.
- Formulário de cadastro com validação de campos.
- Edição e exclusão in-line.

**Resumo Mensal:**
- 6 KPIs: Rendas, Gastos, Saldo do Mês, Taxa de Poupança, % Patrimônio em Investimentos, Número de Lançamentos.
- Barra de comprometimento de renda com código de cores.
- Gráfico de rosca: distribuição de gastos por categoria no mês.
- Lista dos 5 maiores gastos do mês.

**Simulador de Investimentos:**
- Entradas: aporte inicial, aporte mensal, taxa de juros mensal, prazo em meses.
- Presets rápidos de taxa (0,5% / 0,8% / 1%) e prazo (12 / 24 / 60 meses).
- Cálculo por juros compostos (fórmula: `VF = VP*(1+i)^n + PMT*((1+i)^n-1)/i`).
- KPIs de resultado: Total Aportado, Rendimento e Patrimônio Final.
- Gráfico de linha: evolução do patrimônio × total aportado ao longo do tempo.

---

### Etapa 4 — Validação com Usuários Simulados

**Resumo:** Coleta de percepções de quatro avaliadores com perfis distintos. Resultado consolidado: **média geral de 4,50/5,00**. Maiores notas para Resumo Mensal (4,75) e intenção de recomendar (4,75). Detalhamento completo em *COLETA_DE_OPINOES.md*.

---

### Etapa 5 — Plano de Implantação e KPIs

**Resumo:** Elaboração do plano de implantação em 5 etapas (Preparação → Piloto → Testes → Rollout → Operação) com cronograma de 0 a 18 meses, recursos necessários e 15 KPIs estruturados em quatro dimensões: desempenho técnico, adoção, engajamento e impacto financeiro percebido. Detalhamento completo em *PLANO_IMPLANTACAO.md*.

---

## 4. Protótipo / Implementação Simulada

### 4.1. Descrição do protótipo

O **FinTrack** foi implementado como uma SPA (*Single-Page Application*) funcional — não é um protótipo de alta fidelidade estático, mas uma **aplicação plenamente operacional** com lógica de negócio, persistência de dados e visualizações interativas.

### 4.2. Dados pré-carregados (simulação)

Para viabilizar a demonstração sem necessidade de preenchimento manual, o sistema inicializa com um conjunto de dados sintéticos representativos de um mês típico:

- **Gastos:** Alimentação (R$ 800), Transporte (R$ 350), Moradia (R$ 1.500), Saúde (R$ 200), Lazer (R$ 300), Outros (R$ 150).
- **Rendas:** Salário (R$ 4.500), Freelance (R$ 800).
- **Investimentos:** Renda Fixa (R$ 5.000), Ações (R$ 2.000).

### 4.3. Fluxos demonstráveis

| Fluxo | Passos | Resultado esperado |
|-------|--------|-------------------|
| Login | Inserir "Claudio" / "12345678" → Entrar | Dashboard carrega com dados pré-definidos |
| Registrar gasto | Fluxo de Caixa → Gastos → preencher formulário → Salvar | Gasto aparece na lista; Dashboard e Resumo atualizam |
| Registrar renda | Fluxo de Caixa → Rendas → preencher formulário → Salvar | Renda aparece na lista; KPIs atualizam |
| Editar lançamento | Clicar no ícone de edição na linha → alterar valor → Salvar | Valores nos cards e gráficos recalculados |
| Simular investimento | Simulador → preencher aporte e prazo → Calcular | KPIs de resultado e gráfico de evolução exibidos |
| Verificar saúde financeira | Resumo Mensal | Barra de comprometimento com código de cores; top 5 gastos |

### 4.4. Acesso ao protótipo

```bash
# Clonar o repositório
git clone https://github.com/[usuario]/Gerenciador-de-Investimentos.git

# Iniciar servidor local
cd Gerenciador-de-Investimentos
python3 -m http.server 8080

# Acessar no navegador
http://localhost:8080
```

**Credenciais:** usuário `Claudio` / senha `12345678`

---

## 5. Resultados e Análise Crítica

### 5.1. Resultados técnicos

| Critério | Meta | Resultado obtido | Status |
|----------|------|-----------------|--------|
| Validação de sintaxe JS | Sem erros | `node --check` passou sem erros | ✅ |
| Compatibilidade multi-browser | Chrome, Firefox, Safari | Testado e funcional nos três | ✅ |
| Persistência entre sessões | Dados mantidos ao recarregar | localStorage funciona corretamente | ✅ |
| Responsividade mobile | Layout funcional em telas ≥ 320px | Funcional; gráficos com leve compressão em telas < 400px | ⚠️ |
| Funcionamento sem build tools | Sem Webpack/Vite | Funciona via ES Modules nativos | ✅ |
| Cálculo de juros compostos | Fórmula correta | Validado com calculadora financeira externa | ✅ |

### 5.2. Resultados da validação com usuários

| Dimensão avaliada | Média | Interpretação |
|-------------------|-------|---------------|
| Interface visual | 4,50/5,00 | Muito boa — design limpo e hierarquia clara |
| Navegação | 4,25/5,00 | Boa — ponto de entrada para cadastro pode ser mais óbvio |
| Cadastro de dados | 4,50/5,00 | Muito bom — formulários simples e diretos |
| Dashboard | 4,50/5,00 | Muito bom — KPIs claros; oportunidade de tooltips |
| Simulador | 4,25/5,00 | Bom — requer mais orientação para usuários iniciantes |
| Resumo Mensal | 4,75/5,00 | Excelente — barra de comprometimento muito bem avaliada |
| Intenção de recomendar | 4,75/5,00 | Excelente — alta propensão à adoção |
| **Média geral** | **4,50/5,00** | **Muito boa** |

### 5.3. Análise crítica

**Pontos fortes da solução:**

1. **Acessibilidade técnica:** a ausência de dependências de instalação ou conta em serviço externo elimina a principal barreira de adoção para usuários não-técnicos.
2. **Impacto educacional imediato:** todos os quatro avaliadores relataram ter tido alguma percepção nova sobre sua saúde financeira durante o teste — indicando que a ferramenta cumpre seu propósito central.
3. **Barra de comprometimento de renda:** o recurso mais elogiado em todas as avaliações é, também, o mais diferencial em relação às ferramentas gratuitas disponíveis — confirma a escolha de design como acertada.
4. **Simulador com presets:** a decisão de incluir valores sugeridos de taxa e prazo reduziu o atrito de uso para avaliadores sem experiência financeira.

**Limitações identificadas:**

1. **Responsividade em dispositivos muito pequenos:** gráficos Chart.js em telas menores que 400px ficam comprimidos, dificultando a leitura. Requer configuração de `responsive: true` com `maintainAspectRatio: false` e altura máxima por media query.
2. **Escopo de dados restrito ao mês corrente:** o sistema não possui histórico de meses anteriores, limitando análises de tendência — lacuna significativa para usuários de perfil avançado (como Eduardo apontou).
3. **Autenticação simulada:** o sistema de login atual (credenciais fixas em código) é adequado ao MVP educacional, mas incompatível com uso em produção real — seria necessário OAuth ou equivalente.
4. **Sem sincronização entre dispositivos:** o localStorage é atrelado ao navegador do dispositivo, impedindo acesso ao mesmo conjunto de dados em outros dispositivos.

**Avaliação do alinhamento entre problema e solução:**

O FinTrack resolve de forma satisfatória o problema central identificado: **ausência de ferramenta simples, gratuita e sem barreiras técnicas para gestão financeira pessoal**. O escopo do MVP está bem calibrado — não subestima o usuário iniciante nem sobrecarrega com funcionalidades que diluiriam o foco. A evolução natural para um produto mais robusto (backend, sincronização, exportação) está mapeada no plano de implantação e representa uma trajetória viável.

---

## 6. Lições Aprendidas e Próximos Passos

### 6.1. Lições aprendidas

**Sobre desenvolvimento:**

- **ES Modules nativos são viáveis, mas exigem servidor HTTP.** A decisão de usar `import/export` sem Webpack/Vite foi correta para simplicidade do projeto, mas requer comunicação clara ao usuário sobre como iniciar o servidor local. Documentar esse passo de forma proeminente no README é essencial.
- **localStorage é suficiente para MVP, mas tem limites claros.** O limite de ~5 MB por origem é mais que suficiente para dados pessoais de um usuário, mas a falta de sincronização entre dispositivos foi a principal limitação percebida pelos usuários mais experientes.
- **Ambientes corporativos podem bloquear `npx` e registries npm.** A opção por HTML/CSS/JS puro, além de ser tecnicamente adequada ao escopo, eliminou esse risco completamente — qualquer editor de texto e qualquer servidor estático bastam.

**Sobre design:**

- **O feedback visual imediato é decisivo para a adoção.** A barra de comprometimento de renda foi o recurso mais elogiado justamente por traduzir um número complexo (percentual de renda comprometida) em um sinal visual instantâneo. Essa lição deve guiar o design de futuras funcionalidades.
- **O fluxo de onboarding é subestimado em projetos acadêmicos.** Dois dos quatro avaliadores tiveram alguma hesitação inicial sobre por onde começar. Um tooltip simples ou uma tela de boas-vindas teria eliminado esse atrito sem custo de desenvolvimento significativo.

**Sobre metodologia:**

- **Usuários simulados têm valor real se os perfis forem representativos.** A diversidade de perfis (estudante, analista, professor, empresária) gerou feedbacks complementares que cobriram dimensões que um grupo homogêneo não teria revelado.
- **A coleta de feedback estruturado (escala + relato qualitativo) é mais rica do que só o questionário.** Os comentários abertos dos avaliadores forneceram insights que os números sozinhos não capturariam.

### 6.2. Próximos passos

#### Curto prazo (0 a 3 meses)

| Prioridade | Ação | Impacto esperado |
|------------|------|-----------------|
| Alta | Corrigir responsividade dos gráficos em mobile | Resolve principal queixa de Nira |
| Alta | Adicionar tour guiado / tooltips na primeira visita | Elimina hesitação inicial (Gabriela, Isaías) |
| Alta | Publicar em hospedagem estática pública (GitHub Pages) | Permite acesso sem instalar servidor local |
| Média | Histórico de meses anteriores | Endereça principal limitação levantada por Eduardo |
| Média | Exportação de dados (CSV) | Complementa o uso para usuários avançados |

#### Médio prazo (3 a 6 meses)

- Implementar PWA (Progressive Web App) — instalação no celular e funcionamento offline.
- Categorias de gastos personalizáveis pelo usuário.
- Metas mensais por categoria com alertas visuais.
- Integração com Web Share API para compartilhar resumo mensal.

#### Longo prazo (6 a 18 meses)

- Backend leve (Node.js + banco gerenciado) para sincronização entre dispositivos.
- Autenticação real (OAuth Google/Apple).
- Integração com Open Finance / extratos bancários (via API pública).
- Módulo de metas de longo prazo (reserva de emergência, aposentadoria).
- App mobile dedicado (PWA evoluída ou React Native).

---

## 7. Referências

- ANBIMA. **Raio X do Investidor Brasileiro 2023**. Disponível em: https://www.anbima.com.br. Acesso em: jun. 2026.
- BANCO CENTRAL DO BRASIL. **Relatório de Cidadania Financeira 2022**. Brasília: BCB, 2022.
- CHART.JS. **Chart.js Documentation**. Disponível em: https://www.chartjs.org/docs/. Acesso em: jun. 2026.
- MDN WEB DOCS. **Web APIs — localStorage**. Disponível em: https://developer.mozilla.org/. Acesso em: jun. 2026.
- MDN WEB DOCS. **JavaScript modules**. Disponível em: https://developer.mozilla.org/. Acesso em: jun. 2026.
- NIELSEN, J. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group, 1994. Disponível em: https://www.nngroup.com/articles/ten-usability-heuristics/. Acesso em: jun. 2026.
- SEB (Serasa Experian). **Mapa da Inadimplência no Brasil 2024**. São Paulo: Serasa, 2024.

---

*Documento elaborado para fins acadêmicos — Projeto Integrador III — CEUB, 2026.*
