import vue from 'eslint-plugin-vue';

export default [
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser', // If using TypeScript
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: { vue },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
];
