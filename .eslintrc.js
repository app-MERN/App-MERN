module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-body-style': [1, 'always'],
    'jsx-quotes': [2, 'prefer-single'],
    'jsx-a11y/label-has-associated-control': [0],
    'no-useless-return': [0],
  },
};
