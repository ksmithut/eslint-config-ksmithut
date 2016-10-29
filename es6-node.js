'use strict'

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    es6: true,
  },
  rules: {
    /**
     * ECMAScript 6
     * These rules are only relevant to ES6 environments.
     */

    'arrow-body-style': 'off', // require braces in arrow function body - http://eslint.org/docs/rules/arrow-body-style
    'arrow-parens': [
      'warn',
      'always',
    ], // require parens in arrow function arguments - http://eslint.org/docs/rules/arrow-parens
    'arrow-spacing': 'warn', // require space before/after arrow function’s arrow - http://eslint.org/docs/rules/arrow-spacing
    'constructor-super': 'error', // verify calls of super() in constructors - http://eslint.org/docs/rules/constructor-super
    'generator-star-spacing': [
      'error',
      'after',
    ], // enforce spacing around the * in generator functions - http://eslint.org/docs/rules/generator-star-spacing
    'no-class-assign': 'error', // disallow modifying variables of class declarations - http://eslint.org/docs/rules/no-class-assign
    'no-confusing-arrow': 'warn', // disallow arrow functions where they could be confused with comparisons - http://eslint.org/docs/rules/no-confusing-arrow
    'no-const-assign': 'error', // disallow modifying variables that are declared using const - http://eslint.org/docs/rules/no-const-assign
    'no-dupe-class-members': 'error', // disallow duplicate name in class members - http://eslint.org/docs/rules/no-dupe-class-members
    'no-new-symbol': 'error', // disallow use of the new operator with the Symbol object - http://eslint.org/docs/rules/no-new-symbol
    'no-this-before-super': 'error', // disallow use of this/super before calling super() in constructors - http://eslint.org/docs/rules/no-this-before-super
    'no-useless-constructor': 'warn', // disallow unnecessary constructor - http://eslint.org/docs/rules/no-useless-constructor
    'no-var': 'error', // require let or const instead of var - http://eslint.org/docs/rules/no-var
    'object-shorthand': 'warn', // require method and property shorthand syntax for object literals - http://eslint.org/docs/rules/object-shorthand
    'prefer-arrow-callback': 'warn', // suggest using arrow functions as callbacks - http://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-const': 'warn', // suggest using const declaration for variables that are never reassigned after declared - http://eslint.org/docs/rules/prefer-const
    'prefer-template': 'warn', // suggest using template literals instead of strings concatenation - http://eslint.org/docs/rules/prefer-template
    'require-yield': 'warn', // disallow generator functions that do not have yield - http://eslint.org/docs/rules/require-yield
    'template-curly-spacing': 'error', // enforce spacing around embedded expressions of template strings - http://eslint.org/docs/rules/template-curly-spacing
    'yield-star-spacing': 'error', // enforce spacing around the * in yield* expressions - http://eslint.org/docs/rules/yield-star-spacing
  },
}
