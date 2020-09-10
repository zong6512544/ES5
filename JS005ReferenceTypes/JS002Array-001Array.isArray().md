# 检测数组Array.isArray()

**$\color{green}{本章学习内容}$**

- 介绍instanceof
- 某些方面instanceof的不足
- Array.isArray()方法

**$\color{green}{1.介绍instanceof}$**

对于一个网页，或者一个全局作用域而言，使用 instanceof 操作符就能得到满意的结果。

```javascript

    if (value instanceof Array){
        //对数组执行某些操作
    }

```

**$\color{green}{2.某些方面instanceof的不足}$**

- **instanceof 操作符的问题在于:**
  它假定只有一个全局执行环境。

- **如果网页中包含多个框架:**
  那实际上就存在两个以上不同的全局执行环境。
  从而存在两个以上不同版本的 Array 构造函数。
- **因此：**
  如果你从一个框架向另一个框架传入一个数组。
  那么传入的数组与在第二个框架中原生创建的数组,分别具有各自不同的构造函数。

**$\color{green}{3.Array.isArray()方法}$**

**这个方法的目的是:**

- 最终确定某个值到底是不是数组
- 而不管它是在哪个全局执行环境中创建的

```javascript

    if (Array.isArray(value)){
        //对数组执行某些操作
    }

```
