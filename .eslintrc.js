module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'func-names': ['error', 'always', { generators: 'as-needed' }],
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': 'off',
    'generator-star-spacing': 0,
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 0,
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
      },
    ],
  },
};
