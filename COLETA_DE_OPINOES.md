# Coleta de Opiniões sobre a Solução — FinTrack

**Projeto Integrador III — Sistematização 2**
**Disciplina:** Projeto Integrador III
**Professor:** Ricardo Alves Neiva
**Método:** Usuários simulados — observação guiada + questionário estruturado

---

## 1. Metodologia de Coleta

A coleta foi conduzida em formato de **teste de usabilidade guiado** combinado com um **questionário de avaliação** ao final da sessão. Cada avaliador recebeu as seguintes instruções:

> "Acesse o sistema FinTrack. Realize o login, registre pelo menos um gasto e uma renda, navegue pelo Dashboard e pelo Resumo Mensal, e experimente o Simulador de Investimentos. Ao final, responda ao questionário."

### Perfil dos avaliadores

| Avaliador | Idade | Ocupação | Familiaridade com tecnologia | Experiência com gestão financeira |
|-----------|-------|----------|------------------------------|-----------------------------------|
| Gabriela | 22 anos | Estudante de Administração | Alta | Básica (usa aplicativos de banco) |
| Eduardo | 29 anos | Analista Financeiro | Muito alta | Avançada (usa planilhas e apps) |
| Isaías | 37 anos | Professor universitário | Média | Intermediária (planilha Excel) |
| Nira | 44 anos | Empresária | Média-baixa | Básica (nunca organizou formalmente) |

### Questionário aplicado (escala 1 a 5)

| # | Pergunta |
|---|----------|
| Q1 | A interface é visualmente agradável e organizada? |
| Q2 | Consegui navegar entre as telas sem dificuldades? |
| Q3 | O cadastro de gastos e rendas foi simples e intuitivo? |
| Q4 | O Dashboard apresentou as informações de forma clara? |
| Q5 | O Simulador de Investimentos foi fácil de usar e entender? |
| Q6 | O Resumo Mensal ajudou a compreender minha situação financeira? |
| Q7 | Recomendaria esta ferramenta a outras pessoas? |

---

## 2. Relatos Individuais

---

### Avaliador 1 — Gabriela

**Perfil:** Estudante de Administração, 22 anos. Utiliza aplicativos de banco para verificar saldo, mas nunca organizou suas finanças de forma sistemática. Avaliou o sistema usando notebook (Chrome).

**Relato durante a sessão:**

> "Assim que entrei, o layout me pareceu bem limpo. Gostei dos cards coloridos no Dashboard — eles me mostram de cara o que eu preciso saber: quanto gastei, quanto recebi, quanto sobrou. Cadastrar os gastos foi tranquilo, achei os campos claros. Fiquei um pouco perdida só na hora de entender a diferença entre 'Disponível em Conta' e 'Saldo do Mês', mas depois de olhar com calma ficou claro.
>
> O Simulador foi o que mais me chamou atenção! Nunca tinha pensado em quanto R$ 200,00 por mês pode virar em 5 anos com juros compostos. Foi uma surpresa boa. Isso me motivou a querer usar o sistema de verdade."

**Notas do questionário:**

| Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 |
|----|----|----|----|----|----|----|
| 5 | 4 | 5 | 4 | 5 | 4 | 5 |

**Média: 4,57 / 5,00**

**Pontos positivos mencionados:**
- Visual limpo e moderno.
- Fluxo de cadastro de gastos muito direto.
- Simulador motivador e didático.

**Pontos de melhoria sugeridos:**
- Adicionar um tooltip explicando a diferença entre os KPIs no Dashboard.
- Incluir categorias de gastos pré-definidas (ex.: alimentação, transporte, lazer) para agilizar o cadastro.

---

### Avaliador 2 — Eduardo

**Perfil:** Analista Financeiro, 29 anos. Usuário avançado de planilhas Excel e de aplicativos como GuiaBolso e Mobills. Testou o sistema em computador desktop (Firefox).

**Relato durante a sessão:**

