import comp from "C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/tags/tag1/1.html.vue"
const data = JSON.parse("{\"path\":\"/tags/tag1/1.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"Categories\"},\"headers\":[],\"git\":{},\"filePathRelative\":null}")
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
