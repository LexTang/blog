import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "Lex\'s blog",
  description: "Just playing around",
  bundler: viteBundler(),
  head: [
    [
      'link',{ rel: 'icon', href: '/ico.ico' }
    ]
  ],
  // bundler: webpackBundler(),
  theme: recoTheme({
    primaryColor: 'rgba(90,119,140,0.67)',
    colorMode: 'dark', // dark, light, 默认 auto
    colorModeSwitch: true, // 是否展示颜色模式开关，默认 true
    logo: "/logo.png",
    author: "Lex Tang",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    // series: {
    //   "/docs/": [
    //     {
    //       text: "module one",
    //       children: ["home", "theme"],
    //     },
    //     {
    //       text: "module two",
    //       children: ["api", "plugin"],
    //     },
    //   ],
    // },
    navbar: [
      { text: "主页", link: "/"},
      { text: "分类", link: "/categories/shici/1.html" },
      { text: "标签", link: "/tags/zhailu/1.html" },
      { text: '时间轴', link: '/timeline' },
      { text: "留言", link: "/docs/message-board" },
      { text: "毕设", link: "/docs/sorry" },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `这是我搭建的第二个博客站，非常感谢 reco 主题。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "QQ & Wechat",
        },
        {
          type: "text",
          content: `ID：747886867`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "E-mail",
        },
        {
          type: "text",
          content: `lextang78@outlook.com`,
          style: "font-size: 12px;",
        },
      ],
    },
    commentConfig: {
      type: 'valine',
      options: {
        appId: 'LXbwfpkgONTPHlpEXUJ1aRiI-gzGzoHsz', // your appId
        appKey: 'U2jSprJH1NhXTeFt0EmPsU6T', // your appKey
      },
    },
  }),
  // debug: true,
});
