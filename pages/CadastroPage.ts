import { Page, Locator } from '@playwright/test';

type Usuario = {
  nome: string;
  email: string;
  senha: string;
};

export class CadastroPage {
  readonly page: Page;

  readonly inputNome: Locator;
  readonly inputEmail: Locator;
  readonly inputSenha: Locator;
  readonly checkboxAdministrador: Locator;
  readonly botaoSubmit: Locator;
  readonly mensagemSucesso: Locator;

  constructor(page: Page) {
  this.page = page;

  this.inputNome = page.locator('#nome');
  this.inputEmail = page.locator('#email');
  this.inputSenha = page.locator('#password'); // CORREÇÃO AQUI
  this.checkboxAdministrador = page.locator('#administrador');
  this.botaoSubmit = page.getByRole('button', { name: /cadastrar/i });
  this.mensagemSucesso = page.getByRole('alert');
}

  async acessarTela() {
  await this.page.goto('https://front.serverest.dev/cadastrarusuarios');
  }

  async preencherFormulario(usuario: Usuario) {
    await this.inputNome.fill(usuario.nome);
    await this.inputEmail.fill(usuario.email);
    await this.inputSenha.fill(usuario.senha);
  }

  async marcarComoAdministrador() {
    await this.checkboxAdministrador.check();
  }

  async submeter() {
    await this.botaoSubmit.click();
  }
}