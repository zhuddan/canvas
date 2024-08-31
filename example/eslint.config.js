import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    typescript: true,
    rules: {
      'no-console': 'off',
    },
  },
  {
    ignores: [
      'src/ignore.js',
    ],
  },
)
