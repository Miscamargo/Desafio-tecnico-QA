Funcionalidade: Cadastro de usuários

  Cenário: Cadastrar usuário comum com dados válidos

    Dado que o usuário está na tela "Cadastro de usuários"
    Quando ele preenche os campos: Nome, Email e Senha com dados válidos
    E não marca a opção "Cadastrar como administrador?"
    E clica no botão "Cadastrar"
    Então deve visualizar a mensagem "Cadastro realizado com sucesso"

  Cenário: Cadastrar usuário como administrador

    Dado que o usuário está na tela "Cadastro de usuários"
    Quando ele preenche os campos: Nome, Email e Senha com dados válidos
    E marca a opção "Cadastrar como administrador?"
    E clica no botão "Cadastrar"
    Então deve visualizar a mensagem "Cadastro realizado com sucesso"