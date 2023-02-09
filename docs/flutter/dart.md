# [dart布局API](https://flutter.cn/docs/reference/widgets)

## Container
容器组件
``` dart
Container({
    Key key, //该属性代表当前widget的唯一标识符(类似于Android中的id)，在程序运行过程中，如果想调用该widget的某个方法，那就需要设置该属性值，该属性不是必须值
    this.alignment, //子元素的对齐方式，官方已经提供了几种常用的对齐方式
    this.padding, //这个比较好理解，跟Android中的是一个意思，内边距
    Color color, //设置组件的背景色
    Decoration decoration, //与color属性功能一样，都是设置背景，不过decoration功能更强大，它可以设置背景图片、圆角、渐变、阴影、边框等
    this.foregroundDecoration,
    double width, //组件的宽度
    double height, //组件的高度
    BoxConstraints constraints, //组件的宽高限制
    this.margin, //外边距
    this.transform, //矩阵转换
    this.child, //子元素
})
```
另外在使用过程中，Container如果作为应用的根节点的话，它的宽高会自动填充为屏幕大小。

## Row
行组件，children为行内多列组件
``` dart
Row({
    Key? key, //
    MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start, //子元素在主轴的对齐方式，Row的主轴即为水平方向
    MainAxisSize mainAxisSize = MainAxisSize.max, //主轴方向大小适配方式，只有两种取值方式 max:主轴方向大小(Row中指宽度)与父容器大小相同 min:主轴方向大小(Row中指宽度)由子元素决定
    CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center, // 子元素在交叉轴（垂直方向）的对齐方式
    TextDirection? textDirection, //
    VerticalDirection verticalDirection = VerticalDirection.down, //
    TextBaseline? textBaseline, // NO DEFAULT: we don't know what the text's baseline should be
    List<Widget> children = const <Widget>[], //子元素列表
  })
```

## Column
列组件，children为列内多行组件
``` dart
Column({
    Key? key, //
    MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start, //子元素在主轴的对齐方式，Column的主轴即为垂直方向
    MainAxisSize mainAxisSize = MainAxisSize.max, //主轴方向大小适配方式， max:主轴方向大小(Column中指高度)与父容器大小相同 min:主轴方向大小(Column中指高度)由子元素决定
    CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center, //子元素在交叉轴（水平方向）的对齐方式
    TextDirection? textDirection, //
    VerticalDirection verticalDirection = VerticalDirection.down, //
    TextBaseline? textBaseline, //
    List<Widget> children = const <Widget>[], //子元素列表
  }) 
```

## AspectRatio
宽高比组件，设置子组件的宽高比

子组件的高是根据父组件的宽计算的
父组件的宽高设置具体的值，aspectRatio的值无效

## SizedBox
指定宽高的框、可用来设置margin

## Expanded
Expanded常用于Row, Column, Flex的子元素中；在使用Expanded子Widget的时候，能够填充满剩余空间。
``` dart
Expanded({
    Key? key,
    int flex = 1,
    required Widget child,
  }) 
```