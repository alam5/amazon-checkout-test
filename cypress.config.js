
module.exports = {
 
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
    reportDir: 'cypress/reports/result.html',
    charts: true,
    reportPageTitle: 'Cypress Test Result',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: "https://www.amazon.com",
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      
    },
  },
};
