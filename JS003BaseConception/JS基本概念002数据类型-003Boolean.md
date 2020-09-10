# 数据类型-Boolean类型

**$\color{green}{本章学习内容}$**

- Boolean特点
- Boolean()函数
- Boolean常见的转换规则表
- Boolean自动执行转换的场景(隐式转换)

**$\color{green}{1.Boolean特点}$**

**$\color{orange}{1.1.Boolean该类型只有两个字面值：}$**

- true
- false

**$\color{orange}{1.2.注意：}$**

- **true 和 false 是区分大小写的。**
- **这两个值与数字值不是一回事**
  （true 不一定等于 1，而 false 也不一定等于 0）

**$\color{green}{2.Boolean()函数}$**

- **其作用是：将一个值转换为其对应的 Boolean 值**
- 可以对任何数据类型的值调用Boolean()函数，且总会返回一个 Boolean 值

```javascript
        var a = "1123a";
        var b = Boolean(a);
        console.log(b)    //true

        var c = "";
        var d =Boolean(c);
        console.log(d)    //false
```

**$\color{green}{3.Boolean常见的转换规则表}$**

| 数据类型  | 转换为true的值 | 转换为false的值              |
| --------- | -------------- | ---------------------------- |
| Boolean   | true           | false                        |
| String    | 任何非空字符串 | 空字符串                     |
| Number    | 任何非零数字值 | (包括⽆穷⼤ - Infinity) 0和NaN |
| Object    | 任何对象       | null                         |
| Undefined |                | undefined                    |

**$\color{green}{4.Boolean自动执行转换的场景(隐式转换)}$**

**$\color{orange}{4.1.常见的是用在判断场景：}$**

- if场景

**$\color{orange}{4.2.实例（if场景）}$**

```javascript
        var message = "Hello world!";

        if (message){
        //隐式转换，字符串不为空字符串，则为true
            console.log("Value is true");
        }

        var nothing = "";

        if(nothing){
        //隐式转换，字符串为空字符串，则为false
            console.log(nothing);
        }
```
