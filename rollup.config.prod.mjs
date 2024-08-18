import process from 'node:process'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import { dts } from 'rollup-plugin-dts'
import terser from '@rollup/plugin-terser'
import { exec } from './scripts/exec.mjs'
import { createInput } from './input.mjs'

/**
 * @type {import('rollup').RollupOptions}
 */
const buildOptions = {
  input: createInput('temp'),
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
      runOnce: true,
      hook: 'buildEnd',
      ignore: ['dist/types/**'],
    }),
    typescript(),
    terser(),
  ],
  external: [],
}
/**
 * @type {import('rollup').RollupOptions}
 */
const buildDtsOptions = {
  input: createInput('d.ts'),
  output: [{
    dir: 'dist',
    format: 'es',
  }],
  plugins: [
    dts(),
    {
      buildStart: async () => {
        const { ok, stderr } = await exec('tsc', ['-p', 'tsconfig.build.json'])
        if (!ok) {
          console.error('TypeScript compilation failed:', stderr)
          process.exit(1)
        }
      },
    },
  ],
}

export default defineConfig([buildOptions, buildDtsOptions])
