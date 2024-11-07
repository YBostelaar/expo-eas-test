module.exports = {
  root: true,
  extends: ['eslint:recommended', '@react-native'],
  parser: '@typescript-eslint/parser',
  plugins: ['jest', '@typescript-eslint', 'filenames', 'prettier'],
  rules: {
    '@typescript-eslint/no-shadow': 'error',
    'arrow-body-style': 'error',
    'max-len': ['warn', { code: 140 }],
    'no-case-declarations': 'off',
    'no-nested-ternary': 'error',
    'no-shadow': 'off',
    'no-undef': 'off',
    'object-shorthand': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-boolean-value': 'error',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/self-closing-comp': 'error',
    'react-native/no-inline-styles': 'off',
    semi: 'off',
  },
  overrides: [
    {
      files: ['src/**', 'src/**/*'],
      rules: {
        /**
         * Camel case - with exception for files named 'index'.
         * Prepending the extension with '.test' or '.d' is also allowed.
         */
        'filenames/match-regex': ['error', '^(?:[a-z]+(?:[A-Za-z]+)*|index)(?:(?:.test)|(?:.d)){0,1}$'],
      },
    },
    {
      files: [
        'src/components/**',
        'src/components/**/*',
        'src/layout/**',
        'src/layout/**/*',
        'src/navigation/**',
        'src/navigation/**/*',
        'src/providers/**',
        'src/providers/**/*',
        'src/screens/**',
        'src/screens/**/*',
        'src/App.tsx',
        'src/AppStateListener.tsx',
        'src/NetInfoListener.tsx',
      ],
      rules: {
        // Pascal case with exception for files named 'index' or 'types'.
        // Prepending the extension with '.test' is also allowed.
        'filenames/match-regex': ['error', '^([A-Z](?:[A-Za-z]+)|index|types|utils)*(?:.test){0,1}$'],
      },
    },
    {
      // Any files which can't be forced to adhere to our file naming conventions
      files: ['jest.setup.ts', 'jest.mocks.ts'],
      rules: {
        'filenames/match-regex': 'off',
      },
    },
  ],
}
