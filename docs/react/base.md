# 核心概念

## 1. Hello World
最简易的 React 示例如下：
``` jsx
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```
## 2. JSX 简介

## 3. 元素渲染

## 4. 组件 & Props

::: warning
**注意： 组件名称必须以大写字母开头。**

React 会将以小写字母开头的组件视为原生 DOM 标签。例如，`<div />` 代表 HTML 的 div 标签，而 `<Welcome />` 则代表一个组件，并且需在作用域内使用 Welcome。
:::

### Props 的只读性
组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。来看下这个 `sum` 函数：
``` js
function sum(a, b) {
  return a + b;
}
```
这样的函数被称为“**纯函数**”，因为该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。

相反，下面这个函数则不是纯函数，因为它更改了自己的入参：
``` js
function withdraw(account, amount) {
  account.total -= amount;
}
```
React 非常灵活，但它也有一个严格的规则：

**所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。**


## 5. State & 生命周期

**State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。**

### 向 class 组件中添加局部的 state
通过以下方式将 `props` 传递到父类的构造函数中：
``` js {2}
constructor(props) {
    super(props);
    this.state = {date: new Date()};
}
```
Class 组件应该始终使用 `props` 参数来调用父类的构造函数。

### 正确的使用State
* 不要直接修改State
* State的更新可能是异步的
* State 的更新会被合并
* 数据是向下流动的
### 生命周期

`componentDidMount()` 方法会在组件已经被渲染到 DOM 中后运行

## 6. 事件处理

## 7. 条件渲染

## 8. 列表 & Key 

## 9. 表单

## 10. 状态提升

## 11. 组合 vs 继承

## 12. React哲学