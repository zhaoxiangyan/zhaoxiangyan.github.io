# 高级用法

``` ts
interface User{
    name:string;
    age?:number;
    class?:string;
    sex:string;
}
```
## keyof
获取类型键值

## in
获取联合类型的值
``` ts
type name = 'firstName'|'lastName';
type TName={
    [key in name]:string;
}={
    firstName:string;
    lastName:string;
}
```

## Pick
从类型定义的属性中，选取指定一组属性，返回一个新的类型定义
``` ts
type Pick<T,K extends keyof T> = {[P in K]：T[P]};

Pick<User,'name'> = {
    name:string;
}
```

## Record
以typeof格式快速创建一个类型，此类型包含一组指定的属性且都是必填
``` ts
type Record<K extends keyof any,T> = {[P in K]:T};

Record<keyof User,string> = {
    name:string,
    age:string,
    class:string;
    sex:string;
}
```

## Partial
将传入的类型变为可选项
``` ts
type Partial<T> = {[P in keyof T]?:T[P]};

Partial<User> = {
    name?:string;
    age?:number;
    class?:string;
    sex?:string;
}
```

## Required
将传入的类型变为必选项
``` ts
type Required<T> = {[P in keyof T]-?:T[P]}</T>;
// -?: 标记映射类型的属性为必需
Required<User> = {
    name:string;
    age:number;
    class:string;
    sex:string;
}
```

## Exclude
两个参数对比过滤出前面参数独有的
``` ts
type Exclude<T, U> = T extends U ? never : T;

type IED = '1' | '2' | '3'|'4';
type IEE = '4';
Exclude<IED, IEE> =  '1'|'2'|'3';
Exclude<User,User&{a:string;}> = User;
```

## Extract
与Exclude相同,取值逻辑相反
``` ts
type Extract<T,U> = T extends U ? T:never;
```

## Omit
将前面参数中后面的属性过滤掉
``` ts
type Omit<T,K extends keyof any> = Pick<T,Exclude<keyof T,K>>;

Omit<User,'sex'> = {
    name:string;
    age?:number;
    class?:string;
}
```

# 特殊符号

## ?
属性或参数中使用：表示该属性或参数可选项

## !
属性或参数中使用：表示强制解析（告诉ts编译器，这里一定有值）
变量后使用：表示类型推断排除null、undefined



