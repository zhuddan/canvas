import fs from 'node:fs'
import path from 'node:path'

export function createInput(root = 'src') {
  const files = fs.readdirSync(root)
  /**
   * @type {{ [entryAlias: string]: string }}
   */
  let input = {}
  for (let index = 0; index < files.length; index++) {
    const maybeFile = files[index]
    const filePath = path.join(root, maybeFile)
    const stat = fs.lstatSync(filePath) // 使用 lstat 来获取符号链接的状态
    console.log(filePath, stat.isFile())
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
