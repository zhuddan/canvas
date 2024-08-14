<script setup lang="ts">
import Painter from '@zd~/painter'

const p = new Painter()
// const base64String = ref('')
p.init(600, 800)
function render() {
  p.rect(0, 0, 600, 800, {
    fill: '#eaffd0',
    strokeWeight: 9,
    lineJoin: 'bevel',
    stroke: '#f08a5d',
  })
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
    [250, 160],
    [250 + 300, 160],
    [250 + 300, 160 + 120],
  ], {
    fill: '#9896f1',
    close: true,
    strokeWeight: 4,
    stroke: '#7effdb',
    lineCap: 'round',
    lineJoin: 'round',
    rotateDeg: -30,
  })

  p.text('旋转三角形', 400, 80, {
    fontSize: 24,
    fill: '#fff',
  })

  p.rect(400, 200, 100, 100, {
    strokeWeight: 2,
    // fill: '#fc5c9c',
    stroke: '#ff9a3c',
    rotateDeg: -15,
  })

  p.rect(450, 200, 100, 100, {
    strokeWeight: 2,
    lineJoin: 'round',
    // fill: '#fc5c9c',
    stroke: '#f67280',
    radii: 20,
  })

  p.arc(350, 250, 50, {
    strokeWeight: 9,
    lineJoin: 'round',
    fill: 'pink',
    rotateDeg: -15,
  })

  p.arcTo(200, 600, 50, 100, 60, {
    stroke: '#e84a5f',
    strokeWeight: 10,
    alpha: 0.5,
  })

  const start = { x: 50, y: 20 + 300 }
  const cp1 = { x: 230, y: 30 + 300 }
  const cp2 = { x: 150, y: 80 + 300 }
  const end = { x: 250, y: 100 + 300 }

  p.bezier(start, cp1, cp2, end, {
    strokeWeight: 2,
    stroke: '#2eb872',
  })

  p.text('贝塞尔曲线', 100, 350, {

  })

  p.text('先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也', -10, 600, {
    fontSize: 18,
    maxWidth: 250,
    lineHeight: 25,
    stroke: '#ca82f8',
    transform: [1, 0.2, 0.2, 1, 0, 0],
    rotateDeg: 0,
  })

  const canvas = p.canvas!
  document.getElementById('c')?.appendChild(canvas)
}

onMounted(render)
</script>

<template>
  <div id="c" />
</template>
