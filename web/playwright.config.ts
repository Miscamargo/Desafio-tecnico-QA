import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['list'],      // console
    ['html']       // gera playwright-report
  ],

  use: {
    headless: false,
    launchOptions: {
      slowMo: 700
    }
  }
});