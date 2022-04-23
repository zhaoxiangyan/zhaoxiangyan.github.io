# 高级指引

## 代码分割

### React.lazy

::: warning
React.lazy 和 Suspense 技术还不支持服务端渲染。如果你想要在使用服务端渲染的应用中使用，我们推荐 [Loadable Components](https://github.com/gregberge/loadable-components) 这个库。它有一个很棒的服务端渲染打包指南。
:::

`React.lazy` 函数能让你像渲染常规组件一样处理动态引入（的组件）。

```jsx
import React, { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./OtherComponent"));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

`React.lazy` 目前只支持默认导出（default exports）。
