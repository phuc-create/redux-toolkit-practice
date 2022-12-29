module.exports = {
  settings: {
    jest: {
      version: 26,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'jest',
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'template-curly-spacing': 'off',
    'no-template-curly-in-string': 'off',
    indent: 'off',
    camelcase: 'off',
    'no-return-assign': 'off',
    'one-var': 'off',
    'no-prototype-builtins': 'warn',
    'prefer-promise-reject-errors': 'off',
    'standard/object-curly-even-spacing': 'off',
    'arrow-body-style': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/self-closing-comp': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-pascal-case': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    // 'react-hooks/exhaustive-deps': 'off',
    'react/jsx-indent-props': [2, 2],
    'jest/no-conditional-expect': 'warn',
    'jest/expect-expect': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': 'warn',
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        'no-unused-vars': 'off',
        'no-global-assign': 'off',
      },
    },
  ],
}
