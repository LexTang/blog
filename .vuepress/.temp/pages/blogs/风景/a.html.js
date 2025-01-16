import comp from "C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/blogs/风景/a.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/%E9%A3%8E%E6%99%AF/a.html\",\"title\":\"asd\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"asd\",\"date\":\"2024/12/15\",\"tags\":[\"tag1\"],\"categories\":[\"风景\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"blogs/风景/a.md\"}")
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
