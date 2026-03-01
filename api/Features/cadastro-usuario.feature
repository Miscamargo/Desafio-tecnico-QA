Funcionalidade: Cadastro de usuários via API

  Como QA
  Quero validar o endpoint POST /usuarios
  Para garantir que as regras de negócio do cadastro sejam respeitadas

  Contexto:
    Dado que possuo a URL base da API configurada

  Cenário: Cadastrar usuário com dados válidos
    Dado que envio um payload válido com nome, email, password e administrador
    Quando realizo uma requisição POST para "/usuarios"
    Então o status code deve ser 201
    E a resposta deve conter a mensagem "Cadastro realizado com sucesso"
    E deve retornar um "_id" válido

  Cenário: Não permitir cadastro com email já existente
    Dado que já existe um usuário cadastrado com determinado email
    Quando realizo uma requisição POST para "/usuarios" utilizando o mesmo email
    Então o status code deve ser 400
    E a resposta deve conter a mensagem "Este email já está sendo usado"

  Cenário: Não permitir cadastro com nome em branco
    Dado que envio um payload com o campo "nome" vazio
    Quando realizo uma requisição POST para "/usuarios"
    Então o status code deve ser 400
    E a resposta deve conter a mensagem "nome deve ser válido"

  Cenário: Não permitir cadastro com email em branco
    Dado que envio um payload com o campo "email" vazio
    Quando realizo uma requisição POST para "/usuarios"
    Então o status code deve ser 400
    E a resposta deve conter a mensagem "email deve ser válido"

  Cenário: Não permitir cadastro com password em branco
    Dado que envio um payload com o campo "password" vazio
    Quando realizo uma requisição POST para "/usuarios"
    Então o status code deve ser 400
    E a resposta deve conter a mensagem "password deve ser válido"

  Cenário: Não permitir cadastro com administrador em branco
    Dado que envio um payload com o campo "administrador" vazio
    Quando realizo uma requisição POST para "/usuarios"
    Então o status code deve ser 400
    E a resposta deve conter a mensagem "administrador deve ser válido"

  Cenário: Não permitir cadastro com email em formato inválido
    Dado que envio um payload com email em formato inválido
    Quando realizo uma requisição POST para "/usuarios"
    Então o status code deve ser 400
    E a resposta deve conter a mensagem "email deve ser válido"