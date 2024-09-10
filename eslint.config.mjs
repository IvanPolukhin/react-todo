import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
    plugins: ['prettier'],
    extends: [
      pluginJs.configs.recommended,
      pluginReact.configs.flat.recommended,
      'prettier',
    ],
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 80,
        },
      ],
    },
  },
  configPrettier,
];
