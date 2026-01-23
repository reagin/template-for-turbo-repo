import antfu from '@antfu/eslint-config';
import eslintPrettier from 'eslint-plugin-prettier';
import eslintPerfectionist from 'eslint-plugin-perfectionist';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintBetterTailwindcss from 'eslint-plugin-better-tailwindcss';

export default antfu(
  {
    react: true,
    typescript: true,
    formatters: true,
    stylistic: { indent: 2, quotes: 'single', semi: true },
    ignores: ['*.md', '*.json', '**/components/ui/*'],
  },
  {
    rules: {
      'yaml/sort-keys': 'off',
      'antfu/if-newline': 'off',
      'style/brace-style': ['error', '1tbs'],
      'style/jsx-quotes': ['error', 'prefer-single'],
      'style/jsx-first-prop-new-line': ['error', 'never'],
      'style/nonblock-statement-body-position': ['error', 'beside'],
      'style/jsx-max-props-per-line': ['error', { when: 'multiline', maximum: 1 }],
      'style/max-len': ['error', { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
    },
  },
  {
    plugins: {
      prettier: eslintPrettier, // website: https://github.com/prettier/eslint-plugin-prettier
      perfectionist: eslintPerfectionist, // website: https://perfectionist.dev
    },
    extends: [eslintBetterTailwindcss.configs.recommended, eslintConfigPrettier],
    rules: {
      'prettier/prettier': 'error',
      'better-tailwindcss/enforce-consistent-line-wrapping': ['error', { printWidth: 0, preferSingleLine: true }],
      'better-tailwindcss/enforce-consistent-important-position': ['error', { position: 'recommended' }],
      'perfectionist/sort-enums': ['error', { type: 'line-length', order: 'asc', locales: 'zh-CN', fallbackSort: { type: 'alphabetical', order: 'asc' } }],
      'perfectionist/sort-imports': ['error', { type: 'line-length', order: 'asc', locales: 'zh-CN', fallbackSort: { type: 'alphabetical', order: 'asc' } }],
      'perfectionist/sort-exports': ['error', { type: 'line-length', order: 'desc', locales: 'zh-CN', fallbackSort: { type: 'alphabetical', order: 'desc' } }],
      'perfectionist/sort-jsx-props': ['error', { type: 'line-length', order: 'asc', locales: 'zh-CN', fallbackSort: { type: 'alphabetical', order: 'asc' } }],
      'perfectionist/sort-interfaces': ['error', { type: 'line-length', order: 'asc', locales: 'zh-CN', fallbackSort: { type: 'alphabetical', order: 'asc' } }],
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'apps/frontend/src/styles/global.css',
      },
    },
  },
);