> "Tecnicamente, o sistema está bem construído para uma SPA estática. Os gráficos respondem corretamente à medida que você lança os dados, a persistência no localStorage funciona bem — recarreguei a página e os dados estavam lá. O Simulador usa juros compostos corretamente, o que é básico mas nem todo app faz direito.
>
> Como analista financeiro, sinto falta de algumas funcionalidades: exportação de dados, categorias personalizáveis e, principalmente, um histórico de meses anteriores para comparação. A barra de comprometimento de renda no Resumo Mensal é um recurso excelente e pouco visto em ferramentas simples — gostei muito dessa escolha.
>
> Para o público-alvo (pessoas que estão começando a organizar as finanças), o escopo está correto. Não vale sobrecarregar com funcionalidades que o usuário iniciante não vai usar."

**Notas do questionário:**

| Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 |
|----|----|----|----|----|----|----|
| 4 | 5 | 4 | 5 | 4 | 5 | 4 |

**Média: 4,43 / 5,00**

**Pontos positivos mencionados:**
- Consistência técnica dos cálculos.
- Barra de comprometimento de renda no Resumo Mensal.
- Persistência correta dos dados via localStorage.
- Gráficos responsivos e informativos.

**Pontos de melhoria sugeridos:**
- Exportação dos dados (CSV ou PDF) para uso em planilhas externas.
- Histórico multi-mês para análise de tendências.
- Categorias de gastos personalizáveis pelo usuário.
- Filtro por período no Dashboard.

---

### Avaliador 3 — Isaías

**Perfil:** Professor universitário, 37 anos. Usa computador diariamente para trabalho acadêmico, mas não considera a interface de sistemas como ponto forte. Controla suas finanças em planilha Excel de forma básica. Testou no notebook (Chrome).

**Relato durante a sessão:**

> "Entrei e o sistema me pareceu organizado. O processo de login foi rápido. Naveguei pelas abas sem problema — as quatro opções no menu superior são bem diretas: Dashboard, Fluxo de Caixa, Resumo Mensal e Simulador.
>
> Tive uma pequena dificuldade inicial para perceber que precisava ir na aba 'Fluxo de Caixa' para registrar os gastos — pensei que poderia fazer isso pelo próprio Dashboard. Mas depois de explorar por dois minutos, ficou tudo claro. O Resumo Mensal foi a parte que mais me interessou: a barra de comprometimento de renda me deu uma percepção visual imediata de como estou em relação ao meu orçamento.
>
> O Simulador foi surpreendente. Coloquei os meus números reais ali e fiz a simulação de uma previdência privada simples. Resultado interessante. É uma ferramenta que eu indicaria para meus alunos da área de finanças pessoais."

**Notas do questionário:**

| Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 |
|----|----|----|----|----|----|----|
| 4 | 4 | 4 | 4 | 5 | 5 | 5 |

**Média: 4,43 / 5,00**

**Pontos positivos mencionados:**
- Estrutura de navegação clara e objetiva.
- Barra de comprometimento de renda muito didática.
- Simulador com presets de taxa e prazo facilita o uso.
- Adequado para fins educacionais.

**Pontos de melhoria sugeridos:**
- Um pequeno tutorial ou tour guiado para a primeira visita.
- Indicação visual mais clara de qual aba é o ponto de entrada para cadastrar dados.
- Permitir escolher o mês de referência no Resumo Mensal.

---

### Avaliador 4 — Nira

**Perfil:** Empresária, 44 anos. Utiliza o celular como principal dispositivo. Nunca organizou as finanças pessoais de forma estruturada — usa o extrato do banco como único controle. Testou no smartphone (Safari).

**Relato durante a sessão:**

> "Nunca usei nada assim antes. Achei que ia ser complicado, mas consegui fazer o login sem ajuda, navegar nas abas e registrar alguns gastos. Os campos do formulário são simples — data, categoria, descrição e valor. Nada de complicado.
>
> O que mais me chamou atenção foi o Dashboard: aqueles números grandes e coloridos mostrando exatamente quanto eu gastei, quanto recebi e qual é meu saldo. Parece óbvio, mas nunca tive essa visão consolidada de forma tão rápida. No celular, a tela ficou um pouco pequena nos gráficos, mas deu para entender.
>
> Não explorei muito o Simulador porque achei mais avançado para o meu nível, mas entendi a proposta. O Resumo Mensal foi bem útil — a barrinha colorida (verde/amarelo/vermelho) é intuitiva, qualquer pessoa entende sem precisar ler nada."

