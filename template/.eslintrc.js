module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['simple-import-sort', 'import'],
  rules: {
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'no-shadow': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // Packages `react` related packages come first.
            '^react$',
            '^react-native',
            '^react',
            '^@?\\w',
            // Internal packages.
            '^(@|components)(/.*|$)',
            // Side effect imports.
            '^\\u0000',
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            // Style imports.
            '^.+\\.?(css)$',
          ],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'react-native/no-unused-styles': 'error',
    'max-len': ['warn', 120, { ignoreStrings: true }],
    'import/newline-after-import': ['error', { count: 1 }],
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    eqeqeq: ['error'],
  },
};
