<script setup lang="ts">
import Painter from '@zd~/painter'

const p = new Painter()
const base64String = ref('')
p.init(500, 500)
function render() {
  p.text('平林漠漠烟如织，寒山一带伤心碧。暝色入高楼，有人楼上愁。玉阶空伫立，宿鸟归飞急。何处是归程？长亭更短亭', 250, 250, {
    fontFamily: '宋体',
    textAlign: 'left',
    fontSize: 32,
    fontWeight: 'bold',
    maxWidth: 300,
    lineHeight: 40,
    letterSpacing: 10,
    wordSpacing: 50,
    stroke: 'blue',
    fill: 'red',
    strokeWeight: 1,
    anchor: 0.5,
    rotateDeg: -30,
  })

  p.text(`平林漠漠烟如织`, 18, 60, {
    fontSize: 12,
    maxWidth: 250,
    lineHeight: 20,
  })

  // p.text(`白日依山尽，黄河入海流。欲穷千里目，更上一层楼。`, 30, 130, {
  //   fontSize: 12,
  //   maxWidth: 80,
  //   lineHeight: 20,
  //   color: '#30e3ca',
  // })

  // const deg = (Math.PI * 2) / 360 * (-45)
  // const x = 150
  // const y = 250

  // p.ctx!.save()
  // p.ctx!.translate(x, y)
  // p.ctx!.rotate(deg)

  // p.text(`旋转跳跃旋转旋转跳跃旋转旋跳跃旋转`, 0, 0, {
  //   fontSize: 28,
  //   maxWidth: 180,
  //   lineHeight: 50,
  //   color: '#0505cc',
  // })
  // p.ctx!.restore()

  // p.text(`hahah`, 300, 300, {
  //   fontSize: 50,
  //   color: '#f08a5d',
  // })

  const offscreenCanvas = p.canvas as HTMLCanvasElement
  console.log(offscreenCanvas)

  // const imageBitmap = offscreenCanvas.transferToImageBitmap()
  // const canvas = document.createElement('canvas')
  // canvas.width = 200
  // canvas.height = 200
  // const context = canvas.getContext('2d')!
  // // 将 ImageBitmap 绘制到普通canvas上
  // context.drawImage(imageBitmap, 0, 0)
  // context.textBaseline = 'top'

  base64String.value = offscreenCanvas.toDataURL('jpg')
}

onMounted(render)
</script>

<template>
  <div>
    <img :src="base64String" alt="" class="bg-blue-300">
  </div>
</template>
