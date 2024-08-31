import { readdirSync } from 'node:fs'
import { defineConfig, loadEnv } from 'vite'

// const input = readdirSync('./').filter(e => e.endsWith('.html'))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './')
  return {
    build: {
      rollupOptions: {
        input: readdirSync('./').filter(e => e.endsWith('.html')),
      },
    },
    server: {
      port: Number(env.VITE_APP_PORT),
      host: true,
    },
  }
})
