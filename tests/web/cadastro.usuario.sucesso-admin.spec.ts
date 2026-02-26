import { test, expect } from '@playwright/test';
import { CadastroPage } from '../../pages/CadastroPage';
import { criarUsuario } from '../../utils/userFactory';

test.describe('Cadastro - Usuário Administrador', () => {

  test('Cadastrar usuário como administrador', async ({ page }) => {
    const cadastroPage = new CadastroPage(page);
    const usuario = criarUsuario(true);

    await cadastroPage.acessarTela();
    await cadastroPage.preencherFormulario(usuario);
    await cadastroPage.marcarComoAdministrador();
    await cadastroPage.submeter();

    // Valida redirecionamento
    await expect(page).toHaveURL(/admin|home|\/$/);

    // Valida que chegou na tela correta
    await expect(
      page.getByRole('heading', { name: `Bem Vindo ${usuario.nome}` })
    ).toBeVisible();
  });

});