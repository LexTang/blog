import comp from "C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/docs/message-board.html.vue"
const data = JSON.parse("{\"path\":\"/docs/message-board.html\",\"title\":\"留言板\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"留言板\",\"date\":\"2020/10/08\",\"hideComments\":false},\"headers\":[],\"git\":{\"createdTime\":1737013852000,\"updatedTime\":1737013852000,\"contributors\":[{\"name\":\"Lex Tang\",\"email\":\"lextang78@outlook.com\",\"commits\":1}]},\"filePathRelative\":\"docs/message-board.md\"}")
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
