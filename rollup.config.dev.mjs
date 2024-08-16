import fs from 'node:fs'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
/**
 *
 * @param {'d.ts' | 'ts'} suffix
 */
function createInput(suffix = 'ts') {
  const files = fs.readdirSync('./src')
  /**
   * @type {{ [entryAlias: string]: string }}
   */
  const input = {}
  for (let index = 0; index < files.length; index++) {
    if (!/^(?!.*\.d\.ts$).+ts$/.test(files[index])) {
      continue
    }
    const file = files[index].replace('.ts', '')
    input[file] = `./${suffix === 'd.ts' ? 'temp' : 'src'}/${file}.${suffix}`
  }
  return input
}
/**
 * @type {import('rollup').RollupOptions}
 */
const devOptions = {
  input: createInput('ts'),
  output: [
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].mjs',
      sourcemap: true,
    },
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].js',
      sourcemap: true,
    },
  ],
  plugins: [
    del({
      targets: 'dist/*',
      force: true,
      hook: 'buildEnd',
      ignore: ['dist/types/**'],
    }),
    typescript({
      declaration: true,
    }),
    livereload(),
    serve({
      port: 13000,
      contentBase: '.',
      openPage: '/example/index.html',
      open: true,
    }),
  ],
}

export default defineConfig(devOptions)
