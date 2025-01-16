export const themeData = JSON.parse("{\"primaryColor\":\"rgba(90,119,140,0.67)\",\"colorMode\":\"dark\",\"colorModeSwitch\":true,\"logo\":\"/logo.png\",\"author\":\"Lex Tang\",\"authorAvatar\":\"/head.png\",\"docsRepo\":\"https://github.com/vuepress-reco/vuepress-theme-reco-next\",\"docsBranch\":\"main\",\"docsDir\":\"example\",\"lastUpdatedText\":\"\",\"navbar\":[{\"text\":\"主页\",\"link\":\"/\"},{\"text\":\"分类\",\"link\":\"/categories/shici/1.html\"},{\"text\":\"标签\",\"link\":\"/tags/zhailu/1.html\"},{\"text\":\"时间轴\",\"link\":\"/timeline\"},{\"text\":\"留言\",\"link\":\"/docs/message-board\"},{\"text\":\"毕设\",\"link\":\"/docs/sorry\"}],\"bulletin\":{\"body\":[{\"type\":\"text\",\"content\":\"这是我搭建的第二个博客站，非常感谢 reco 主题。\",\"style\":\"font-size: 12px;\"},{\"type\":\"hr\"},{\"type\":\"title\",\"content\":\"QQ & Wechat\"},{\"type\":\"text\",\"content\":\"ID：747886867\",\"style\":\"font-size: 12px;\"},{\"type\":\"hr\"},{\"type\":\"title\",\"content\":\"E-mail\"},{\"type\":\"text\",\"content\":\"lextang78@outlook.com\",\"style\":\"font-size: 12px;\"}]},\"commentConfig\":{\"type\":\"valine\",\"options\":{\"appId\":\"LXbwfpkgONTPHlpEXUJ1aRiI-gzGzoHsz\",\"appKey\":\"U2jSprJH1NhXTeFt0EmPsU6T\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
