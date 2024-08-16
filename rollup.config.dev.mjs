import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { createInput } from './input.mjs'

/**
 * @type {import('rollup').RollupOptions}
 */
const devOptions = {
  input: createInput(),
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
  external: [
    'mitt',
  ],
  plugins: [
    del({
      targets: 'dist/*',
      force: true,
      hook: 'buildEnd',
      ignore: ['dist/types/**'],
    }),
    typescript(),
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
