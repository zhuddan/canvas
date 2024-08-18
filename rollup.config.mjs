// @ts-check
import process from 'node:process'
import fs, { readFileSync } from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import terser from '@rollup/plugin-terser'
import { dts } from 'rollup-plugin-dts'
import { exec } from './scripts/exec.mjs'

const repo = JSON.parse(readFileSync('./package.json').toString())
const isProduction = process.env.NODE_ENV === 'production'

export function createInput(root = 'src') {
  const files = fs.readdirSync(root)
  /**
   * @type {{ [entryAlias: string]: string }}
   */
  let input = {}
  for (let index = 0; index < files.length; index++) {
    const maybeFile = files[index]
    const filePath = path.join(root, maybeFile)
    const stat = fs.lstatSync(filePath)
    if (stat.isDirectory()) {
      input = {
        ...input,
        ...createInput(filePath),
      }
    }
    else if (stat.isFile()) {
      const extname = path.extname(filePath)
      if (extname === '.ts' || '.d.ts') {
        const root = `${filePath.split('\\').shift()}\\`
        const inputFile = filePath.replace(root, '').replace(extname, '')
        input[inputFile] = filePath
      }
    }
  }
  return input
}

/**
 * Escapes the `RegExp` special characters.
 * @param {string} str
 */
function escapeRegExp(str) {
  return str.replace(/[$()*+.?[\\\]^{|}]/g, '\\$&')
}

/**
 * Convert the name of a package to a `RegExp` that matches the package's export names.
 * @param {string} packageName
 */
function convertPackageNameToRegExp(packageName) {
  return new RegExp(`^${escapeRegExp(packageName)}(/.+)?$`)
}

const {
  dependencies = {},
} = repo

const external = Object.keys(dependencies)
  .map(convertPackageNameToRegExp)

function main() {
  /**
   * @type {import('rollup').RollupOptions[]}
   */
  const result = []
  /**
   * @type {import('rollup').InputOption}
   */
  const inputTs = createInput('src')
  /**
   * @type {import('rollup').OutputOptions[]}
   */
  const outputJs = [{
    dir: 'dist',
    format: 'esm',
    entryFileNames: '[name].mjs',
  }, {
    dir: 'dist',
    format: 'cjs',
    entryFileNames: '[name].js',
  }]

  /**
   *  @type {import('rollup').InputOptions['plugins']}
   */
  const plugins = [
    del({
      targets: 'dist/*',
      force: true,
      hook: 'buildEnd',
      ignore: ['dist/types/**'],
    }),
    typescript(),
  ]

  if (isProduction) {
    plugins.push(terser())
    outputJs.forEach((e) => {
      e.sourcemap = true
    })
  }
  else {
    plugins.push(
      livereload(),
      serve({
        port: 13000,
        contentBase: '.',
        openPage: '/example/index.html',
        open: true,
      }),
    )
  }

  result.push({
    input: inputTs,
    output: outputJs,
    external,
    plugins,
  })

  /**
   * 打包类型声明
   */
  if (isProduction) {
    /**
     * @type {import('rollup').InputOption}
     */
    const inputDTs = createInput('temp')
    /**
     * @type {import('rollup').OutputOptions[]}
     */
    const outputDts = [{
      dir: 'dist',
      format: 'es',
    }]
    /**
     *  @type {import('rollup').InputOptions['plugins']}
     */
    const plugins = [
      dts(),
      {
        name: 'before',
        buildStart: async () => {
          const { ok, stderr } = await exec('tsc', ['-p', 'tsconfig.build.json'])
          if (!ok) {
            console.error('TypeScript compilation failed:', stderr)
            process.exit(1)
          }
        },
      },
    ]
    result.push({
      input: inputDTs,
      output: outputDts,
      plugins,
      external,
    })
  }

  return defineConfig(result)
}

export default main()
