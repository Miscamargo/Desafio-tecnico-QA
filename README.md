# Automação de Testes - Serverest (Front-end)

Projeto de automação de testes end-to-end desenvolvido com Playwright e TypeScript, com foco em engenharia de qualidade, organização estrutural e validação de regras de negócio relacionadas ao fluxo de cadastro de usuários.

---

## Objetivo

Garantir a integridade funcional do fluxo de cadastro por meio de testes automatizados que validam:

- Comportamento esperado em cenários positivos
- Regras de negócio em cenários negativos
- Validações de formulário (frontend e backend)
- Consistência de navegação e redirecionamento

---

## Tecnologias e Abordagens

- Node.js
- Playwright
- TypeScript
- Page Object Model (POM)
- Geração dinâmica de dados via factory

A escolha do Playwright foi baseada em:

- Web-first assertions
- Execução paralela nativa
- Suporte consistente a múltiplos navegadores
- Estabilidade em testes E2E

---

## Estrutura do Projeto

DESAFIO-TECNICO-QA/
│
├── pages/
│ └── CadastroPage.ts
│
├── tests/
│ └── web/
│ ├── cadastro.usuario.campos-obrigatorios.spec.ts
│ ├── cadastro.usuario.email-duplicado.spec.ts
│ ├── cadastro.usuario.email-invalido.spec.ts
│ ├── cadastro.usuario.nome-obrigatorio.spec.ts
│ ├── cadastro.usuario.senha-obrigatoria.spec.ts
│ ├── cadastro.usuario.sucesso-admin.spec.ts
│ └── cadastro.usuario.sucesso.spec.ts
│
├── utils/
│ └── userFactory.ts
│
├── playwright.config.ts
├── package.json
└── README.md

A organização foi estruturada para:

- Isolar responsabilidades
- Facilitar manutenção
- Permitir escalabilidade do projeto
- Evitar duplicação de lógica

---

## Arquitetura de Teste

### Page Object Model (POM)

A camada `pages/` centraliza:

- Locators
- Ações de página
- Interações reutilizáveis

Isso reduz acoplamento entre testes e estrutura de DOM, além de melhorar legibilidade.

### Factory de Dados

A `userFactory.ts` é responsável por:

- Gerar dados dinâmicos
- Garantir independência entre execuções
- Reduzir flakiness causada por conflitos de dados

---

## Cenários Cobertos

### Fluxos de Sucesso

- Cadastro de usuário comum
- Cadastro de usuário administrador
- Validação de redirecionamento após cadastro

### Fluxos de Exceção

- Email já existente
- Campos obrigatórios (nome, email, senha)
- Email em formato inválido
- Validação nativa do HTML5

---

## Estratégia de Validação

Os testes utilizam:

- Web-first assertions do Playwright
- Validação de URL quando aplicável
- Verificação de mensagens de erro
- Validação de propriedades nativas do browser (ex: `validationMessage`)
- Regex em asserts para reduzir fragilidade

Todos os testes são independentes e não compartilham estado.

---

## Execução

Instalar dependências:

```bash
npm install

## Instalar navegadores:

npx playwright install

## Executar testes:

npx playwright test

## Executar modo interativo:

npx playwright test --ui

## Visualizar relatório:

npx playwright show-report

## Ambiente Testado

Aplicação:
https://front.serverest.dev

## Princípios Aplicados

-- Separação clara de responsabilidades
-- Independência entre testes
-- Dados dinâmicos para evitar conflito
-- Minimização de flakiness
-- Legibilidade e manutenibilidade
-- Estrutura preparada para expansão futura (novas features, CI/CD)

## Autor:

Michelle Camargo

Projeto desenvolvido como parte de desafio técnico em automação de testes.
