/* eslint-env node */
// require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    // '@vue/eslint-config-prettier'
  ],
  env: {
    'vue/setup-compiler-macros': true,
    'es6': true,
  },
  parserOptions: {
    // parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'radix': ['error', 'as-needed'],
    'no-var': 'error',
    // 'no-unused-vars': 'warn',
    'prefer-promise-reject-errors': 'off',
    'line-comment-position': [
      'error', {
        'position': 'above',
      },
    ],
  },
}
