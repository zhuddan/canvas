// @ts-check
import process from 'node:process'
import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import terser from '@rollup/plugin-terser'
import { dts } from 'rollup-plugin-dts'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { exec } from './scripts/exec.mjs'

// const repo = JSON.parse(readFileSync('./package.json').toString())
const isProduction = process.env.NODE_ENV === 'production'

/**
 *
 * @param {string} root
 * @param {string} extname
 * @param {string} append
 */
export function createInput(root, extname, append = '') {
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
        ...createInput(filePath, extname, append),
      }
    }
    else if (stat.isFile()) {
      if (filePath.endsWith(extname)) {
        const root = `${filePath.split('\\').shift()}\\`
        const inputFile = filePath.replace(root, '').replace(extname, '')
        input[inputFile + append] = filePath
      }
    }
  }
  return input
}

function main() {
  /**
   * @type {import('rollup').RollupOptions[]}
   */
  const result = []
  /**
   * @type {import('rollup').InputOption}
   */
  const inputTs = createInput('src', '.ts', '.dev')
  if (!isProduction) {
    for (const key in inputTs) {
      if (Object.hasOwnProperty.call(inputTs, key)) {
        const element = inputTs[key]
        console.log(key)
        console.log(element)
      }
    }
  }
  /**
   * @type {import('rollup').OutputOptions[]}
   */
  const outputJs = [{
    dir: 'dist',
    format: 'esm',
    entryFileNames: '[name].mjs',
  }]

  /**
   *  @type {import('rollup').InputOptions['plugins']}
   */
  const plugins = [
    isProduction
      ? del({
        targets: ['dist/*', 'temp/*'],
        force: true,
        hook: 'buildStart',
      })
      : null,
    typescript(isProduction
      ? {
          declaration: false,
        }
      : {

        }),
    nodeResolve(),
    commonjs(),
  ]

  if (isProduction) {
    plugins.push(terser())
    outputJs.push({
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].js',
    })
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

  result.push(
    {
      input: inputTs,
      output: outputJs,
      // external,
      plugins,
    },
  )

  /**
   * 打包类型声明
   */
  if (isProduction) {
    /**
     * @type {import('rollup').InputOption}
     */
    const inputDTs = createInput('temp', '.d.ts')
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
      nodeResolve(),
      commonjs(),
      dts({
        respectExternal: true,
      }),
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
      // external: [
      //   ...external,
      //   // 'csstype',
      //   // convertPackageNameToRegExp('csstype'),
      // ],
    })
  }

  return defineConfig(result)
}

export default main()
