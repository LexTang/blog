import comp from "C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/blogs/摄影/a.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/%E6%91%84%E5%BD%B1/a.html\",\"title\":\"北京的春\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"北京的春\",\"date\":\"2024/4/28\",\"tags\":[\"自然\"],\"categories\":[\"摄影\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"blogs/摄影/a.md\"}")
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
