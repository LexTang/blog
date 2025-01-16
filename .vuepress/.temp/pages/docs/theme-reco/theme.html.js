import comp from "C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/docs/theme-reco/theme.html.vue"
const data = JSON.parse("{\"path\":\"/docs/theme-reco/theme.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"docs/theme-reco/theme.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
