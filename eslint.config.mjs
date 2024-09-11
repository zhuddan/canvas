import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  rules: {
    'no-console': 'off',
    'antfu/no-import-dist': 'off',
    'antfu/no-import-node-modules-by-path': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'ts/no-require-imports': 'off',
  },
}, {
  ignores: [
    './dist/*',
  ],
})
