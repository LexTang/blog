import comp from "C:/Users/lexta/Documents/LexBlog Files/blog/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"modules\":[\"BannerBrand\",\"Blog\",\"MdContent\",\"Comment\",\"Footer\"],\"bannerBrand\":{\"bgImage\":\"/bg.svg\",\"title\":\"Lex 的小世界\",\"description\":\"“一万年太久，只争朝夕。”\",\"tagline\":\"世间的阴差阳错从未停歇，都是寻常。\",\"buttons\":null,\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/vuepress-reco/vuepress-theme-reco\"}]},\"blog\":{\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/recoluan\"}]},\"isShowTitleInHome\":true,\"actionText\":\"About\",\"actionLink\":\"/views/other/about\"},\"headers\":[],\"git\":{\"createdTime\":1737013852000,\"updatedTime\":1737013852000,\"contributors\":[{\"name\":\"Lex Tang\",\"email\":\"lextang78@outlook.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
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
