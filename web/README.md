🧪 Testes End-to-End — Playwright

Este módulo contém os testes automatizados end-to-end da aplicação Serverest, utilizando Playwright com TypeScript.

O foco principal está na validação funcional do fluxo de cadastro de usuários, cobrindo cenários positivos e negativos.

📦 Tecnologias Utilizadas:

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

⚙️ Como Instalar as Dependências: 

Acesse a pasta e2e:

cd e2e

Instale as dependências do projeto:

npm install

Instale os navegadores utilizados pelo Playwright:

npx playwright install

▶️ Como Rodar os Testes na Máquina:

Executar todos os testes:

npx playwright test

Executar em modo interativo (UI Mode):

npx playwright test --ui

Executar com visualização do navegador: 

npx playwright test --headed

Visualizar relatório após execução: 

npx playwright show-report

🧠 Decisões Técnicas

🔹 Uso do Playwright
O Playwright foi escolhido por:

- Web-first assertions (menor flakiness)
- Execução paralela nativa
- Estabilidade em testes E2E
- Relatórios automáticos
-Facilidade de depuração

A ferramenta oferece boa previsibilidade e confiabilidade para fluxos críticos.

🔹 Utilização de TypeScript

A tipagem forte foi adotada para:

- Tipagem estática
- Redução de erros em tempo de desenvolvimento
- Melhor legibilidade e manutenção
- Maior segurança nas interações com elementos

🔹 Aplicação do Page Object Model (POM)

O padrão POM foi utilizado para:

- Centralização de locators
- Redução de duplicação de código
- Baixo acoplamento entre testes e DOM
- Melhor escalabilidade da suíte

Isso permite escalabilidade da suíte de testes.

🔹 Separação por Cenário

Cada cenário foi separado em arquivos específicos visando:


- Organização
- Manutenção simplificada
- Execução seletiva
- Clareza de responsabilidade

🔹 Uso do factory para geração de dados

A geração dinâmica de dados foi implementada para:

- Evitar conflitos (ex: e-mails duplicados)
- Garantir independência entre execuções
- Reduzir flakiness
- Melhorar reprodutibilidade

🔹 Validação de Comportamento Real da Aplicação

As validações priorizam comportamento funcional, incluindo:

- Redirecionamentos
- Mensagens de erro
- Validações nativas do HTML5
- Regras de negócio

Evita-se validar apenas texto estático, priorizando comportamento real.

📂 Estrutura do Projeto

e2e/
├── features/
├── pages/
├── tests/
├── utils/
├── playwright.config.ts
├── package.json
├── README.md
├── test-results/
└── playwright-report/


🎯 Escopo Coberto

Fluxo de Cadastro de Usuários:

- Cadastro com dados válidos
- Cadastro como administrador
- Email duplicado
- Campos obrigatórios
- Email inválido

🚀 Estratégia de Execução (CI-Ready)

A suíte foi estruturada para integração contínua, permitindo execução em pipelines de CI/CD com:

- Execução headless por padrão
- Geração automática de relatório HTML
- Execução paralela configurável
- Independência entre testes

Possível integração com:

- GitHub Actions
- GitLab CI
- Azure DevOps

A arquitetura favorece execução determinística e repetível em ambiente isolado.

📊 Critérios de Qualidade Adotados

- Testes independentes e idempotentes
- Dados dinâmicos para evitar interferência entre execuções
- Assertions baseadas em comportamento real
- Estrutura escalável para crescimento da suíte
- Baixo acoplamento entre camadas

🔮 Possíveis Evoluções

- Integração com pipeline CI real
- Execução cross-browser ampliada
- Integração com API para setup/teardown de dados
- Implementação de testes de regressão completos
- Estratégia de tags para segmentação de suíte (smoke, regression, etc.)
- Geração de métricas de cobertura de fluxo

📌 Limitações

- Não contempla testes de performance
- Não contempla testes de segurança
- Escopo limitado ao fluxo de cadastro

👩‍💻 Autora
Michelle Camargo

Analista de Qualidade de Software Pleno

Atuação em testes funcionais e automatizados (Web, API e Mobile), com foco em validação de regras de negócio, estruturação de suítes escaláveis e integração contínua.

🔗 LinkedIn: https://github.com/Miscamargo
🔗 GitHub: https://www.linkedin.com/in/michelle-camargo