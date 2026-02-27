import { test, expect } from '@playwright/test';
import { CadastroPage } from '../../pages/CadastroPage';
import { criarUsuario } from '../../utils/userFactory';

test.describe('Cadastro - Nome obrigatório', () => {

  test('Não deve permitir cadastro sem preencher o nome', async ({ page }) => {
    const cadastroPage = new CadastroPage(page);
    const usuario = criarUsuario(false);

    usuario.nome = '';

    await cadastroPage.acessarTela();
    await cadastroPage.preencherFormulario(usuario);
    await cadastroPage.submeter();

    await expect(page.getByText('Nome é obrigatório')).toBeVisible();
  });

});