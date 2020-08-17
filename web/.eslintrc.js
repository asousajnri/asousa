module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'extends',
    'prettier',
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
  ],
  processors: ['stylelint-processor-styled-components'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    allowMultiplePropertiesPerLine: true,
    allowAllPropertiesOnSameLine: false,
  },
};
