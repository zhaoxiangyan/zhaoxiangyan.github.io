# 脚手架

## Vite+Vue

[Vite](https://cn.vitejs.dev/) 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动。

通过在终端中运行以下命令，可以使用 Vite 快速构建 Vue 项目。

使用 npm:

```bash
# npm 6.x
$ npm init vite@latest <project-name> --template vue
$ npm init vite@latest <project-name> --template vue-ts # ts支持
# npm 7+，需要加上额外的双短横线
$ npm init vite@latest <project-name> -- --template vue

$ cd <project-name>
$ npm install
$ npm run dev
```

或者 yarn:

```bash
$ yarn create vite <project-name> --template vue
$ cd <project-name>
$ yarn
$ yarn dev
```

或者 pnpm:

```bash
$ pnpm create vite <project-name> -- --template vue
$ cd <project-name>
$ pnpm install
$ pnpm dev
```

## Vue CLI

::: warning
**关于旧版本**

Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，你需要先通过 npm uninstall vue-cli -g 或 yarn global remove vue-cli 卸载它。
:::

可以使用下列任一命令安装这个新的包：

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### 升级

如需升级全局的 Vue CLI 包，请运行：

```bash
npm update -g @vue/cli

# 或者
yarn global upgrade --latest @vue/cli
```

### vue create

```bash
vue create hello-world
```

### 使用图形化界面

```bash
vue ui
```
