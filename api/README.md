🚀 Testes de API — Serverest

Este módulo contém os testes automatizados de API realizados sobre a aplicação Serverest, utilizando Postman para validação funcional dos endpoints.
A API pública foi utilizada exclusivamente para validação das regras de negócio relacionadas ao fluxo de cadastro de usuários.


🎯 Objetivo
Validar o comportamento da API no fluxo de criação de usuários, garantindo conformidade com:

✔️ Regras de negócio
✔️ Validação de campos obrigatórios
✔️ Tratamento de e-mail duplicado
✔️ Validação de formato de e-mail
✔️ Status codes esperados
✔️ Estrutura do response body

🧠 Decisões Técnicas

🔹 Utilização do Postman

O Postman foi escolhido por:

- Organização estruturada em Collections
- Scripts de teste em JavaScript
- Validação automatizada de status code e payload
- Uso de variáveis de ambiente
- Execução via CLI utilizando Newman

Para o contexto do desafio, a ferramenta permite foco direto na lógica de validação sem overhead de configuração.

🔹 Separação entre Collection e Environment

A separação foi adotada para:

🔐 Isolar variáveis como baseUrl
♻️ Permitir reutilização em diferentes ambientes
⚙️ Facilitar execução automatizada via CLI

- Essa abordagem reduz acoplamento e melhora portabilidade.

🔹 Cobertura de Testes Positivos e Negativos
A estratégia priorizou:

- Fluxos válidos (happy path)
- Validações de erro
- Casos de borda relevantes

O fluxo de cadastro foi considerado crítico, portanto recebeu foco especial na validação de regras de negócio.

🔹 Uso de Dados Dinâmicos

Foram utilizados dados variáveis para evitar conflitos de duplicidade em execuções repetidas.

Benefícios:

- Independência entre execuções
- Redução de flakiness
- Maior confiabilidade
- Execução determinística em pipeline

📂 Estrutura: 

postman/
├── serverest-api.postman_collection.json
└── serverest.postman_environment.json

🔎 Endpoints Validados:

POST /usuarios

Cenários cobertos:

✔️ Cadastro com dados válidos
✔️ Tentativa de cadastro com e-mail já existente
✔️ Campos obrigatórios não preenchidos
✔️ E-mail em formato inválido

▶️ Como Executar: 

Via Postman

- Importar a collection
- Importar o environment
- Selecionar o environment ativo
- Executar via Collection Runner

💻 Via Newman (CLI)

Instalar:

npm install -g newman

Executar:

newman run postman/serverest-api.postman_collection.json \
  -e postman/serverest.postman_environment.json

⚠️ Limitações:

- Não foram realizados testes de performance
- Não foram realizados testes de segurança
- Escopo limitado ao fluxo de cadastro

📈 Melhorias Futuras:

- Integração com pipeline CI
- Geração automática de relatórios
- Ampliação da cobertura para outros módulos da API
- Implementação de testes de contrato

👩‍💻 Autora
Michelle Camargo

Analista de Qualidade de Software Pleno

Atuação em testes funcionais e automatizados (Web, API e Mobile), com foco em validação de regras de negócio, estruturação de suítes escaláveis e integração contínua.

🔗 LinkedIn: https://github.com/Miscamargo
🔗 GitHub: https://www.linkedin.com/in/michelle-camargo