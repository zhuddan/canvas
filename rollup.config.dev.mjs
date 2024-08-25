// @ts-check
import process from 'node:process'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import del from 'rollup-plugin-delete'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import { copyFiles } from './scripts/copyFiles.mjs'

const type = process.env.NODE_ENV?.split(':')?.[1]

const isWx = type === 'wx'
/**
 *  @type {import('rollup').InputOptions['plugins']}
 */
const devPlugins = [
  del({
    targets: ['dist/*', 'temp/*'],
    force: true,
    hook: 'buildStart',
  }),
  typescript(),
  nodeResolve(),
  commonjs(),
]
/**
 *  @type {import('rollup').InputOptions['plugins']}
 */
const webPlugins = [
  ...devPlugins,
  livereload(),
  serve({
    port: 13000,
    contentBase: '.',
    openPage: '/example/index.html',
    open: true,
  }),
]

/**
 *  @type {import('rollup').InputOptions['plugins']}
 */
const wxPlugins = [
  devPlugins,
  {
    name: 'copy-files-to-wx',
    writeBundle: async () => {
      await copyFiles('./dist', '../wx-example/miniprogram/utils/canvas', false)
      console.log('copy success')
    },
  },
]

export default defineConfig({
  input: ['./src/index.ts', './src/canvas.ts'],
  output: {
    format: 'es',
    dir: 'dist',
    entryFileNames: '[name].js',
    sourcemap: true,
  },
  plugins: isWx ? wxPlugins : webPlugins,
})
