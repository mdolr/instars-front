// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  /*'Desktop layout': (browser) => {
    browser.init().waitForElementVisible('#app', 5000)
    .assert.elementPresent('.v-app-bar')
    .assert.elementNotPresent
    .end();
  },*/

  // Set the browser size to desktop
  // Then check if the v-app-bar element is present
  // and if the v-bottom-nav element is not present
  'Desktop layout': (browser) => {
    browser
      .init()
      .setWindowSize(1080, 1400)
      .waitForElementVisible('#app', 5000)
      .assert.visible('.v-app-bar')
      .assert.not.visible('.v-bottom-navigation')
      .end();
  },

  // Set the browser size to mobile
  // Then check if the v-app-bar element is not present
  // and if the v-bottom-nav element is present
  'Mobile layout': (browser) => {
    browser
      .init()
      .setWindowSize(320, 1400)
      .waitForElementVisible('#app', 5000)
      .assert.not.visible('.v-app-bar')
      .assert.visible('.v-bottom-navigation')
      .end();
  },
};
