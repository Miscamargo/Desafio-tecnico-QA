 🧪 Desafio Técnico — Arquitetura de Automação de Testes | Serverest

Este repositório apresenta a implementação de uma estratégia de automação estruturada para a aplicação Serverest, com cobertura em múltiplas camadas e foco em confiabilidade, previsibilidade e escalabilidade.

A solução foi desenhada para validar o fluxo crítico de cadastro de usuários, exercitando regras de negócio tanto na API quanto na interface, garantindo visão completa do comportamento da aplicação.

🏗 Estratégia de Testes
A abordagem adotada segue uma distribuição alinhada à pirâmide de testes:

🔎 Camada de Serviço (API) → validação estrutural e regras de negócio

🌐 Camada de Interface (E2E) → validação de comportamento real do usuário

🐞 Registro de inconsistências → análise crítica do sistema

Essa separação permite:

- Diagnóstico mais rápido de falhas
- Redução de falsos positivos
- Baixo acoplamento entre camadas
- Execução independente
- Preparação para integração contínua

📂 Estrutura do Projeto

.
├── api/               → Testes de API (Postman + Newman)
├── web/               → Testes E2E (Playwright + TypeScript)
├── docs/
│   └── Bugs/          → Registro das inconsistências encontradas
└── README.md

🚀 Camada 1 — Testes de API

📁 api/

Validação direta do endpoint:

POST /usuarios

🎯 Objetivo

Garantir que as regras de negócio relacionadas ao cadastro estejam corretamente implementadas no serviço, isolando a validação da camada de interface.

✅ Cobertura

* Cadastro com dados válidos
* E-mail duplicado
* Campos obrigatórios
* Formato inválido
* Validação de status code
* Validação da estrutura do retorno

🧠 Decisões Técnicas

* Separação entre Collection e Environment
* Scripts automatizados em JavaScript
* Dados dinâmicos para evitar conflito entre execuções
* Execução via Newman (CLI-ready)
* A camada de API atua como primeiro nível de confiança do sistema.

⚙️ Execução — API

Instalar Newman:

npm install -g newman

Executar:

newman run api/ServeRest.postman_collection.json \
  -e api/ServerTest.postman_environment.json

🧪 Camada 2 — Testes End-to-End

📁 web/

Validação do comportamento da aplicação sob a perspectiva do usuário, exercitando interface, regras visuais e integração com o backend.

🛠 Stack Técnica

* Playwright
* TypeScript
* Node.js
* Page Object Model
* Factory para geração de dados dinâmicos

🏗 Decisões Arquiteturais

Playwright

* Web-first assertions
* Execução paralela
* Relatórios automáticos
* Boa estabilidade para fluxos críticos

TypeScript

* Tipagem estática
* Maior segurança na manutenção evolutiva

Page Object Model

* Centralização de locators
* Redução de duplicidade
* Baixo acoplamento entre testes e DOM

Dados Dinâmicos

* Independência entre execuções
* Redução de flakiness
* Execução paralela segura

⚙️ Execução — E2E

Instalar dependências:

cd web
npm install

Instalar navegadores:

npx playwright install

Executar testes:

npx playwright test

Modo interativo: 

npx playwright test --ui

Visualizar relatório: 

npx playwright show-report

A suíte está preparada para execução headless, favorecendo integração em pipeline.


🐞 Registro de Inconsistências

📁 docs/Bugs/

As inconsistências identificadas foram registradas separadamente para:

* Diferenciar falhas de API e UI
* Evidenciar problemas de regra de negócio
* Facilitar reprodutibilidade
* Demonstrar análise crítica do comportamento da aplicação

🎯 Princípios de Engenharia Aplicados

* Testes independentes e idempotentes
* Separação clara de responsabilidades
* Execução determinística
* Uso de dados dinâmicos
* Baixo acoplamento
* Estrutura preparada para CI/CD
* Foco em comportamento real e regra de negócio

A estratégia prioriza qualidade estrutural e confiabilidade da suíte, não apenas volume de testes.

⚠️ Limitações

* Não contempla testes de performance
* Não contempla testes de segurança
* Escopo limitado ao fluxo de cadastro

🔮 Evoluções Possíveis

* Integração com pipeline CI/CD
* Testes de contrato
* Setup/teardown automatizado via API
* Segmentação de suíte (smoke / regression)
* Expansão para outros módulos da aplicação

👩‍💻 Autoria

Michelle Camargo Analista de Qualidade de Software

Atuação em testes funcionais e automatizados (Web, API e Mobile), com foco em arquitetura de automação, validação de regras de negócio e integração contínua.









