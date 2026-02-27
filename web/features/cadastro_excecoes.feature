Funcionalidade: Exceções no cadastro de usuários

  Cenário: Não permitir cadastro com email já existente

    Dado que já existe um usuário cadastrado com determinado email
    Quando outro usuário tenta se cadastrar utilizando o mesmo email
    Então deve ser exibida a mensagem "Este email já está sendo usado"

  Cenário: Não permitir cadastro sem preencher o nome
    Dado que o usuário está na tela "Cadastro de usuários"
    Quando o usuário preenche Email e Senha
    E deixa o campo Nome em branco
    E clica em "Cadastrar"
    Então o sistema deve exibir mensagem informando que o campo "Nome é obrigatório"  

  Cenário: Não permitir cadastro sem preencher o email

    Dado que o usuário está na tela "Cadastro de usuários"
    Quando o usuário preenche Nome e Senha
    E deixa o campo Email em branco
    E ao clicar em "Cadastrar"
    Então o sistema deve exibir mensagem informando que o campo "Email é obrigatório"

  Cenário: Não permitir cadastro no sistema sem preencher senha

    Dado que o usuário está na tela "Cadastro de usuários"
    Quando o usuário preenche Nome e Email
    E deixa o campo Senha em branco
    E ao clicar em "Cadastrar"
    Então o sistema deve exibir mensagem informando que o campo "Senha é obrigatória"

  Cenário: Não permitir cadastro com email em formato inválido
  
    Dado que o usuário informe um email em formato inválido
    Quando tenta realizar o cadastro
    Então o sistema não deve permitir o cadastro do usuário