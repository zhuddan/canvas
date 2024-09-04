// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import { defineClientComponent } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp() {
    // ...
  },
} satisfies Theme
// import DefaultTheme from 'vitepress/theme'
// import { SfcPlayground } from '@sakitam-gis/vitepress-playground'
// import '@sakitam-gis/vitepress-playground/dist/style.css'
// import './custom.less'

// export default {
//   ...DefaultTheme,
//   enhanceApp({ app, router, siteData }) {
//     app.component('SfcPlayground', SfcPlayground)
//   },
// } as any
