import { test, expect } from '@playwright/test';
import { CadastroPage } from '../../pages/CadastroPage';
import { criarUsuario } from '../../utils/userFactory';

test.describe('Cadastro - Email já existente', () => {

  test('Não deve permitir cadastro com email já existente', async ({ page }) => {
    const cadastroPage = new CadastroPage(page);

    const usuario = criarUsuario(false);

    await cadastroPage.acessarTela();
    await cadastroPage.preencherFormulario(usuario);
    await cadastroPage.submeter();

    await expect(page).toHaveURL(/home|\/$/);

    await cadastroPage.acessarTela();

    await cadastroPage.preencherFormulario(usuario);
    await cadastroPage.submeter();

    await expect(
      page.getByText('Este email já está sendo usado')
    ).toBeVisible();
  });

});