module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      js: true,
      jsx: true,
      ts: true,
      tsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'jsx-a11y',
  ],
  rules: {
    'import/extensions': [
      'error',
      {
        tsx: 'never',
        ts: 'never',
      },
    ],
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.ts', '.tsx'] },
    ],
    'jsx-a11y/heading-has-content': [
      2,
      {
        components: ['MyHeading'],
      },
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type':
      'off',
    '@typescript-eslint/explicit-member-accessibility':
      'off',
  },
};
