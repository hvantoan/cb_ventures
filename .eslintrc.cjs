/** @type {import("eslint").Linter.Config} */
const config = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
    },
    // @ts-ignore
    plugins: ['@typescript-eslint'],
    extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
    ],
    rules: {
        '@typescript-eslint/array-type': 'off',
        // Remove to fix
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/prefer-optional-chain': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        'react/display-name': ['off', { ignoreTranspilerName: false, checkContextObjects: false }],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/consistent-type-imports': 'off',
        'prefer-promise-reject-errors': 'off',
        '@typescript-eslint/prefer-promise-reject-errors': 'error',
        // End
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/dot-notation': 'off',
        'react-hooks/exhaustive-deps': 'off',

        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: {
                    attributes: false,
                },
            },
        ],
    },
};
module.exports = config;
