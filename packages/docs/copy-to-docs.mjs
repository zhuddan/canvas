import fs from 'node:fs'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { copyFiles } from '../../scripts/copyFiles.mjs'
// 获取当前文件的 URL
const __filename = fileURLToPath(import.meta.url)

// 获取当前文件的目录
const __dirname = dirname(__filename)
fs.readdirSync(path.join(__dirname, './build')).forEach((e) => {
  copyFiles(path.join(__dirname, './build', e), path.join(__dirname, '../../docs/'))
})
