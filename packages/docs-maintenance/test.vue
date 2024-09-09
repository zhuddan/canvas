<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits(['mount'])

const v = ref(1)

if (!import.meta.env.SSR) {
  console.log('not ssr', '非 ssr 环境需要执行，一般用于 build 时无法执行的代码片段包装')
}

if (import.meta.env.SSR) {
  console.log('ssr', 'ssr 环境需要执行')
}

emits('mount')
</script>

<template>
  <div class="playground-content">
    这是一个示例 {{ v }}
  </div>
</template>

<style scoped>
  .playground-content {
  width: 100%;
  height: 450px;
}
</style>
