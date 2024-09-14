// @ts-check
import process from 'node:process'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import del from 'rollup-plugin-delete'
import { copyFiles } from './scripts/copyFiles.mjs'

const type = process.env.NODE_ENV?.split(':')?.[1]

const isWx = type === 'wx'
/**
 *  @type {import('rollup').InputOptions['plugins']}
 */
const devPlugins = [
  del({
    targets: ['packages/core/dist/*', 'packages/core/temp/*'],
    force: true,
    hook: 'buildStart',
  }),
  typescript({
    tsconfig: 'packages/core/tsconfig.json',
  }),
  nodeResolve(),
  commonjs(),
]
/**
 *  @type {import('rollup').InputOptions['plugins']}
 */
const webPlugins = [
  ...devPlugins,
]

/**
 *  @type {import('rollup').InputOptions['plugins']}
 */
const wxPlugins = [
  devPlugins,
  {
    name: 'copy-files-to-wx',
    writeBundle: async () => {
      await copyFiles('./packages/core/dist', './packages/wx-miniprogram/utils/canvas', false)
      console.log('copy success')
    },
  },
]

export default defineConfig({
  input: 'packages/core/src/index.ts',
  output: [
    {
      format: 'commonjs',
      dir: 'packages/core/dist',
      entryFileNames: '[name].cjs.js',
      sourcemap: true,
    },
    {
      format: 'es',
      dir: 'packages/core/dist',
      entryFileNames: '[name].esm.js',
      sourcemap: true,
    },
  ],
  plugins: isWx ? wxPlugins : webPlugins,
})
