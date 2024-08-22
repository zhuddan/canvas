// @ts-check
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import del from 'rollup-plugin-delete'
import { dts } from 'rollup-plugin-dts'
import { createInput } from './rollup.config.build.mjs'
import { copyFiles } from './scripts/copyFiles.mjs'

export default defineConfig([
  {
    input: createInput('src', '.ts'),
    output: {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].mjs',
    },
    plugins: [
      del({
        targets: ['dist/*', 'temp/*'],
        force: true,
        hook: 'buildStart',
      }),
      typescript(),
      nodeResolve(),
      commonjs(),
      !Date.now() ? livereload() : null,
      !Date.now()
        ? serve({
          port: 13000,
          contentBase: '.',
          openPage: '/example/index.html',
          open: true,
        })
        : null,
    ],
  },
  {
    input: './src/index.ts',
    output: {
      file: 'dist/canvas.js',
      format: 'esm',
    },
    plugins: [
      typescript({
        declaration: false,
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
  {
    input: './src/index.ts',
    output: {
      file: 'dist/canvas.d.ts',
    },
    plugins: [
      typescript({
        declaration: false,
      }),
      nodeResolve(),
      commonjs(),
      dts({
        respectExternal: true,
      }),
      {
        name: '',
        buildEnd: () => {
          setTimeout(async () => {
            await copyFiles([
              './dist/canvas.d.ts',
              './dist/canvas.js',
            ], '../request/example/wx-example/miniprogram/utils')
          }, 1000)
        },
      },
    ],
  },
])
