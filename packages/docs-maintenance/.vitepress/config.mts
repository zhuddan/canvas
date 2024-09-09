import { defineConfig } from 'vitepress'
import config from '@sakitam-gis/vitepress-playground/config'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: config,
  outDir: '../../docs',
  base: '/canvas/',
  title: '@zd~/canvas',
  description: '基于 Canvas API 的轻量级绘图库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'api', link: '/api/index.md' },
    ],
    sidebar: [
      {
        text: '快速开始',
        link: '/getting-started',
      },
      {
        text: 'api',
        items: [
          { text: 'App', link: '/api/index.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhuddan/canvas' },
    ],
  },
})
