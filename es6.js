'use strict'

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    es6: true,
  },
  rules: {
    /**
     * ECMAScript 6
     * These rules relate to ES6, also known as ES2015:
     */

    'arrow-body-style': 'off', // require braces around arrow function bodies - http://eslint.org/docs/rules/arrow-body-style
    'arrow-parens': [
      'error',
      'always',
    ], // require parentheses around arrow function arguments - http://eslint.org/docs/rules/arrow-parens
    'arrow-spacing': 'error', // enforce consistent spacing before and after the arrow in arrow functions - http://eslint.org/docs/rules/arrow-spacing
    'constructor-super': 'error', // require super() calls in constructors - http://eslint.org/docs/rules/constructor-super
    'generator-star-spacing': [
      'error',
      'after',
    ], // enforce consistent spacing around * operators in generator functions - http://eslint.org/docs/rules/generator-star-spacing
    'no-class-assign': 'error', // disallow reassigning class members - http://eslint.org/docs/rules/no-class-assign
    'no-confusing-arrow': 'error', // disallow arrow functions where they could be confused with comparisons - http://eslint.org/docs/rules/no-confusing-arrow
    'no-const-assign': 'error', // disallow reassigning const variables - http://eslint.org/docs/rules/no-const-assign
    'no-dupe-class-members': 'error', // disallow duplicate class members - http://eslint.org/docs/rules/no-dupe-class-members
    'no-duplicate-imports': 'off', // disallow duplicate module imports - http://eslint.org/docs/rules/no-duplicate-imports
    'no-new-symbol': 'error', // disallow new operators with the Symbol object - http://eslint.org/docs/rules/no-new-symbol
    'no-restricted-imports': 'off', // disallow specified modules when loaded by import - http://eslint.org/docs/rules/no-restricted-imports
    'no-this-before-super': 'error', // disallow this/super before calling super() in constructors - http://eslint.org/docs/rules/no-this-before-super
    'no-useless-computed-key': 'error', // disallow unnecessary computed property keys in object literals - http://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-constructor': 'error', // disallow unnecessary constructors - http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-rename': 'error', // disallow renaming import, export, and destructured assignments to the same name - http://eslint.org/docs/rules/no-useless-rename
    'no-var': 'error', // require let or const instead of var - http://eslint.org/docs/rules/no-var
    'object-shorthand': 'error', // require or disallow method and property shorthand syntax for object literals - http://eslint.org/docs/rules/object-shorthand
    'prefer-arrow-callback': 'error', // require arrow functions as callbacks - http://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-const': 'error', // require const declarations for variables that are never reassigned after declared - http://eslint.org/docs/rules/prefer-const
    'prefer-reflect': 'off', // require Reflect methods where applicable - http://eslint.org/docs/rules/prefer-reflect
    'prefer-rest-params': 'error', // require rest parameters instead of arguments - http://eslint.org/docs/rules/prefer-rest-params
    'prefer-spread': 'error', // require spread operators instead of .apply() - http://eslint.org/docs/rules/prefer-spread
    'prefer-template': 'error', // require template literals instead of string concatenation - http://eslint.org/docs/rules/prefer-template
    'require-yield': 'error', // require generator functions to contain yield - http://eslint.org/docs/rules/require-yield
    'rest-spread-spacing': 'error', // enforce spacing between rest and spread operators and their expressions - http://eslint.org/docs/rules/rest-spread-spacing
    'sort-imports': 'off', // enforce sorted import declarations within modules - http://eslint.org/docs/rules/sort-imports
    'template-curly-spacing': 'error', // require or disallow spacing around embedded expressions of template strings - http://eslint.org/docs/rules/template-curly-spacing
    'yield-star-spacing': 'error', // require or disallow spacing around the * in yield* expressions - http://eslint.org/docs/rules/yield-star-spacing
  },
}
