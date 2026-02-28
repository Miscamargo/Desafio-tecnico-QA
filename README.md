# 🧪 Desafio Técnico — Arquitetura de Automação | Serverest

Este repositório apresenta a implementação de uma estratégia estruturada de automação para a aplicação **Serverest**, com cobertura em múltiplas camadas.

O foco está no fluxo crítico de cadastro de usuários, validando regras de negócio tanto na API quanto na interface.

---

# 🏗 Estratégia de Testes

A arquitetura segue o modelo da pirâmide de testes:

- 🔎 API (Camada de Serviço)
- 🌐 E2E (Camada de Interface)
- 🐞 Registro de inconsistências

### Benefícios

- Execução independente por camada  
- Diagnóstico rápido de falhas  
- Redução de flakiness  
- Baixo acoplamento  
- Estrutura preparada para CI/CD  

---

# 📂 Estrutura do Projeto

```bash
.
├── api
│   ├── ServerTest.postman_collection.json
│   └── ServerTest.postman_environment.json
│
├── web
│   ├── tests
│   ├── pages
│   ├── factories
│   ├── playwright.config.ts
│   └── package.json
│
├── docs
│   └── Bugs
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

## 🎯 Objetivo

Validar regras de negócio isoladamente da interface, garantindo que o serviço responda corretamente antes da validação E2E.

---

## ✅ Cobertura

- Cadastro com dados válidos  
- E-mail duplicado  
- Campos obrigatórios  
- Formato inválido  
- Validação de status code  
- Validação da estrutura do retorno  

---

## 🛠 Ferramenta Utilizada

- Postman  
- Scripts automatizados em JavaScript (aba Tests)

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

Os testes possuem validações automatizadas de status code e estrutura da resposta.

---

## 🧠 Decisões Técnicas

- Separação entre Collection e Environment  
- Uso de variáveis de ambiente  
- Dados dinâmicos para evitar conflito entre execuções  
- API validada como primeira camada de confiança  

---

# 🌐 2️⃣ Camada E2E (Playwright)

📁 `web/`

Testes que validam o comportamento real do usuário na interface, incluindo integração com backend.

---

## 🛠 Stack Utilizada

- Playwright  
- TypeScript  
- Node.js  
- Page Object Model  
- Factory Pattern para geração de dados  

---

## 🏗 Padrões Aplicados

### ✔ Page Object Model
- Centralização de locators  
- Reutilização de ações  
- Redução de duplicidade  

### ✔ Factory Pattern
- Geração de dados únicos  
- Independência entre execuções  
- Execução paralela segura  

### ✔ Web-First Assertions
- Uso de assertions nativas do Playwright  
- Maior estabilidade nos testes  

---

## ⚙️ Como Executar

### 1️⃣ Instalar dependências

```bash
cd web
npm install
```

---

### 2️⃣ Instalar navegadores

```bash
npx playwright install
```

---

### 3️⃣ Executar testes

```bash
npx playwright test
```

---

### 4️⃣ Executar em modo interativo

```bash
npx playwright test --ui
```

---

### 5️⃣ Visualizar relatório

```bash
npx playwright show-report
```

---

# 🐞 Registro de Bugs

📁 `docs/Bugs/`

As inconsistências identificadas foram documentadas separadamente para:

- Diferenciar falhas de API e UI  
- Evidenciar problemas de regra de negócio  
- Facilitar reprodução  
- Demonstrar análise crítica da aplicação  

---

# 🎯 Princípios Aplicados

- Testes independentes  
- Execução determinística  
- Separação clara de responsabilidades  
- Dados dinâmicos  
- Baixo acoplamento  
- Estrutura preparada para CI/CD  

---

# ⚠️ Limitações do Escopo

- Não contempla testes de performance  
- Não contempla testes de segurança  
- Escopo restrito ao fluxo de cadastro  

---

# 🔮 Evoluções Possíveis

- Integração com pipeline CI/CD  
- Testes de contrato  
- Setup e teardown automatizados  
- Separação da suíte (smoke / regression)  
- Ampliação de cobertura funcional  

---

# 👩‍💻 Autoria

**Michelle Camargo**  
Analista de Qualidade de Software  

Experiência em testes Web, API e Mobile, com foco em automação, arquitetura de testes e validação de regras de negócio.