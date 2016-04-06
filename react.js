'use strict'

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'eslint-plugin-react'
  ],
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'react/display-name': [ 2, {
      ignoreTranspilerName: true
    }], // Force displayName on components
    'react/forbid-prop-types': 2, // Disallow `any`, `array`, and `object` propTypes
    'react/no-danger': 2, // prevent usage of <div dangerouslySetInnerHTML={{ __html: "Hello World" }}></div>;
    'react/no-deprecated': 2, // prevent usage of deprecated methods
    'react/no-did-mount-set-state': 2, // prevent usage of .setState in componentDidMount
    'react/no-did-update-set-state': 2, // prevent usage of .componentDidUpdate
    'react/no-direct-mutation-state': 2, // prevent direct mutation of this.state
    'react/no-is-mounted': 2, // prevent usage of this.isMounted()
    'react/no-multi-comp': 2, // prevent multiple component definition per file
    'react/no-set-state': 0, // allow .setState
    'react/no-string-refs': 0, // allow string refs
    'react/no-unknown-property': 2, // prevent class=
    'react/prefer-es6-class': 2, // prefer es6 classes
    'react/prefer-stateless-function': 0, // don't prefer stateless functions
    'react/prop-types': 2, // Require propTypes when props are used
    'react/react-in-jsx-scope': 2, // Require react in jsx scope
    'react/require-extension': 0, // Don't require extensions
    'react/self-closing-comp': 2, // prefer to use single self-closing tag
    'react/sort-comp': 2, // prefer sorted component methods
    'react/sort-prop-types': 2, // prefer sorted propTypes
    'react/wrap-multilines': 2, // prevent multiline jsx without parens
    'react/jsx-boolean-value': [ 2, 'always' ], // always use bracket notation with boolean values
    'react/jsx-closing-bracket-location': 1, // prefer closing bracket location on same indent as opening
    'react/jsx-curly-spacing': [ 2, 'never' ], // never have extra spacing in JSX props
    'react/jsx-equals-spacing': [ 2, 'never' ], // never have spacing around prop equals sign
    'react/jsx-handler-names': 0, // allow handler names to be named however
    'react/jsx-indent-props': [ 2, 2 ], // prefer to indent props by two spaces
    'react/jsx-indent': [ 2, 2 ], // indent jsx components by 2 spaces
    'react/jsx-key': 2, // verify that there is a key in arrays of jsx elements
    'react/jsx-max-props-per-line': [ 2, { maximum: 2 }], // maximum of two props per line
    'react/jsx-no-bind': 2, // prevent `.bind` and arrow functions in the `render()` function
    'react/jsx-no-duplicate-props': 2, // prevent duplicate prop declarations
    'react/jsx-no-literals': 0, // allows string literals
    'react/jsx-no-undef': 2, // prevent use of undefined components
    'react/jsx-pascal-case': 2, // prefer PascalCase
    'react/jsx-sort-props': 0, // don't worry about sorting props
    'react/jsx-space-before-closing': [ 2, 'always' ], // add spacing before closing tags
    'react/jsx-uses-react': 2, // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-vars': 2 // Prevent variables used in JSX to be incorrectly marked as unused
  }
}
