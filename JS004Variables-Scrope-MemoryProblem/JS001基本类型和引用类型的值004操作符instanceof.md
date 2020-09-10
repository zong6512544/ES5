# 操作符instanceof

**$\color{green}{本章学习内容}$**

typeof和instanceof区别

- typeof
- instanceof

**$\color{green}{1. typeof和instanceof区别}$**

**$\color{red}{1.1. typeof作用}$**

- **通常要检测一个变量是不是基本数据类型，我们会使用typeof操作符**
- **typeof 操作符是确定一个变量是字符串、数值、布尔值，还是 undefined 的最佳工具**

**$\color{red}{1.2. instanceof作用}$**

- **但在检测引用类型的值时，typeof这个操作符的用处不大**
- **通常用instanceof判断参数是哪种类型的对象**

```javascript
    alert(person instanceof Object); // 判断person 是 Object 吗

    alert(colors instanceof Array); // 判断 colors 是 Array 吗

    alert(pattern instanceof RegExp); // 判断 pattern 是 RegExp 吗
```
