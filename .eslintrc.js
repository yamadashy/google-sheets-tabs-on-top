'use strict';

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    webextensions: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'airbnb-base'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  rules: {
    'spaced-comment': ['error', 'always'],
    'semi': 'off',
    'quotes': [2, 'single', { allowTemplateLiterals: true }],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'strict': ['warn', 'global'],
    'keyword-spacing': ['warn', { after: true }],
    'space-before-blocks': ['warn'],
    'object-curly-spacing': ['error', 'always', { arraysInObjects: false }],
    'space-before-function-paren': ['error', 'never'],
    'camelcase': ['warn'],
    'no-tabs': ['warn'],
    'arrow-body-style': ['error', 'always'],
    'consistent-return': ['warn'],
    'eqeqeq': ['error'],
    'newline-per-chained-call': ['warn'],
    'no-unused-expressions': ['warn'],
    'space-infix-ops': ['warn'],

    // tslint
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',

    // off once
    'no-restricted-globals': 'off',
    'default-case': 'off',
    'prefer-arrow-callback': 'off',
    'require-jsdoc': 'off',
    'radix': 'off', // parseIntに進数を渡す
    'space-in-parens': 'off',
    'no-underscore-dangle': 'off',
    'valid-jsdoc': 'off',
    'no-mixed-operators': 'off',
    'dot-notation': 'off',
    'no-shadow': 'off',

    // off always
    'new-cap': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'arrow-return-shorthand': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'max-len': 'off',
    'padded-blocks': 'off',
    'no-invalid-this': 'off',
    'guard-for-in': 'off',
    'prefer-template': 'off',
    'max-classes-per-file': 'off',
    'func-names': 'off',
    'quote-props': 'off',
    'no-multiple-empty-lines': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'no-restricted-properties': 'off',
    'no-plusplus': 'off',
    'no-multi-assign': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-new': 'off',
    'prefer-destructuring': 'off',
    'operator-linebreak': 'off',
    'no-await-in-loop': 'off',
    'no-alert': 'off',
    'no-continue': 'off',
    'operator-assignment': 'off',
    'no-floating-decimal': 'off',
    'no-useless-concat': 'off',
    'object-curly-newline': 'off',
    'no-useless-constructor': 'off',
    'lines-between-class-members': 'off',
  },
}
