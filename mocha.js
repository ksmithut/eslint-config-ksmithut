'use strict'

module.exports = {
  plugins: [
    'eslint-plugin-mocha',
  ],
  env: {
    mocha: true,
  },
  rules: {
    'mocha/no-exclusive-tests': 'error', // Prevent .only tests
    'mocha/no-skipped-tests': 'warn', // Prevent .skip tests
    'mocha/no-pending-tests': 'warn', // Prevent pending tests
    'mocha/handle-done-callback': 'error', // Handle the done callback
    'mocha/no-synchronous-tests': 'off', // Allow Synchronous tests
    'mocha/no-global-tests': 'error', // Disallow global tests
    'mocha/valid-test-description': 'off',
    'mocha/mocha/valid-suite-description': 'off',
    'mocha/no-sibling-hooks': 'off',
    'mocha/no-mocha-arrows': 'off',
    'mocha/no-hooks': 'off',
    // Waiting for release of something after 4.3.0
    // 'mocha/no-top-level-hooks': 'error',
  },
}
