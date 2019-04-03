module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb','plugin:jest/recommended','plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'jest',
    'react',
  ],
  settings: {
    ["import/resolver"]: {
      node: {
        paths: ["node_modules", "src"]
      }
    }
  },
  rules: {
  },
};
