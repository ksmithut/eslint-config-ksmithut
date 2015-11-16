'use strict';

module.exports = {
  'extends': 'eslint-config-ksmithut',
  'env': {
    'es6': true,
  },
  'rules': {
    /**
     * ECMAScript 6
     * These rules are only relevant to ES6 environments.
     */
    'arrow-parens': 1, // require parens in arrow function arguments
    'arrow-spacing': 1, // require space before/after arrow function's arrow (fixable)
    'constructor-super': 1, // verify calls of super() in constructors
    'generator-star-spacing': 1, // enforce spacing around the * in generator functions (fixable)
    'no-class-assign': 2, // disallow modifying variables of class declarations
    'no-const-assign': 2, // disallow modifying variables that are declared using const
    'no-dupe-class-members': 2, // disallow duplicate name in class members
    'no-this-before-super': 2, // disallow use of this/super before calling super() in constructors.
    'no-var': 1, // require let or const instead of var
    'object-shorthand': 1, // require method and property shorthand syntax for object literals
    'prefer-arrow-callback': 1, // suggest using arrow functions as callbacks
    'prefer-const': 1, // suggest using const declaration for variables that are never modified after declared
    'prefer-spread': 1, // suggest using the spread operator instead of .apply().
    'prefer-reflect': 0, // suggest using Reflect methods where applicable
    'prefer-template': 1, // suggest using template literals instead of strings concatenation
    'require-yield': 0, // disallow generator functions that do not have yield
  }
};
