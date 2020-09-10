# 单体内置对象Globl

**$\color{green}{本章学习内容}$**

- Global特点
- Global方法

**$\color{green}{1.Global特点}$**

- Global（全局）对象可以说是 ECMAScript 中最特别的一个对象了，因为不管你从什么角度上看，这个对象都是不存在的。
- 不属于任何其他对象的属性和方法，最终都是它的属性和方法
- 事实上，没有全局变量或全局函数；所有在全局作用域中定义的属性和函数，都是 Global 对象的属性。
- 本书前面介绍过的那些函数，诸如 isNaN()、isFinite()、parseInt()以及 parseFloat()，实际上全都是 Global对象的方法。

**$\color{green}{2.Global方法}$**

**$\color{orange}{除此之外，Global 对象还包含其他一些方法:}$**

- **URI编码方法**
- **eval()方法**
  