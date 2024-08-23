import { parseArgs } from 'node:util'

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    wx: {
      type: 'boolean',
      short: 'f',
    },
    web: {
      type: 'boolean',
      short: 'd',
    },
  },
})

export { values, positionals }
