# 队列方法

**$\color{green}{本章学习内容}$**

- 关于队列方法
- shift()
- unshift()

**$\color{green}{1.关于队列方法}$**

- 队列数据结构的访问规则是 FIFO
- (First-In-First-Out，先进先出)
- (也就是最新添加的最先被移除)

**$\color{green}{2.shift()方法}$**

**移除数组中的第一个项并返回该项，同时将数组长度减 1。**

实例如下：

```javascript
    var arr = new Array();
    arr.push("red","orange","yellow");  
    alert(arr.length)                   // 3
    alert(arr.shift())                  // red
    alert(arr.length)                   // 2
```

**$\color{green}{3.unshift()方法}$**

**与 shift()的用途相反:**
**它能在数组前端添加任意个项,并返回新数组的长度**

实例如下：

```javascript
    var arr = new Array();

    arr.push("red","orange","yellow");  
    alert(arr.length)                   //3
    alert(arr.unshift("me","she"))      //5
```
