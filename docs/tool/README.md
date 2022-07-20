# 格式化

## [prettier](https://www.prettier.cn/)

``` js
    // 一行最多 100 字符
    printWidth: 100,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 使用 4 个空格缩进
    tabWidth: 4,
    tabSize: 4,
    // 行尾需要有分号
    semi: false,
    // 使用单引号代替双引号
    singleQuote: true,
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx中使用单引号代替双引号
    jsxSingleQuote: false,
    // 在对象或数组最后一个元素后面是否加逗号(在ES5中加尾逗号)
    trailingComma: 'es5',
    // 在对象，数组括号与文字之间加空格“{ foo: bar }”
    bracketSpacing: true,
    // 在jsx中把'>'是否单独放一行
    jsxBracketSameLine: false,
    // 箭头函数，只有一个参数的时候，也需要括号。avoid:省略括号
    arrowParens: 'always',
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行。ignore
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用lf, 结尾是 \n \r \n\r auto
    endOfLine: 'lf',
    // 不格式化vue文件，vue文件的格式化单独设置
    disableLanguages: ['vue'],
    // 不让prettier使用eslint的代码格式进行校验
    eslintIntegration: false,
    // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
    ignorePath: '.prettierignore',
    // 格式化的解析器，默认是babylon
    parser: 'babylon',
    // Require a 'prettierconfig' to format prettier
    requireConfig: false,
    // 不让prettier使用stylelint的代码格式进行校验
    stylelintIntegration: false,
    // 不让prettier使用tslint的代码格式进行校验
    tslintIntegration: false,
```
示例文件
``` js
// .prettierrc.js
module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  printWidth: 80,
  parser: 'babel',

  overrides: [
    {
      files: esNextPaths,
      options: {
        trailingComma: 'all',
      },
    },
  ],
};
```
``` conf
# .prettierrc
overrides:
  - files: "**/*.{js,mjs,cjs}"
    options:
      parser: meriyah
```

## eslint

``` js
    'array-callback-return':1//return 后面是否允许省略
    'arrow-parens': ['error', 'as-needed']// 箭头函数的参数可以不使用圆括号
    'consistent-return':0//要求 return 语句要么总是指定返回的值，要么不指定
    'camelcase':0//强制驼峰法命名
    'eqeqeq':0//强制全等( &#61;&#61;&#61; 和 !&#61;&#61;)
    'func-names':0//函数表达式必须有名字
    'global-require':0// 取消对require的验证，使得可以使用require来加载图片的相对路径
    'import/no-unresolved':0// 取消自动解析路径，以此开启alias的别名路径设置
    'import/extensions':0// 取消对文件扩展名的验证
    'indent': 'off'//缩进风格(强制使用一致的缩进)
    'linebreak-style':0// 取消换行符\n或\r\n的验证()
    'max-len':0//字符串最大长度
    'no-unused-vars':1//禁止出现未使用过的变量
    'no-redeclare':1//禁止多次声明同一变量
    'no-use-before-define':1//禁止在变量定义之前使用它们
    'no-unused-expressions':0// 允许使用未使用过的表达式，以此来支持a &amp;&amp; a()的代码形式
    'no-restricted-syntax':1//禁用特定的语法
    'no-plusplus':1//禁止使用&#43;&#43;，--
    'no-underscore-dangle':0// 允许在标识符中使用下划线
    'no-param-reassign':0// 禁止对 function 的参数进行重新赋值
    'no-nested-ternary':0// 禁止嵌套三元表达式
    'no-else-return':0//禁止 if 语句中 return 语句之后有 else 块
    'no-console': process.env.NODE_ENV === 'production'?'error':'off',
    'no-debugger': process.env.NODE_ENV === 'production'?'error':'off',
    'no-shadow': [1, { //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
      'allow' ['resolve', 'reject', 'done', 'cb']
    }],
    'prefer-rest-params':1//要求使用剩余参数而不是 arguments
    'prefer-arrow-callback':0//要求回调函数使用箭头函数
    'prefer-const':1//首选const
    'semi': false// 使用分号, 默认true
    'singleQuote': true// 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    'tabWidth':4// tab缩进大小,默认为4
    'template-curly-spacing': 'off'//要求或禁止模板字符串中的嵌入表达式周围空格的使用
```

## tsconfig

``` js
/* 基本选项 */
   "target":"es5",                      // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
   "module":"commonjs",                 // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
   "lib":[],                            // 指定要包含在编译中的库文件
   "allowJs":true,                      // 允许编译 javascript 文件
   "checkJs":true,                      // 报告 javascript 文件中的错误
   "jsx":"preserve",                    // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
   "declaration":true,                  // 生成相应的 '.d.ts' 文件
   "sourceMap":true,                    // 生成相应的 '.map' 文件
   "outFile":"./",                      // 将输出文件合并为一个文件
   "outDir":"./",                       // 指定输出目录
   "rootDir":"./",                      // 用来控制输出目录结构 --outDir.
   "removeComments":true,               // 删除编译后的所有的注释
   "noEmit":true,                       // 不生成输出文件
   "importHelpers":true,                // 从 tslib 导入辅助工具函数
   "isolatedModules":true,              // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

   /* 严格的类型检查选项 */
   "strict":true,                       // 启用所有严格类型检查选项
   "noImplicitAny":true,                // 在表达式和声明上有隐含的 any类型时报错
   "strictNullChecks":true,             // 启用严格的 null 检查
   "noImplicitThis":true,               // 当 this 表达式值为 any 类型的时候，生成一个错误
   "alwaysStrict":true,                 // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

   /* 额外的检查 */
   "noUnusedLocals":true,               // 有未使用的变量时，抛出错误
   "noUnusedParameters":true,           // 有未使用的参数时，抛出错误
   "noImplicitReturns":true,            // 并不是所有函数里的代码都有返回值时，抛出错误
   "noFallthroughCasesInSwitch":true,   // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

   /* 模块解析选项 */
   "moduleResolution":"node",           // 选择模块解析策略&#xff1a; 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
   "baseUrl":"./",                      // 用于解析非相对模块名称的基目录
   "paths":{},                          // 模块名到基于 baseUrl 的路径映射的列表
   "rootDirs":[],                       // 根文件夹列表，其组合内容表示项目运行时的结构内容
   "typeRoots":[],                      // 包含类型声明的文件列表
   "types":[],                          // 需要包含的类型声明文件名列表
   "allowSyntheticDefaultImports":true, // 允许从没有设置默认导出的模块中默认导入。

   /* Source Map Options */
   "sourceRoot":"./",                   // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
   "mapRoot":"./",                      // 指定调试器应该找到映射文件而不是生成文件的位置
   "inlineSourceMap":true,              // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
   "inlineSources":true,                // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

   /* 其他选项 */
   "experimentalDecorators":true,       // 启用装饰器
   "emitDecoratorMetadata":true         // 为装饰器提供元数据的支持
```

## [editorconfig](https://editorconfig.org)

示例文件
``` conf
# .editorconfig
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 80
trim_trailing_whitespace = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false

[COMMIT_EDITMSG]
max_line_length = 0
```