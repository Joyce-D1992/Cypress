const { defineConfig } = require("cypress");

module.exports = defineConfig({
  waitForAnimations: false,
  animationDistanceThreshold: 50,
  
  e2e: {
    baseUrl: 'http://google.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});


