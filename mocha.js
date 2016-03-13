'use strict'

module.exports = {
  plugins: [
    'eslint-plugin-mocha'
  ],
  env: {
    mocha: true
  },
  rules: {
    'mocha/no-exclusive-tests': 2, // Prevent .only tests
    'mocha/handle-done-callback': 2, // Handle the done callback
    'mocha/no-synchronous-tests': 2, // Disallow Synchronous Tests (when done is passed in)
    'mocha/no-global-tests': 2 // Disallow global tests
  }
}
