// @ts-check
import fs from 'node:fs'
import path from 'node:path'

export function createInput(root = 'src', extname = '.ts') {
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
        ...createInput(filePath, extname),
      }
    }
    else if (stat.isFile()) {
      if (filePath.endsWith(extname)) {
        const root = `${filePath.split('\\').shift()}\\`
        const inputFile = filePath.replace(root, '').replace(extname, '')
        console.log(filePath, inputFile)
        input[inputFile] = filePath
      }
    }
  }
  return input
}

console.log(createInput('./temp', '.d.ts'))
