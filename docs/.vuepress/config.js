module.exports = {
  title: "个人博客",
  description: "前端面试",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "script",
      {
        src: "https://s9.cnzz.com/z_stat.php?id=1281101952&web_id=1281101952",
        defer: "defer",
      },
    ], // 友盟cnzz统计
  ],
  base: "/", // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现博客有更新啦",
          buttonText: "刷新",
        },
      },
    ],
  ],
  themeConfig: {
    // logo: '/logo.png',
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "最近更新时间", // 文档更新时间：每个文件git最后提交的时间
    // nextLinks: false, // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    // prevLinks: false, // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    // displayAllHeaders:true, //显示所有页面的标题链接
    // 导航栏
    nav: [
      { text: "Node", link: "/node/" },
      { text: "React", link: "/react/" }, // 内部链接 以docs为根目录
      { text: "Markdown", link: "/markdown/" },
      { text: "Javascript", link: "/javascript/" },
      { text: "Git", link: "/git/" },
      { text: "Vue", link: "/vue/" },
      { text: "移动端", link: "/mobile/" },
      { text: "Flutter", link: "/flutter/" },
      { text: "工具", link: "/tool/" },
      { text: "博客", link: "https://www.zhaoxiangyan.xyz/" }, // 外部链接
      // 下拉列表
      {
        text: "GitHub",
        items: [
          { text: "GitHub地址", link: "https://github.com/zhaoxiangyan" },
          {
            text: "脚手架仓库",
            link: "https://github.com/zhaoxiangyan/cli",
          },
        ],
      },
    ],
    // 侧边栏
    sidebar: {
      "/node/": [
        {
          title: "npm",
          sidebarDepth: 2,
          collapsable: false,
          children: [""],
        },
        {
          title: "代码库",
          collapsable: false,
          sidebarDepth: 2,
          children: ["dependencies"],
        },
      ],
      "/react/": [
        {
          title: "开始",
          sidebarDepth: 2,
          collapsable: false,
          children: ["", "base", "advanced"],
        },
        {
          title: "代码库",
          collapsable: false,
          sidebarDepth: 2,
          children: ["dependencies", "hooks"],
        },
      ],
      "/markdown/": [""],
      "/javascript/": [
        {
          title: "基础",
          collapsable: false,
          children: ["", "this", "function"],
        },
        {
          title: "Typescript",
          collapsable: false,
          children: ["typescript"],
        },
        {
          title: "面试",
          collapsable: false,
          sidebarDepth: 2,
          children: ["shallow-deep-copy", "event-loop", "operator"],
        },
        {
          title: "代码库",
          collapsable: false,
          sidebarDepth: 2,
          children: ["dependencies"],
        },
      ],
      "/git/": [
        {
          title: "Git",
          collapsable: false,
          sidebarDepth: 2,
          children: ["", "fix"],
        },
        {
          title: "GitHub",
          collapsable: false,
          children: ["git-action", "pull-request", "git-flow"],
        },
      ],
      "/vue/": [
        {
          title: "Vue",
          collapsable: false,
          children: [""],
        },
        {
          title: "代码库",
          collapsable: false,
          sidebarDepth: 2,
          children: ["framework", "scaffold"],
        },
      ],
      "/mobile/": [
        {
          title: "移动端",
          collapsable: false,
          children: [""],
        },
      ],
      "/flutter/": [
        {
          title: "Flutter",
          collapsable: false,
          children: ["", "dart", "flutter"],
        },
      ],
      "/tool/": [
        {
          title: "代码",
          collapsable: false,
          children: ["", "tool"],
        },
        {
          title: "测试",
          collapsable: false,
          children: ["jest"],
        },
        {
          title: "命令行",
          collapsable: false,
          children: ["pm2"],
        },
      ],
    },
    // sidebar: "auto",
  },
  // md文件内webp图片报错
  chainWebpack: (config, isServer) => {
    const inlineLimit = 10000;
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: inlineLimit,
        name: `assets/img/[name].[hash:8].[ext]`,
      });
  },
};
