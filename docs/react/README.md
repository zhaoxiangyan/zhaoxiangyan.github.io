# 安装

## 创建新的React应用

React团队主要推荐这些解决方案：

* 如果你是在**学习Rect**或**创建一个新的[单页](#单页面应用)应用**,请使用[Create React APP](#create-react-app)。
* 如果你是在用**Node.js构建服务器渲染的网站**，试试[Next.js](#nextjs)。
* 如果你是在构建**面向内容的静态网站**，试试[Gatsby](#gatsby)。
* 如果你是在打造**组件库**或**将React集成到现有代码仓库**，尝试更灵活的工具链。

### 单页面应用

单页面应用(single-page application)，是一个应用程序，它可以加载单个 HTML 页面，以及运行应用程序所需的所有必要资源（例如 JavaScript 和 CSS）。与页面或后续页面的任何交互，都不再需要往返 server 加载资源，即页面不会重新加载。
### Create React App

Create React App是一个用于**学习React**的舒适环境，也是用React创建**新的单页应用**的最佳方式。
``` bash
npx create-react-app my-app
cd my-app
npm start
```

### Next.js

[Next.js](https://www.nextjs.cn/) 是一个流行的、轻量级的框架，用于配合 React 打造**静态化和服务端渲染应用**。它包括开箱即用的**样式和路由方案**，并且假定你使用 Node.js 作为服务器环境。


### Gatsby

[Gatsby](https://www.gatsbyjs.cn/) 是用 React 创建**静态网站**的最佳方式。它让你能使用 React 组件，但输出预渲染的 HTML 和 CSS 以保证最快的加载速度。

### 更灵活的工具链

以下工具链为 React 提供更多更具灵活性的方案。推荐给更有经验的使用者：
* [Neutrino](https://neutrinojs.org/) 把 webpack 的强大功能和简单预设结合在一起。并且包括了 React 应用和 React 组件的预设。
* [Parcel](https://parceljs.org/) 是一个快速的、零配置的网页应用打包器，并且可以搭配 React 一起工作。
* [Razzle](https://github.com/jaredpalmer/razzle) 是一个无需配置的服务端渲染框架，但它提供了比 Next.js 更多的灵活性。

