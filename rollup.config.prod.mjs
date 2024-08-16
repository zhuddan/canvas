import process from 'node:process'
import fs from 'node:fs'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import { dts } from 'rollup-plugin-dts'
import terser from '@rollup/plugin-terser'
import { exec } from './scripts/exec.mjs'

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
const buildOptions = {
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
