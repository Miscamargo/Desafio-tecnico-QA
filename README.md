# 🧪 Desafio Técnico — Arquitetura de Automação | Serverest

Este repositório apresenta a implementação de uma estratégia estruturada de automação para a aplicação Serverest, com cobertura em múltiplas camadas.

O foco está no fluxo crítico de cadastro de usuários, validando regras de negócio na API e na interface.

---

# 🏗 Estratégia de Testes

A arquitetura segue o modelo da pirâmide de testes:

- 🔎 API (Validação de serviço)
- 🌐 E2E (Validação de interface)
- 🐞 Registro de inconsistências

---

# 📂 Estrutura Atual do Projeto

```bash
.
├── api
│   ├── Features
│   │   └── cadastro-usuario.feature
│   ├── ServerTest.postman_collection.json
│   └── ServerTest.postman_environment.json
│
├── docs
│
├── web
│   ├── features
│   ├── pages
│   │   └── CadastroPage.ts
│   ├── tests
│   ├── utils
│   ├── playwright-report
│   ├── test-results
│   │   └── .last-run.json
│   ├── package.json
│   ├── package-lock.json
│   └── playwright.config.ts
│
└── README.md
```

---

# 🚀 1️⃣ Camada de API

📁 `api/`

Validação direta do endpoint:

```http
POST /usuarios
```

---

## 📘 Documentação BDD

📁 `api/Features/`

Contém o arquivo:

```bash
cadastro-usuario.feature
```

Este arquivo descreve os cenários de teste em formato Gherkin, documentando:

- Caminho feliz  
- E-mail duplicado  
- Validações de campos obrigatórios  
- Regras de negócio  

A feature atua como documentação viva das regras da API.

---

## 🛠 Ferramenta Utilizada

- Postman  
- Scripts de validação em JavaScript (aba Tests)  

---

## ⚙️ Como Executar via Postman

### 1️⃣ Importar a Collection

No Postman:

- Clique em **Import**
- Selecione:

```bash
api/ServerTest.postman_collection.json
```

---

### 2️⃣ Importar o Environment

- Clique em **Import**
- Selecione:

```bash
api/ServerTest.postman_environment.json
```

- Ative o environment no canto superior direito do Postman.

---

### 3️⃣ Executar os testes

- Abra a collection  
- Clique em **Run Collection**  
- Execute todos os cenários  

Os testes validam status code e estrutura do retorno automaticamente.

---

## 🧠 Decisões Técnicas — API

- Separação entre Collection e Environment  
- Uso de variáveis de ambiente  
- Dados dinâmicos para evitar conflito entre execuções  
- Documentação BDD separada da implementação técnica  
- API validada como primeira camada de confiança  

---

# 🌐 2️⃣ Camada E2E (Playwright)

📁 `web/`

Testes que validam o comportamento real do usuário na interface.

---

## 🛠 Stack Utilizada

- Playwright  
- TypeScript  
- Node.js  
- Page Object Model  
- Factory Pattern  

---

## 🏗 Organização da Camada Web

- `pages/` → Page Objects  
- `tests/` → Cenários automatizados  
- `features/` → Documentação BDD da camada Web  
- `utils/` → Funções auxiliares  
- `playwright-report/` → Relatórios gerados  
- `test-results/` → Resultados de execução  

---

## ⚙️ Como Executar

### 1️⃣ Instalar dependências

```bash
cd web
npm install
```

### 2️⃣ Instalar navegadores

```bash
npx playwright install
```

### 3️⃣ Executar testes

```bash
npx playwright test
```

### 4️⃣ Executar modo interativo

```bash
npx playwright test --ui
```

### 5️⃣ Visualizar relatório

```bash
npx playwright show-report
```

---

# 🐞 Registro de Bugs

📁 `docs/`

As inconsistências identificadas foram registradas separadamente para:

- Diferenciar falhas de API e UI  
- Evidenciar inconsistências de regra de negócio  
- Demonstrar análise crítica da aplicação  

---

# 🎯 Princípios Aplicados

- Testes independentes  
- Execução determinística  
- Separação clara de responsabilidades  
- Documentação viva com BDD  
- Baixo acoplamento  
- Estrutura preparada para CI/CD  

---

# ⚠️ Limitações do Escopo

- Não contempla testes de performance  
- Não contempla testes de segurança  
- Escopo restrito ao fluxo de cadastro  

---

# 👩‍💻 Autoria

Michelle Camargo  
Analista de Qualidade de Software  

Experiência em testes Web, API e Mobile, com foco em automação, arquitetura de testes e validação de regras de negócio.