
  import { defineAsyncComponent } from 'vue'
import { defineClientConfig } from 'vuepress/client'

import { applyClientSetup } from 'C:/Users/lexta/Documents/LexBlog Files/blog/node_modules/vuepress-theme-reco/lib/client/clientSetup.js'
import { applyClientEnhance } from 'C:/Users/lexta/Documents/LexBlog Files/blog/node_modules/vuepress-theme-reco/lib/client/clientEnhance.js'

import * as layouts from 'C:/Users/lexta/Documents/LexBlog Files/blog/node_modules/vuepress-theme-reco/lib/client/layouts/index.js'

  const layoutsFromDir = {}
export default defineClientConfig({
  enhance(...args) {
    applyClientEnhance(...args)
  },
  setup() {
    applyClientSetup()
  },
  // @ts-ignore
  layouts: { ...layouts, ...layoutsFromDir },
})
