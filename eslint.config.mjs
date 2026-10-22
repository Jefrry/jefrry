import vue from 'eslint-plugin-vue';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules/**', '.nuxt/**', '.output/**', 'dist/**', 'portfolio-v2-stars/**'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: { parser: tsParser },
  },
  ...vue.configs['flat/base'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: { parser: tsParser },
    },
    rules: {
      'vue/padding-line-between-tags': ['error', [
        { blankLine: 'always', prev: '*', next: '*' },
      ]],
    },
  },
];
