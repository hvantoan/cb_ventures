/** @type { import('@types/eslint').Linter.Config } */
module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true
    },
    project: ['./apps/*/tsconfig.json', './libs/*/tsconfig.json']
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:@next/next/recommended',
    'prettier'
  ],
  plugins: ['prettier', '@typescript-eslint', '@tanstack/query'],
  rules: {
    '@typescript-eslint/no-throw-literal': 0,
    'linebreak-style': ['warn', 'windows'],
    'prettier/prettier': 1,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-restricted-exports': 0,
    'react/function-component-definition': 0,
    'import/no-named-as-default': 0,
    'no-param-reassign': 0,
    'react/require-default-props': 0,
    'react/prop-types': 0,
    'arrow-body-style': 0,
    'react/destructuring-assignment': 0,
    'prefer-destructuring': 0,
    'consistent-return': 0,
    'react/jsx-pascal-case': [1, { ignore: ['MRT_*'] }],
    '@typescript-eslint/lines-between-class-members': 0,
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'max-lines': ['warn', { max: 300, skipBlankLines: true, skipComments: true }],
    'no-underscore-dangle': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react/no-array-index-key': 0,
    'react/no-unknown-property': 0,
    // TODO: remove this rule
    'react/no-unstable-nested-components': 0
  },
  root: true,
  env: {
    browser: true,
    node: true
  }
};
