import { test, expect } from '@playwright/test';
import { CadastroPage } from '../../pages/CadastroPage';
import { criarUsuario } from '../../utils/userFactory';

test.describe('Cadastro - Email inválido', () => {

  test('Não deve permitir cadastro com email em formato inválido', async ({ page }) => {
    const cadastroPage = new CadastroPage(page);
    const usuario = criarUsuario(false);

    usuario.email = 'email-invalido';

    await cadastroPage.acessarTela();
    await cadastroPage.preencherFormulario(usuario);
    await cadastroPage.submeter();

    const emailInput = page.getByRole('textbox', { name: 'Digite seu email' });

    const isValid = await emailInput.evaluate(
      (el: HTMLInputElement) => el.validity.valid
    );

    expect(isValid).toBe(false);

    await expect(page).toHaveURL(/cadastrar/);
  });

});