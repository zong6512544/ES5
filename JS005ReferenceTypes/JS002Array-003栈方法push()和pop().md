# 栈方法

**$\color{green}{本章学习内容}$**

- 关于栈方法
- push()
- pop()

**$\color{green}{1.关于栈方法}$**

- 栈是一种 LIFO（Last-In-First-Out，后进先出）的数据结构
  (也就是最新添加的项最后被移除)
- 而栈中项的插入（叫做推入）和移除（叫做弹出）
  只发生在一个位置——栈的顶部
- ECMAScript 为数组专门提供了 push()和 pop()方法
  以便实现类似栈的行为

**$\color{green}{2.push()方法}$**

**可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。**

实例如下：

```javascript
        var colors = new Array();                  // 创建一个数组
        var count = colors.push("red", "green");   // 推入两项
        alert(count);                              // 2
```

**$\color{green}{3.pop()方法}$**

**从数组末尾移除最后一项，减少数组的 length 值，返回移除的项。**

实例如下：

```javascript
        var colors =new Array("red", "green","black");
        var item = colors.pop();    // 移除数组末尾项，并返回移除项
        alert(item);                // "black"
        alert(colors.length);       // 2
```
