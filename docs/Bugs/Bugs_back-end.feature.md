Feature: Validação de contrato e regras de negócio - API de Cadastro de Clientes

  Como QA
  Quero validar os retornos da API de cadastro
  Para garantir conformidade com padrões REST e regras descritas no desafio

  Cenário 1 – API não retorna 409 para recurso duplicado

Dado que realizo um POST /clientes com dados válidos
E o usuário é criado com sucesso retornando status 201
Quando envio novamente um POST /clientes com o mesmo email
Então a API deveria retornar status code 409 Conflict
Mas a API retorna status code 400 Bad Request

Cenário 2 – Inconsistência entre campo enviado e campo retornado na validação

Dado que preparo uma requisição POST /clientes enviando o campo "senha"
  """
  {
    "nome": "Teste",
    "email": "teste@email.com",
    "senha": "",
    "administrador": "true"
  }
  """
Quando envio a requisição para o endpoint
Então a API deveria retornar mensagem de erro utilizando a mesma nomenclatura do campo enviado
Mas a API retorna no body:
  """
  {
    "password": "password é obrigatório",
    "senha": "Senha não é permitido"
  }
  """
E há inconsistência entre os campos "senha" e "password"

### Considerações Técnicas

O comportamento identificado pode indicar:

- Divergência entre contrato esperado e implementação atual.
- Falta de padronização na definição de nomenclatura dos campos.
Recomenda-se revisão do contrato da API para garantir consistência.