// // @ts-check
// import { promises as fs } from 'node:fs'
// import { basename, join } from 'node:path'

// /**
//  *
//  * @param {string | string[]} srcPaths
//  * @param {string} destDir
//  * @returns Promise<void>
//  */
// async function copyFiles(srcPaths, destDir) {
//   // 如果输入是字符串，则将其转换为数组
//   const srcFiles = Array.isArray(srcPaths) ? srcPaths : [srcPaths]

//   // 遍历所有源路径
//   for (const src of srcFiles) {
//     try {
//       // 获取文件或目录的状态
//       const stats = await fs.stat(src)

//       if (stats.isDirectory()) {
//         // 如果是目录，则递归处理目录内所有文件
//         const files = await fs.readdir(src)
//         await Promise.all(files.map(file =>
//           copyFiles(join(src, file), join(destDir, basename(src))),
//         ))
//       }
//       else {
//         // 如果是文件，则复制到目标目录，使用basename获取文件名
//         const dest = join(destDir, basename(src))
//         await fs.mkdir(destDir, { recursive: true }) // 确保目标目录存在
//         await fs.copyFile(src, dest)
//       }
//     }
//     catch (error) {
//       console.error(`Failed to copy ${src} to ${destDir}:`, error)
//     }
//   }
// }

// copyFiles([
//   './dist/canvas.d.ts',
//   './dist/canvas.mjs',
// ], '../request/example/wx-example/miniprogram/utils')
