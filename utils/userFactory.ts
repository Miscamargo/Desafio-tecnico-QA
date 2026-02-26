export function criarUsuario(admin: boolean) {
  return {
    nome: 'Usuário Teste',
    email: `user${Date.now()}@teste.com`,
    senha: '123456',
    administrador: admin ? 'true' : 'false'
  };
}