**Notas do questionário:**

| Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 |
|----|----|----|----|----|----|----|
| 5 | 4 | 5 | 5 | 3 | 5 | 5 |

**Média: 4,57 / 5,00**

**Pontos positivos mencionados:**
- Cadastro de gastos e rendas muito acessível para iniciantes.
- Dashboard com visualização imediata e clara.
- Barra de comprometimento de renda intuitiva (semáforo de cores).
- Não exige conhecimento técnico para começar a usar.

**Pontos de melhoria sugeridos:**
- Melhorar a experiência mobile — gráficos ficam apertados em telas pequenas.
- O Simulador precisa de mais orientação para usuários sem experiência em investimentos.
- Opção de definir metas mensais de gastos por categoria.

---

## 3. Consolidação dos Resultados

### 3.1. Notas consolidadas por avaliador

| Avaliador | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | **Média** |
|-----------|----|----|----|----|----|----|----|----|
| Gabriela | 5 | 4 | 5 | 4 | 5 | 4 | 5 | **4,57** |
| Eduardo | 4 | 5 | 4 | 5 | 4 | 5 | 4 | **4,43** |
| Isaías | 4 | 4 | 4 | 4 | 5 | 5 | 5 | **4,43** |
| Nira | 5 | 4 | 5 | 5 | 3 | 5 | 5 | **4,57** |
| **Média geral** | **4,50** | **4,25** | **4,50** | **4,50** | **4,25** | **4,75** | **4,75** | **4,50** |

### 3.2. Gráfico de radar — Médias por critério

```
Q1 – Visual agradável       ████████████████████░  4,50
Q2 – Navegação fácil        █████████████████░░░░  4,25
Q3 – Cadastro intuitivo     ████████████████████░  4,50
Q4 – Dashboard claro        ████████████████████░  4,50
Q5 – Simulador acessível    █████████████████░░░░  4,25
Q6 – Resumo Mensal útil     ██████████████████████ 4,75
Q7 – Recomendaria           ██████████████████████ 4,75
```

*(Escala: cada bloco █ equivale a 0,25 ponto; máximo 5,00)*

### 3.3. Análise dos pontos de melhoria mais citados

| Sugestão de melhoria | Citada por | Prioridade sugerida |
|----------------------|------------|----------------------|
| Melhoria da responsividade mobile | Nira, Eduardo | Alta |
| Tooltips / tour guiado inicial | Gabriela, Isaías | Alta |
| Exportação de dados (CSV/PDF) | Eduardo | Média |
| Histórico multi-mês | Eduardo, Isaías | Média |
| Categorias personalizáveis | Gabriela, Eduardo | Média |
| Orientação mais clara no Simulador para iniciantes | Nira | Média |
| Metas mensais por categoria | Nira | Baixa |

---

## 4. Síntese Geral

A recepção do **FinTrack** entre os quatro avaliadores simulados foi muito positiva, com **média geral de 4,50/5,00**. Os pontos de maior destaque foram:

- **Resumo Mensal e recomendação** (Q6 e Q7): ambos com média 4,75 — indicando que a funcionalidade mais diferencial (barra de comprometimento de renda) foi bem percebida e que os avaliadores recomendariam o sistema.
- **Navegação e acesso ao Simulador** (Q2 e Q5): médias ligeiramente menores (4,25), indicando que há espaço para melhorar o onboarding e a acessibilidade do Simulador para perfis menos experientes.

O sistema demonstrou **adequação ao público-alvo** (pessoas que estão iniciando a gestão financeira pessoal), atendendo tanto avaliadores com baixa familiaridade (Nira) quanto profissionais experientes (Eduardo), o que sugere boa abrangência de uso. As melhorias prioritárias identificadas — responsividade mobile e orientação inicial — são implementáveis sem redesenho arquitetural e devem compor o backlog de curto prazo.
