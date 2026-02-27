import { test, expect } from '@playwright/test';
import { CadastroPage } from '../../pages/CadastroPage';
import { criarUsuario } from '../../utils/userFactory';

test.describe('Cadastro - Senha obrigatória', () => {

  test('Não deve permitir cadastro sem preencher senha', async ({ page }) => {
    const cadastroPage = new CadastroPage(page);
    const usuario = criarUsuario(false);

    usuario.senha = '';

    await cadastroPage.acessarTela();
    await cadastroPage.preencherFormulario(usuario);
    await cadastroPage.submeter();

await expect(page.getByText(/password é obrigatório/i)).toBeVisible(); });

});