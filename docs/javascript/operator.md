# 运算符

## [运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

| 优先级 | 运算符类型       | 结合性      | 运算符 |
| ------ | ---------------- | ----------- | ------ |
| 19     | 分组             | n/a(不相关) | (...)  |
| 18     | 成员访问         | 从左到右    | .      |
|        | 需计算的成员访问 | 从左到右    | []     |
| 2      | 赋值             | 从右到左    | =      |

例题：

```js
var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };
console.log(a.x);
console.log(b.x);

// undefined
// {n:2}
```

优先级.的优先级高于=，所以先执行 a.x，堆内存中的{n: 1}就会变成{n: 1, x: undefined}，改变之后相应的 b.x 也变化了，因为指向的是同一个对象。

赋值操作是从右到左，所以先执行 a = {n: 2}，a 的引用就被改变了，然后这个返回值又赋值给了 a.x，需要注意的是这时候 a.x 是第一步中的{n: 1, x: undefined}那个对象，其实就是 b.x，相当于 b.x = {n: 2}
