// @ts-check
import { promises as fs } from 'node:fs'
import { basename, join } from 'node:path'

/**
 *
 * @param {string | string[]} srcPaths
 * @param {string} destDir
 * @param {boolean} clearDest
 * @returns Promise<void>
 */
export async function copyFiles(srcPaths, destDir, clearDest = false) {
  // 如果输入是字符串，则将其转换为数组

  const srcFiles = Array.isArray(srcPaths) ? srcPaths : [srcPaths]
  if (clearDest) {
    await clearDirectory(destDir)
  }
  // 遍历所有源路径
  for (const src of srcFiles) {
    try {
      // 获取文件或目录的状态
      const stats = await fs.stat(src)

      if (stats.isDirectory()) {
        // 如果是目录，则递归处理目录内所有文件
        const files = await fs.readdir(src)
        // await Promise.all(files.map(file =>
        //   copyFiles(join(src, file), join(destDir, basename(src))),
        // ))

        for (let index = 0; index < files.length; index++) {
          const file = files[index]
          await copyFiles(join(src, file), join(destDir, basename(src)))
        }
      }
      else {
        // 如果是文件，则复制到目标目录，使用basename获取文件名
        const dest = join(destDir, basename(src))
        await fs.mkdir(destDir, { recursive: true }) // 确保目标目录存在
        await fs.copyFile(src, dest)
      }
    }
    catch (error) {
      console.error(`Failed to copy ${src} to ${destDir}:`, error)
    }
  }
}

/**
 * 清除目录及其内容
 *
 * @param {string} dir - 目标目录
 * @returns {Promise<void>}
 */
async function clearDirectory(dir) {
  try {
    const files = await fs.readdir(dir)
    await Promise.all(files.map(async (file) => {
      const filePath = join(dir, file)
      const stats = await fs.stat(filePath)
      if (stats.isDirectory()) {
        // 如果是目录，则递归删除
        await clearDirectory(filePath)
        await fs.rmdir(filePath)
      }
      else {
        // 如果是文件，则直接删除
        await fs.unlink(filePath)
      }
    }))
  }
  catch (error) {
    console.error(`Failed to clear directory ${dir}:`, error)
  }
}
