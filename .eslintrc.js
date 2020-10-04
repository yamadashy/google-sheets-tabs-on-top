'use strict';

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    webextensions: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  rules: {
    'prettier/prettier': ['warn'],

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
