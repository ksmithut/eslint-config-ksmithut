'use strict'

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'eslint-plugin-react',
  ],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'react/display-name': [ 'error', {
      ignoreTranspilerName: true,
    }], // Force displayName on components
    'react/forbid-component-props': 'error', // Disallow 'className' and 'style' as props
    'react/forbid-prop-types': 'error', // Disallow `any`, `array`, and `object` propTypes
    'react/no-danger': 'error', // prevent usage of <div dangerouslySetInnerHTML={{ __html: "Hello World" }}></div>;
    'react/no-danger-with-children': 'error', // Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-deprecated': 'error', // prevent usage of deprecated methods
    'react/no-did-mount-set-state': 'error', // prevent usage of .setState in componentDidMount
    'react/no-did-update-set-state': 'error', // prevent usage of .componentDidUpdate
    'react/no-direct-mutation-state': 'error', // prevent direct mutation of this.state
    'react/no-find-dom-node': 'error', // Prevent usage of findDOMNode
    'react/no-is-mounted': 'error', // prevent usage of this.isMounted()
    'react/no-multi-comp': 'error', // prevent multiple component definition per file
    'react/no-render-return-value': 'error', // Prevent usage of the return value of React.render
    'react/no-set-state': 'off', // allow .setState
    'react/no-string-refs': 'off', // allow string refs
    'react/no-unknown-property': 'error', // prevent class=
    'react/prefer-es6-class': 'error', // prefer es6 classes
    'react/prefer-stateless-function': 'off', // don't prefer stateless functions
    'react/prop-types': 'error', // Require propTypes when props are used
    'react/react-in-jsx-scope': 'error', // Require react in jsx scope
    'react/require-optimization': 'off', // Enforce React components to have a shouldComponentUpdate method
    'react/require-render-return': 'error', // Enforce ES5 or ES6 class for returning value in render function
    'react/self-closing-comp': 'error', // prefer to use single self-closing tag
    'react/sort-comp': 'error', // prefer sorted component methods
    'react/sort-prop-types': 'error', // prefer sorted propTypes

    'react/jsx-boolean-value': [ 'error', 'always' ], // always use bracket notation with boolean values
    'react/jsx-closing-bracket-location': 1, // prefer closing bracket location on same indent as opening
    'react/jsx-curly-spacing': [ 'error', 'never' ], // never have extra spacing in JSX props
    'react/jsx-equals-spacing': [ 'error', 'never' ], // never have spacing around prop equals sign
    'react/jsx-filename-extension': 'off', // Restrict file extensions that may contain JSX
    'react/jsx-first-prop-new-line': [ 'error', 'multiline' ], // Enforce position of the first prop in JSX
    'react/jsx-handler-names': 'off', // allow handler names to be named however
    'react/jsx-indent-props': [ 'error', 2 ], // prefer to indent props by two spaces
    'react/jsx-indent': [ 'error', 2 ], // indent jsx components by 2 spaces
    'react/jsx-key': 'error', // verify that there is a key in arrays of jsx elements
    'react/jsx-max-props-per-line': [ 'error', { maximum: 2 }], // maximum of two props per line
    'react/jsx-no-bind': 'error', // prevent `.bind` and arrow functions in the `render()` function
    'react/jsx-no-comment-textnodes': 'warn', // Prevent comments from being inserted as text nodes
    'react/jsx-no-duplicate-props': 'error', // prevent duplicate prop declarations
    'react/jsx-no-literals': 'off', // allows string literals
    'react/jsx-no-target-blank': 'error', // Prevent usage of unsafe target='_blank'
    'react/jsx-no-undef': 'error', // prevent use of undefined components
    'react/jsx-pascal-case': 'error', // prefer PascalCase
    'react/jsx-sort-props': 'off', // don't worry about sorting props
    'react/jsx-space-before-closing': [ 'error', 'always' ], // add spacing before closing tags
    'react/jsx-uses-react': 'error', // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-vars': 'error', // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-wrap-multilines': 'error', // prevent multiline jsx without parens
  },
}
