module.exports = {
  base: "/blog/",
  markdown: {
    lineNumbers: true, // 显示行号
    externalLinks: {
      // 在新窗口中打开外部链接
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Seven",
      description: " SevenXiao的个人小站（建设中）",
    },
  },
  head: [
    ["link", { rel: "icon", href: `/images/logo.png` }],
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "seven" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Vue, Nginx, MySQL, Vue, Node.js, javascript, 产品, 架构, 产品设计, 数据库, 操作系统, 数据结构, 算法",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
  ],
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/medium-zoom",
      {
        selector: "img",
        options: {
          margin: 16,
        },
      },
    ],
    [
      "@vssue/vuepress-plugin-vssue",
      {
        // 设置 `platform` 而不是 `api`
        platform: "github",

        // 其他的 Vssue 配置
        owner: "OWNER_OF_REPO",
        repo: "NAME_OF_REPO",
        clientId: "YOUR_CLIENT_ID",
        clientSecret: "YOUR_CLIENT_SECRET",
      },
    ],
    ["vuepress-plugin-code-copy", true],
  ],
  themeConfig: {
    logo: "/images/logo.png",
    // editLinks: true,
    sidebarDepth: 1, // 侧边栏提取markdown标题的最大深度
    locales: {
      "/": {
        label: "简体中文",
        selectText: "Languages",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [
          { text: "Home", link: "/" },
          { text: "Javascript", link: "/javascript/" },
          { text: "算法", link: "/algorithm/" },
          { text: "网络", link: "/network/" },
          {
            text: "前端框架",
            items: [
              { text: "Vue", link: "/vue/" },
              { text: "React", link: "/react/" },
            ],
          },
          { text: "Node", link: "/node/" },
          {
            text: "构建工具",
            items: [
              { text: "Webpack", link: "/webpack/" },
              { text: "Vite", link: "/vite/" },
            ],
          },
          { text: "关于", link: "/about/" },
          {
            text: "Github",
            link: "https://github.com/xiaosevenseven",
          },
        ],
        sidebar: {},
      },
    },
  },
};
