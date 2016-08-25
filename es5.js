'use strict'

module.exports = {
  rules: {
    /**
     * Possible Errors
     * These rules relate to possible syntax or logic errors in JavaScript code:
     */

    'no-cond-assign': [
      'error',
      'except-parens',
    ], // disallow assignment operators in conditional expressions - http://eslint.org/docs/rules/no-cond-assign
    'no-console': 'warn', // disallow the use of console - http://eslint.org/docs/rules/no-console
    'no-constant-condition': 'error', // disallow constant expressions in conditions - http://eslint.org/docs/rules/no-constant-condition
    'no-control-regex': 'error', // disallow control characters in regular expressions - http://eslint.org/docs/rules/no-control-regex
    'no-debugger': 'error', // disallow the use of debugger - http://eslint.org/docs/rules/no-debugger
    'no-dupe-args': 'error', // disallow duplicate arguments in function definitions - http://eslint.org/docs/rules/no-dupe-args
    'no-dupe-keys': 'error', // disallow duplicate keys in object literals - http://eslint.org/docs/rules/no-dupe-keys
    'no-duplicate-case': 'error', // disallow duplicate case labels - http://eslint.org/docs/rules/no-duplicate-case
    'no-empty-character-class': 'error', // disallow empty character classes in regular expressions - http://eslint.org/docs/rules/no-empty-character-class
    'no-empty': 'error', // disallow empty block statements - http://eslint.org/docs/rules/no-empty
    'no-ex-assign': 'error', // disallow reassigning exceptions in catch clauses - http://eslint.org/docs/rules/no-ex-assign
    'no-extra-boolean-cast': 'error', // disallow unnecessary boolean casts - http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-parens': 'off', // disallow unnecessary parentheses - http://eslint.org/docs/rules/no-extra-parens
    'no-extra-semi': 'error', // disallow unnecessary semicolons - http://eslint.org/docs/rules/no-extra-semi
    'no-func-assign': 'error', // disallow reassigning function declarations - http://eslint.org/docs/rules/no-func-assign
    'no-inner-declarations': 'error', // disallow function or var declarations in nested blocks - http://eslint.org/docs/rules/no-inner-declarations
    'no-invalid-regexp': 'error', // disallow invalid regular expression strings in RegExp constructors - http://eslint.org/docs/rules/no-invalid-regexp
    'no-irregular-whitespace': 'error', // disallow irregular whitespace outside of strings and comments - http://eslint.org/docs/rules/no-irregular-whitespace
    'no-obj-calls': 'error', // disallow calling global object properties as functions - http://eslint.org/docs/rules/no-obj-calls
    'no-prototype-builtins': 'error', // disallow calling some Object.prototype methods directly on objects - http://eslint.org/docs/rules/no-prototype-builtins
    'no-regex-spaces': 'error', // disallow multiple spaces in regular expressions - http://eslint.org/docs/rules/no-regex-spaces
    'no-sparse-arrays': 'error', // disallow sparse arrays - http://eslint.org/docs/rules/no-sparse-arrays
    'no-template-curly-in-string': 'error', // Disallow template literal placeholder syntax in regular strings - http://eslint.org/docs/rules/no-template-curly-in-string
    'no-unexpected-multiline': 'error', // disallow confusing multiline expressions - http://eslint.org/docs/rules/no-unexpected-multiline
    'no-unreachable': 'error', // disallow unreachable code after return, throw, continue, and break statements - http://eslint.org/docs/rules/no-unreachable
    'no-unsafe-finally': 'error', // disallow control flow statements in finally blocks - http://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-negation': 'error', // disallow negating the left operand of relational operators - http://eslint.org/docs/rules/no-unsafe-negation
    'use-isnan': 'error', // require calls to isNaN() when checking for NaN - http://eslint.org/docs/rules/use-isnan
    'valid-jsdoc': [
      'warn',
      {
        prefer: {
          returns: 'returns',
        },
        requireReturn: true,
        requireParamDescription: true,
        requireReturnDescription: true,
        requireReturnType: true,
      },
    ], // enforce valid JSDoc comments - http://eslint.org/docs/rules/valid-jsdoc
    'valid-typeof': 'error', // enforce comparing typeof expressions against valid strings - http://eslint.org/docs/rules/valid-typeof

    /**
     * Best Practices
     * These rules relate to better ways of doing things to help you avoid
     * problems:
     */

    'accessor-pairs': 'error', // enforce getter and setter pairs in objects - http://eslint.org/docs/rules/accessor-pairs
    'array-callback-return': 'error', // enforce return statements in callbacks of array methods - http://eslint.org/docs/rules/array-callback-return
    'block-scoped-var': 'error', // enforce the use of variables within the scope they are defined - http://eslint.org/docs/rules/block-scoped-var
    'complexity': [
      'error',
      11,
    ], // enforce a maximum cyclomatic complexity allowed in a program - http://eslint.org/docs/rules/complexity
    'consistent-return': 'error', // require return statements to either always or never specify values - http://eslint.org/docs/rules/consistent-return
    'curly': [
      'error',
      'multi-line',
    ], // enforce consistent brace style for all control statements - http://eslint.org/docs/rules/curly
    'default-case': 'error', // require default cases in switch statements - http://eslint.org/docs/rules/default-case
    'dot-location': [
      'error',
      'property',
    ], // enforce consistent newlines before and after dots - http://eslint.org/docs/rules/dot-location
    'dot-notation': 'error', // enforce dot notation whenever possible - http://eslint.org/docs/rules/dot-notation
    'eqeqeq': [
      'error',
      'allow-null',
    ], // require the use of === and !== - http://eslint.org/docs/rules/eqeqeq
    'guard-for-in': 'error', // require for-in loops to include an if statement - http://eslint.org/docs/rules/guard-for-in
    'no-alert': 'error', // disallow the use of alert, confirm, and prompt - http://eslint.org/docs/rules/no-alert
    'no-caller': 'error', // disallow the use of arguments.caller or arguments.callee - http://eslint.org/docs/rules/no-caller
    'no-case-declarations': 'error', // disallow lexical declarations in case clauses - http://eslint.org/docs/rules/no-case-declarations
    'no-div-regex': 'error', // disallow division operators explicitly at the beginning of regular expressions - http://eslint.org/docs/rules/no-div-regex
    'no-else-return': 'error', // disallow else blocks after return statements in if statements - http://eslint.org/docs/rules/no-else-return
    'no-empty-function': 'error', // disallow empty functions - http://eslint.org/docs/rules/no-empty-function
    'no-empty-pattern': 'error', // disallow empty destructuring patterns - http://eslint.org/docs/rules/no-empty-pattern
    'no-eq-null': 'off', // disallow null comparisons without type-checking operators - http://eslint.org/docs/rules/no-eq-null
    'no-eval': 'error', // disallow the use of eval() - http://eslint.org/docs/rules/no-eval
    'no-extend-native': 'error', // disallow extending native types - http://eslint.org/docs/rules/no-extend-native
    'no-extra-bind': 'error', // disallow unnecessary calls to .bind() - http://eslint.org/docs/rules/no-extra-bind
    'no-extra-label': 'error', // disallow unnecessary labels - http://eslint.org/docs/rules/no-extra-label
    'no-fallthrough': 'off', // disallow fallthrough of case statements - http://eslint.org/docs/rules/no-fallthrough
    'no-floating-decimal': 'error', // disallow leading or trailing decimal points in numeric literals - http://eslint.org/docs/rules/no-floating-decimal
    'no-global-assign': 'error', // disallow assignments to native objects or read-only global variables - http://eslint.org/docs/rules/no-global-assign
    'no-implicit-coercion': 'error', // disallow shorthand type conversions - http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-globals': 'error', // disallow var and named function declarations in the global scope - http://eslint.org/docs/rules/no-implicit-globals
    'no-implied-eval': 'error', // disallow the use of eval()-like methods - http://eslint.org/docs/rules/no-implied-eval
    'no-invalid-this': 'error', // disallow this keywords outside of classes or class-like objects - http://eslint.org/docs/rules/no-invalid-this
    'no-iterator': 'error', // disallow the use of the __iterator__ property - http://eslint.org/docs/rules/no-iterator
    'no-labels': 'error', // disallow labeled statements - http://eslint.org/docs/rules/no-labels
    'no-lone-blocks': 'error', // disallow unnecessary nested blocks - http://eslint.org/docs/rules/no-lone-blocks
    'no-loop-func': 'error', // disallow function declarations and expressions inside loop statements - http://eslint.org/docs/rules/no-loop-func
    'no-magic-numbers': 'off', // disallow magic numbers - http://eslint.org/docs/rules/no-magic-numbers
    'no-multi-spaces': 'error', // disallow multiple spaces - http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-str': 'error', // disallow multiline strings - http://eslint.org/docs/rules/no-multi-str
    'no-new-func': 'error', // disallow new operators with the Function object - http://eslint.org/docs/rules/no-new-func
    'no-new-wrappers': 'error', // disallow new operators with the String, Number, and Boolean objects - http://eslint.org/docs/rules/no-new-wrappers
    'no-new': 'error', // disallow new operators outside of assignments or comparisons - http://eslint.org/docs/rules/no-new
    'no-octal-escape': 'error', // disallow octal escape sequences in string literals - http://eslint.org/docs/rules/no-octal-escape
    'no-octal': 'error', // disallow octal literals - http://eslint.org/docs/rules/no-octal
    'no-param-reassign': 'off', // disallow reassigning function parameters - http://eslint.org/docs/rules/no-param-reassign
    'no-proto': 'error', // disallow the use of the __proto__ property - http://eslint.org/docs/rules/no-proto
    'no-redeclare': 'error', // disallow var redeclaration - http://eslint.org/docs/rules/no-redeclare
    'no-return-assign': [
      'error',
      'except-parens',
    ], // disallow assignment operators in return statements - http://eslint.org/docs/rules/no-return-assign
    'no-script-url': 'error', // disallow javascript: urls - http://eslint.org/docs/rules/no-script-url
    'no-self-assign': 'error', // disallow assignments where both sides are exactly the same - http://eslint.org/docs/rules/no-self-assign
    'no-self-compare': 'error', // disallow comparisons where both sides are exactly the same - http://eslint.org/docs/rules/no-self-compare
    'no-sequences': 'error', // disallow comma operators - http://eslint.org/docs/rules/no-sequences
    'no-throw-literal': 'error', // disallow throwing literals as exceptions - http://eslint.org/docs/rules/no-throw-literal
    'no-unmodified-loop-condition': 'error', // disallow unmodified loop conditions - http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unused-expressions': 'error', // disallow unused expressions - http://eslint.org/docs/rules/no-unused-expressions
    'no-unused-labels': 'error', // disallow unused labels - http://eslint.org/docs/rules/no-unused-labels
    'no-useless-call': 'error', // disallow unnecessary calls to .call() and .apply() - http://eslint.org/docs/rules/no-useless-call
    'no-useless-concat': 'error', // disallow unnecessary concatenation of literals or template literals - http://eslint.org/docs/rules/no-useless-concat
    'no-useless-escape': 'error', // disallow unnecessary escape characters - http://eslint.org/docs/rules/no-useless-escape
    'no-void': 'error', // disallow void operators - http://eslint.org/docs/rules/no-void
    'no-warning-comments': 'warn', // disallow specified warning terms in comments - http://eslint.org/docs/rules/no-warning-comments
    'no-with': 'error', // disallow with statements - http://eslint.org/docs/rules/no-with
    'radix': 'error', // enforce the consistent use of the radix argument when using parseInt() - http://eslint.org/docs/rules/radix
    'vars-on-top': 'error', // require var declarations be placed at the top of their containing scope - http://eslint.org/docs/rules/vars-on-top
    'wrap-iife': [
      'error',
      'inside',
    ], // require parentheses around immediate function invocations - http://eslint.org/docs/rules/wrap-iife
    'yoda': 'warn', // require or disallow “Yoda” conditions - http://eslint.org/docs/rules/yoda

    /**
     * Strict Mode
     * These rules relate to strict mode directives:
     */

    'strict': [
      'error',
      'safe',
    ], // require or disallow strict mode directives - http://eslint.org/docs/rules/strict

    /**
     * Variables
     * These rules relate to variable declarations:
     */

    'init-declarations': 'off', // require or disallow initialization in var declarations - http://eslint.org/docs/rules/init-declarations
    'no-catch-shadow': 'error', // disallow catch clause parameters from shadowing variables in the outer scope - http://eslint.org/docs/rules/no-catch-shadow
    'no-delete-var': 'error', // disallow deleting variables - http://eslint.org/docs/rules/no-delete-var
    'no-label-var': 'error', // disallow labels that share a name with a variable - http://eslint.org/docs/rules/no-label-var
    'no-restricted-globals': 'error', // disallow specified global variables - http://eslint.org/docs/rules/no-restricted-globals
    'no-shadow-restricted-names': 'error', // disallow identifiers from shadowing restricted names - http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow': 'error', // disallow var declarations from shadowing variables in the outer scope - http://eslint.org/docs/rules/no-shadow
    'no-undef-init': 'off', // disallow initializing variables to undefined - http://eslint.org/docs/rules/no-undef-init
    'no-undef': 'error', // disallow the use of undeclared variables unless mentioned in /*global */ comments - http://eslint.org/docs/rules/no-undef
    'no-undefined': 'error', // disallow the use of undefined as an identifier - http://eslint.org/docs/rules/no-undefined
    'no-unused-vars': 'error', // disallow unused variables - http://eslint.org/docs/rules/no-unused-vars
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ], // disallow the use of variables before they are defined - http://eslint.org/docs/rules/no-use-before-define

    /**
     * Node.js and CommonJS
     * These rules relate to code running in Node.js, or in browsers with
     * CommonJS:
     */

    'callback-return': 'error', // require return statements after callbacks - http://eslint.org/docs/rules/callback-return
    'global-require': 'error', // require require() calls to be placed at top-level module scope - http://eslint.org/docs/rules/global-require
    'handle-callback-err': 'error', // require error handling in callbacks - http://eslint.org/docs/rules/handle-callback-err
    'no-mixed-requires': 'error', // disallow require calls to be mixed with regular var declarations - http://eslint.org/docs/rules/no-mixed-requires
    'no-new-require': 'error', // disallow new operators with calls to require - http://eslint.org/docs/rules/no-new-require
    'no-path-concat': 'error', // disallow string concatenation with __dirname and __filename - http://eslint.org/docs/rules/no-path-concat
    'no-process-env': 'off', // disallow the use of process.env - http://eslint.org/docs/rules/no-process-env
    'no-process-exit': 'error', // disallow the use of process.exit() - http://eslint.org/docs/rules/no-process-exit
    'no-restricted-modules': 'off', // disallow specified modules when loaded by require - http://eslint.org/docs/rules/no-restricted-modules
    'no-sync': 'error', // disallow synchronous methods - http://eslint.org/docs/rules/no-sync

    /**
     * Stylistic Issues
     * These rules relate to style guidelines, and are therefore quite
     * subjective:
     */

    'array-bracket-spacing': [
      'error',
      'always',
      {
        singleValue: true,
        arraysInArrays: false,
        objectsInArrays: false,
      },
    ], // enforce consistent spacing inside array brackets - http://eslint.org/docs/rules/array-bracket-spacing
    'block-spacing': 'error', // enforce consistent spacing inside single-line blocks - http://eslint.org/docs/rules/block-spacing
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ], // enforce consistent brace style for blocks - http://eslint.org/docs/rules/brace-style
    'camelcase': 'error', // enforce camelcase naming convention - http://eslint.org/docs/rules/camelcase
    'comma-dangle': [
      'error',
      'always-multiline',
    ], // require or disallow trailing commas - http://eslint.org/docs/rules/comma-dangle
    'comma-spacing': 'error', // enforce consistent spacing before and after commas - http://eslint.org/docs/rules/comma-spacing
    'comma-style': 'off', // enforce consistent comma style - http://eslint.org/docs/rules/comma-style
    'computed-property-spacing': 'error', // enforce consistent spacing inside computed property brackets - http://eslint.org/docs/rules/computed-property-spacing
    'consistent-this': [
      'error',
      'that',
      'self',
    ], // enforce consistent naming when capturing the current execution context - http://eslint.org/docs/rules/consistent-this
    'eol-last': 'error', // enforce at least one newline at the end of files - http://eslint.org/docs/rules/eol-last
    'func-call-spacing': [
      'error',
      'never',
    ], // require or disallow spacing between function identifiers and their invocations - http://eslint.org/docs/rules/func-call-spacing
    'func-names': 'off', // require or disallow named function expressions - http://eslint.org/docs/rules/func-names
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ], // enforce the consistent use of either function declarations or expressions - http://eslint.org/docs/rules/func-style
    'id-blacklist': 'off', // disallow specified identifiers - http://eslint.org/docs/rules/id-blacklist
    'id-length': 'off', // enforce minimum and maximum identifier lengths - http://eslint.org/docs/rules/id-length
    'id-match': 'off', // require identifiers to match a specified regular expression - http://eslint.org/docs/rules/id-match
    'indent': [
      'error',
      2,
    ], // enforce consistent indentation - http://eslint.org/docs/rules/indent
    'jsx-quotes': [
      'error',
      'prefer-double',
    ], // enforce the consistent use of either double or single quotes in JSX attributes - http://eslint.org/docs/rules/jsx-quotes
    'key-spacing': 'error', // enforce consistent spacing between keys and values in object literal properties - http://eslint.org/docs/rules/key-spacing
    'keyword-spacing': 'error', // enforce consistent spacing before and after keywords - http://eslint.org/docs/rules/keyword-spacing
    'linebreak-style': 'error', // enforce consistent linebreak style - http://eslint.org/docs/rules/linebreak-style
    'lines-around-comment': 'off', // require empty lines around comments - http://eslint.org/docs/rules/lines-around-comment
    'max-depth': [
      'error',
      4,
    ], // enforce a maximum depth that blocks can be nested - http://eslint.org/docs/rules/max-depth
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreTrailingComments: true,
      },
    ], // enforce a maximum line length - http://eslint.org/docs/rules/max-len
    'max-lines': 'off', // enforce a maximum number of lines per file - http://eslint.org/docs/rules/max-lines
    'max-nested-callbacks': [
      'error',
      4,
    ], // enforce a maximum depth that callbacks can be nested - http://eslint.org/docs/rules/max-nested-callbacks
    'max-params': [
      'error',
      4,
    ], // enforce a maximum number of parameters in function definitions - http://eslint.org/docs/rules/max-params
    'max-statements-per-line': [
      'error',
      {
        max: 3,
      },
    ], // enforce a maximum number of statements allowed per line - http://eslint.org/docs/rules/max-statements-per-line
    'max-statements': [
      'error',
      11,
    ], // enforce a maximum number of statements allowed in function blocks - http://eslint.org/docs/rules/max-statements
    'multiline-ternary': 'off', // enforce newlines between operands of ternary expressions - http://eslint.org/docs/rules/multiline-ternary
    'new-cap': 'error', // require constructor function names to begin with a capital letter - http://eslint.org/docs/rules/new-cap
    'new-parens': 'error', // require parentheses when invoking a constructor with no arguments - http://eslint.org/docs/rules/new-parens
    'newline-after-var': 'off', // require or disallow an empty line after var declarations - http://eslint.org/docs/rules/newline-after-var
    'newline-before-return': 'off', // require an empty line before return statements - http://eslint.org/docs/rules/newline-before-return
    'newline-per-chained-call': 'error', // require a newline after each call in a method chain - http://eslint.org/docs/rules/newline-per-chained-call
    'no-array-constructor': 'error', // disallow Array constructors - http://eslint.org/docs/rules/no-array-constructor
    'no-bitwise': 'error', // disallow bitwise operators - http://eslint.org/docs/rules/no-bitwise
    'no-continue': 'error', // disallow continue statements - http://eslint.org/docs/rules/no-continue
    'no-inline-comments': 'off', // disallow inline comments after code - http://eslint.org/docs/rules/no-inline-comments
    'no-lonely-if': 'error', // disallow if statements as the only statement in else blocks - http://eslint.org/docs/rules/no-lonely-if
    'no-mixed-operators': 'error', // disallow mixed binary operators - http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-spaces-and-tabs': 'error', // disallow mixed spaces and tabs for indentation - http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      },
    ], // disallow multiple empty lines - http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-negated-condition': 'warn', // disallow negated conditions - http://eslint.org/docs/rules/no-negated-condition
    'no-nested-ternary': 'error', // disallow nested ternary expressions - http://eslint.org/docs/rules/no-nested-ternary
    'no-new-object': 'error', // disallow Object constructors - http://eslint.org/docs/rules/no-new-object
    'no-plusplus': 'off', // disallow the unary operators ++ and -- - http://eslint.org/docs/rules/no-plusplus
    'no-restricted-syntax': [
      'error',
      'WithStatement',
    ], // disallow specified syntax - http://eslint.org/docs/rules/no-restricted-syntax
    'no-tabs': 'error', // Disallow tabs in file - http://eslint.org/docs/rules/no-tabs
    'no-ternary': 'off', // disallow ternary operators - http://eslint.org/docs/rules/no-ternary
    'no-trailing-spaces': 'error', // disallow trailing whitespace at the end of lines - http://eslint.org/docs/rules/no-trailing-spaces
    'no-underscore-dangle': 'error', // disallow dangling underscores in identifiers - http://eslint.org/docs/rules/no-underscore-dangle
    'no-unneeded-ternary': 'error', // disallow ternary operators when simpler alternatives exist - http://eslint.org/docs/rules/no-unneeded-ternary
    'no-whitespace-before-property': 'error', // disallow whitespace before properties - http://eslint.org/docs/rules/no-whitespace-before-property
    'object-curly-newline': 'off', // enforce consistent line breaks inside braces - http://eslint.org/docs/rules/object-curly-newline
    'object-curly-spacing': [
      'error',
      'always',
      {
        objectsInObjects: false,
        arraysInObjects: false,
      },
    ], // enforce consistent spacing inside braces - http://eslint.org/docs/rules/object-curly-spacing
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: false,
      },
    ], // enforce placing object properties on separate lines - http://eslint.org/docs/rules/object-property-newline
    'one-var-declaration-per-line': [
      'error',
      'initializations',
    ], // require or disallow newlines around var declarations - http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var': [
      'error',
      {
        uninitialized: 'always',
        initialized: 'never',
      },
    ], // enforce variables to be declared either together or separately in functions - http://eslint.org/docs/rules/one-var
    'operator-assignment': [
      'error',
      'always',
    ], // require or disallow assignment operator shorthand where possible - http://eslint.org/docs/rules/operator-assignment
    'operator-linebreak': [
      'error',
      'before',
    ], // enforce consistent linebreak style for operators - http://eslint.org/docs/rules/operator-linebreak
    'padded-blocks': 'off', // require or disallow padding within blocks - http://eslint.org/docs/rules/padded-blocks
    'quote-props': [
      'error',
      'consistent-as-needed',
    ], // require quotes around object literal property names - http://eslint.org/docs/rules/quote-props
    'quotes': [
      'error',
      'single',
    ], // enforce the consistent use of either backticks, double, or single quotes - http://eslint.org/docs/rules/quotes
    'require-jsdoc': 'off', // require JSDoc comments - http://eslint.org/docs/rules/require-jsdoc
    'semi-spacing': 'error', // enforce consistent spacing before and after semicolons - http://eslint.org/docs/rules/semi-spacing
    'semi': [
      'error',
      'never',
    ], // require or disallow semicolons instead of ASI - http://eslint.org/docs/rules/semi
    'sort-keys': 'off', // requires object keys to be sorted - http://eslint.org/docs/rules/sort-keys
    'sort-vars': 'off', // require variables within the same declaration block to be sorted - http://eslint.org/docs/rules/sort-vars
    'space-before-blocks': 'off', // enforce consistent spacing before blocks - http://eslint.org/docs/rules/space-before-blocks
    'space-before-function-paren': [
      'error',
      'never',
    ], // enforce consistent spacing before function definition opening parenthesis - http://eslint.org/docs/rules/space-before-function-paren
    'space-in-parens': [
      'error',
      'never',
    ], // enforce consistent spacing inside parentheses - http://eslint.org/docs/rules/space-in-parens
    'space-infix-ops': 'error', // require spacing around operators - http://eslint.org/docs/rules/space-infix-ops
    'space-unary-ops': 'error', // enforce consistent spacing before or after unary operators - http://eslint.org/docs/rules/space-unary-ops
    'spaced-comment': [
      'error',
      'always',
    ], // enforce consistent spacing after the // or /* in a comment - http://eslint.org/docs/rules/spaced-comment
    'unicode-bom': 'error', // require or disallow Unicode byte order mark (BOM) - http://eslint.org/docs/rules/unicode-bom
    'wrap-regex': 'error', // require parenthesis around regex literals - http://eslint.org/docs/rules/wrap-regex
  },
}
