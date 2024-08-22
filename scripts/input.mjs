// @ts-check
import fs from 'node:fs'
import path from 'node:path'
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
