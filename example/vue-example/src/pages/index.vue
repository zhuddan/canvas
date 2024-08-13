<script setup lang="ts">
import Painter from '@zd~/painter'

const p = new Painter()
const base64String = ref('')
p.init(document.documentElement.clientWidth / window.devicePixelRatio, document.documentElement.clientHeight / window.devicePixelRatio,
)
function render() {
  p.text('平林漠漠烟如织，寒山一带伤心碧。暝色入高楼，有人楼上愁。玉阶空伫立，宿鸟归飞急。何处是归程？长亭更短亭', 300 / 2, 300 / 2, {
    fontFamily: '黑体',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 900,
    maxWidth: 250,
    lineHeight: 20,
    letterSpacing: 10,
    wordSpacing: 50,
    stroke: 'blue',
    fill: 'red',
    anchor: 0.5,
    rotateDeg: -30,
  })

  p.text(`大漠孤烟直`, 18, 60, {
    fontSize: 28,
    stroke: 'pink',
    strokeWeight: 0.5,
    // fill: 'transparent',
  })

  p.line([
    // [300, 300],
    // [400, 350],
    // [500, 300],
    // [450, 400],
    // [500, 500],
    // [400, 450],
    // [300, 500],
    // [350, 400],
    // [300, 300],
    [280, 50],
    [280 + 50, 50],
    [280 + 50, 50 + 80],
  ], {
    fill: 'red',
    close: true,
    strokeWeight: 9,
    lineCap: 'round',
    lineJoin: 'round',
  })

  const canvas = p.canvas!

  base64String.value = canvas.toDataURL('jpg')

  // canvas.width = originalWidth
  // canvas.height = originalHeight

  // console.log(base64String.value)
}

onMounted(render)
</script>

<template>
  <div>
    <img :src="base64String" alt="" class="bg-blue-300">
  </div>
</template>
