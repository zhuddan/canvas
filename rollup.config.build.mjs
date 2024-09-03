// @ts-check
import process from 'node:process'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import terser from '@rollup/plugin-terser'
import { dts } from 'rollup-plugin-dts'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { exec } from './scripts/exec.mjs'

function main() {
  return defineConfig([
    {
      input: 'packages/core/src/index.ts',
      output: [
        {
          format: 'es',
          dir: 'packages/core/dist',
          entryFileNames: '[name].esm.js',
          sourcemap: true,
        },
        {
          format: 'commonjs',
          dir: 'packages/core/dist',
          entryFileNames: '[name].cjs.js',
          sourcemap: true,
        },
      ],
      plugins: [
        del({
          targets: ['packages/core/dist'],
          force: true,
          hook: 'buildStart',
        }),
        typescript({
          tsconfig: 'packages/core/tsconfig.json',
          declaration: false,
        }),
        nodeResolve(),
        commonjs(),
        terser(),
      ],
    },
    {
      input: 'packages/core/temp/index.d.ts',
      output: {
        file: 'packages/core/dist/index.d.ts',
        format: 'es',
      },
      plugins: [
        nodeResolve(),
        commonjs(),
        dts({
          respectExternal: true,
        }),
        {
          name: 'before',
          buildStart: async () => {
            const { ok, stderr } = await exec('tsc', ['-p', 'packages/core/tsconfig.build.json'])
            if (!ok) {
              console.error('TypeScript compilation failed:', stderr)
              process.exit(1)
            }
          },
        },
      ],
    },
  ])
}

export default main()
