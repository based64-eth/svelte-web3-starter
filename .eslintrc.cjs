module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:tailwindcss/recommended", "prettier", "plugin:storybook/recommended"],
  plugins: ['svelte3', 'tailwind'],
  overrides: [{
    files: ['*.svelte'],
    processor: 'svelte3/svelte3'
  }],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  }
};