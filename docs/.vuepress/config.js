module.exports = {
  title: "个人博客",
  description: "前端面试",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: "/vuepress/", // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    // logo: '/logo.png',
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    // nextLinks: false, // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    // prevLinks: false, // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    // displayAllHeaders:true, //显示所有页面的标题链接
    // 导航栏
    nav: [
      { text: "React", link: "/react/" }, // 内部链接 以docs为根目录
      { text: "Markdown", link: "/markdown/" },
      { text: "Javascript", link: "/javascript/" },
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
      "/react/": [
        {
          title: "开始",
          sidebarDepth:2,
          collapsable: false,
          children: ["","base"],
        },
      ],
      "/markdown/": [""],
      "/javascript/": [
        {
          title: "基础",
          collapsable: false,
          children: ["", "this", "function"],
        },
      ],
    },
    // sidebar: "auto",
    // sidebar: [
    //     {
    //         title:'Markdown',
    //         sidebarDepth:1,
    //         collapsable:false,
    //         children:[
    //             '/markdown/'
    //         ]
    //     },
    //     {
    //         title: 'React',
    //         // path: '/about/', // 可选的, 应该是一个绝对路径
    //         collapsable: false, // 可选的, 默认值是 true,
    //         sidebarDepth: 1, // 可选的, 默认值是 1
    //         children: [
    //             '/react/', // 以docs为根目录来查找文件
    //             // 上面地址查找的是：docs>react>README.md 文件
    //             // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
    //         ]
    //     }
    // ],
  },
};
