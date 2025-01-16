export const redirects = JSON.parse("{\"/blogs/%E6%91%84%E5%BD%B1/%E5%8C%97%E4%BA%AC%E5%9F%8E.html\":\"/blogs/sheying/beijingcheng.html\",\"/blogs/%E6%91%84%E5%BD%B1/%E5%8C%97%E4%BA%AC%E7%9A%84%E6%98%A5.html\":\"/blogs/sheying/beijingdechun.html\",\"/blogs/%E6%91%84%E5%BD%B1/%E6%A2%85%E9%87%8C.html\":\"/blogs/sheying/meili.html\",\"/blogs/%E6%91%84%E5%BD%B1/%E6%B5%B7%E6%BB%A9.html\":\"/blogs/sheying/haitan.html\",\"/blogs/%E6%91%84%E5%BD%B1/%E9%9B%A8%E5%90%8E.html\":\"/blogs/sheying/yuhou.html\",\"/blogs/%E8%AF%97%E8%AF%8D/%E6%9C%AA%E9%80%89%E6%8B%A9%E7%9A%84%E8%B7%AF.html\":\"/blogs/shici/weixuanzedelu.html\"}")

export const routes = Object.fromEntries([
  ["/timeline.html", { loader: () => import(/* webpackChunkName: "timeline.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/timeline.html.js"), meta: {"title":""} }],
  ["/posts.html", { loader: () => import(/* webpackChunkName: "posts.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/posts.html.js"), meta: {"title":""} }],
  ["/friendship-link.html", { loader: () => import(/* webpackChunkName: "friendship-link.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/friendship-link.html.js"), meta: {"title":""} }],
  ["/categories/shici/1.html", { loader: () => import(/* webpackChunkName: "categories_shici_1.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/categories/shici/1.html.js"), meta: {"title":""} }],
  ["/categories/sheying/1.html", { loader: () => import(/* webpackChunkName: "categories_sheying_1.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/categories/sheying/1.html.js"), meta: {"title":""} }],
  ["/tags/zhailu/1.html", { loader: () => import(/* webpackChunkName: "tags_zhailu_1.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/tags/zhailu/1.html.js"), meta: {"title":""} }],
  ["/tags/jianzhu/1.html", { loader: () => import(/* webpackChunkName: "tags_jianzhu_1.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/tags/jianzhu/1.html.js"), meta: {"title":""} }],
  ["/tags/ziran/1.html", { loader: () => import(/* webpackChunkName: "tags_ziran_1.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/tags/ziran/1.html.js"), meta: {"title":""} }],
  ["/posts/1.html", { loader: () => import(/* webpackChunkName: "posts_1.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/posts/1.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/docs/message-board.html", { loader: () => import(/* webpackChunkName: "docs_message-board.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/docs/message-board.html.js"), meta: {"title":"留言板"} }],
  ["/docs/sorry.html", { loader: () => import(/* webpackChunkName: "docs_sorry.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/docs/sorry.html.js"), meta: {"title":"毕设制作中..."} }],
  ["/blogs/sheying/beijingcheng.html", { loader: () => import(/* webpackChunkName: "blogs_摄影_北京城.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/blogs/sheying/beijingcheng.html.js"), meta: {"title":"北京城"} }],
  ["/blogs/sheying/beijingdechun.html", { loader: () => import(/* webpackChunkName: "blogs_摄影_北京的春.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/blogs/sheying/beijingdechun.html.js"), meta: {"title":"北京的春"} }],
  ["/blogs/sheying/meili.html", { loader: () => import(/* webpackChunkName: "blogs_摄影_梅里.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/blogs/sheying/meili.html.js"), meta: {"title":"梅里雪山"} }],
  ["/blogs/sheying/haitan.html", { loader: () => import(/* webpackChunkName: "blogs_摄影_海滩.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/blogs/sheying/haitan.html.js"), meta: {"title":"海滩"} }],
  ["/blogs/sheying/yuhou.html", { loader: () => import(/* webpackChunkName: "blogs_摄影_雨后.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/blogs/sheying/yuhou.html.js"), meta: {"title":"雨后"} }],
  ["/blogs/shici/weixuanzedelu.html", { loader: () => import(/* webpackChunkName: "blogs_诗词_未选择的路.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/blogs/shici/weixuanzedelu.html.js"), meta: {"title":"《未选择的路》"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
