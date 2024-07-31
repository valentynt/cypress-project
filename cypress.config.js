const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    specPattern: "cypress/e2e/**/*.cy.js",
    retries: {
      runMode: 2,
      openMode: 2,
    },
    watchForFileChanges: true, // позволяет автоматически перезапускать тесты при изменении файлов
    defaultCommandTimeout: 8000, // 8 секунд  Устанавливает время ожидания по умолчанию для всех команд
    pageLoadTimeout: 60000, // 60 секунд Устанавливает время ожидания для загрузки страницы.
    chromeWebSecurity: true, // Отключение веб-безопасности в Chrome, если это необходимо для тестов.
  },
});
