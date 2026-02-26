import { test, expect } from '@playwright/test';
import { CadastroPage } from '../../pages/CadastroPage';
import { criarUsuario } from '../../utils/userFactory';

test.describe('Cadastro - Usuário Comum', () => {

  test('Cadastrar usuário comum com dados válidos', async ({ page }) => {
    const cadastroPage = new CadastroPage(page);
    const usuario = criarUsuario(false);

    await cadastroPage.acessarTela();
    await cadastroPage.preencherFormulario(usuario);
    await cadastroPage.submeter();

    // Valida redirecionamento
    await expect(page).toHaveURL(/home|\/$/);

    // Valida que está logado (elemento fixo da home)
    await expect(
      page.getByRole('heading', { name: 'Serverest Store' })
    ).toBeVisible();

    // Ou valida botão Logout
    await expect(
      page.getByRole('button', { name: 'Logout' })
    ).toBeVisible();
  });

});