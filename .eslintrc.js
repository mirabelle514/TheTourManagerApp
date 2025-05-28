module.exports = {
  extends: [
    'react-native',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'react-native'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': 'warn',
    'react-native/no-unused-variables': 'warn',
    'react-native/no-unused-functions': 'warn',
    'react-native/no-unused-props': 'warn',
    'react-native/no-unused-variables': 'warn',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-unused-variables': 'warn',
    'react-native/no-unused-props': 'warn',
    'react-native/no-unused-variables': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
