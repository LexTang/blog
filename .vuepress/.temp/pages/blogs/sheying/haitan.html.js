import comp from "C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/blogs/sheying/haitan.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/sheying/haitan.html\",\"title\":\"海滩\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"海滩\",\"date\":\"2024/2/23\",\"tags\":[\"自然\"],\"categories\":[\"摄影\"]},\"headers\":[],\"git\":{\"createdTime\":1737013852000,\"updatedTime\":1737013852000,\"contributors\":[{\"name\":\"Lex Tang\",\"email\":\"lextang78@outlook.com\",\"commits\":1}]},\"filePathRelative\":\"blogs/摄影/海滩.md\"}")
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
