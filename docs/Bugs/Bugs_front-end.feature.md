Feature: Inconsistências e validações no cadastro de usuário - Front-end


  Como QA
  Quero validar aderência às regras de negócio e documentação
  Para garantir consistência funcional da interface. 

  Cenário 1 – Campo CNPJ inexistente

  Dado que acesso o site https://front.serverest.dev/
Quando navego para a tela de cadastro
Então deveria existir um campo para preenchimento de CNPJ
Mas o campo CNPJ não está disponível na interface

Cenário 2 – Campo Apelido inexistente

Dado que a regra de negócio informa que o apelido deve ser único
Quando acesso a tela de cadastro
Então deveria existir um campo "Apelido" no formulário
Mas apenas os campos Nome, Email, Senha e Administrador são exibidos


Cenário 4 – Mensagem de erro exibida em idioma inconsistente

Dado que acesso a tela de cadastro
E o site está apresentado em português
Quando tento cadastrar um usuário sem preencher o campo Senha
Então deveria ser exibida mensagem de erro em português
Mas a mensagem exibida é "Password é obrigatório"


### Considerações Técnicas Gerais

Durante a análise foram identificadas divergências entre as regras descritas no desafio e os elementos disponíveis na interface (ausência de CNPJ e Apelido), além de inconsistência de idioma na mensagem de validação do campo Senha.

Os pontos observados indicam possível desalinhamento entre documentação e implementação atual, bem como ausência de padronização textual.

Recomenda-se revisão da especificação funcional e das mensagens exibidas ao usuário para garantir consistência de regra de negócio e experiência adequada.