import { test, expect } from '@playwright/test';
import { CadastroPage } from '../../pages/CadastroPage';
import { criarUsuario } from '../../utils/userFactory';

test.describe('Cadastro de Usuário - Campos Obrigatórios', () => {

  test('Não deve permitir cadastro sem preencher o nome', async ({ page }) => {
    const cadastroPage = new CadastroPage(page);
    const usuario = criarUsuario(false);

    usuario.nome = '';

    await cadastroPage.acessarTela();
    await cadastroPage.preencherFormulario(usuario);
    await cadastroPage.submeter();

    await expect(page.getByText('Nome é obrigatório')).toBeVisible();
  });

  test('Não deve permitir cadastro sem preencher o email', async ({ page }) => {
    const cadastroPage = new CadastroPage(page);
    const usuario = criarUsuario(false);

    usuario.email = '';

    await cadastroPage.acessarTela();
    await cadastroPage.preencherFormulario(usuario);
    await cadastroPage.submeter();

    await expect(page.getByText('Email é obrigatório')).toBeVisible();
  });

  test('Não deve permitir cadastro sem preencher senha', async ({ page }) => {
    const cadastroPage = new CadastroPage(page);
    const usuario = criarUsuario(false);

    usuario.senha = '';

    await cadastroPage.acessarTela();
    await cadastroPage.preencherFormulario(usuario);
    await cadastroPage.submeter();

    await expect(page.getByText(/password é obrigatório/i)).toBeVisible();
  });

});