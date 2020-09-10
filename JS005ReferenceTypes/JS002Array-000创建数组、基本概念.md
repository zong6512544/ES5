# 数组的创建和基本概念

**$\color{green}{本章学习内容}$**

- array数组的基本概念
- 创建数组的两种基本方式

**$\color{green}{1.array类型特点}$**

- 除了 Object 之外，Array 类型恐怕是 ECMAScript 中最常用的类型了。
- 而且，ECMAScript 中的数组与其他多数语言中的数组有着相当大的区别。
- 虽然 ECMAScript 数组与其他语言中的数组都是数据的有序列表，但与其他语言不同的是，ECMAScript 数组的每一项可以保存任何类型的数据。
- 也就是说，可以用数组的第一个位置来保存字符串，用第二位置来保存数值，用第三个位置来保存对象，以此类推。
- 而且，ECMAScript 数组的大小是可以动态调整的，即可以随着数据的添加自动增长以容纳新增数据。

**$\color{green}{2.创建数组的两种基本方式}$**

**$\color{orange}{2.1.使用表达式声明： }$**

Array 构造函数

```javascript
        var colors = new Array();
```

如果预先知道数组要保存的项目数量，也可以给构造函数传递该数量:

```javascript
        var colors = new Array(20)
        console.log(colors.length);//20
```

也可以向 Array 构造函数传递数组中应该包含的项:

```javascript
        var colors = new Array("red", "blue", "green");
```

**$\color{orange}{2.2.字面量表示法}$**

正确姿势：

```javascript

    var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组

    var names = []; // 创建一个空数组
```

不建议：

```javascript


    var values = [1,2,]; // 不要这样！这样会创建一个包含 2 或 3 项的数组

    var options = [,,,,,]; // 不要这样！这样会创建一个包含 5 或 6 项的数组
```
