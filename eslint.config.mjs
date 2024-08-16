import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  rules: {
    'no-console': 'off',
    'antfu/no-import-dist': 'off',
    'antfu/no-import-node-modules-by-path': 'off',
  },
  vue: true,
}, {
  ignores: [
    './dist/*',
  ],
})
