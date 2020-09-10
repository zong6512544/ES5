# 流程控制语句

**$\color{green}{流程控制语句-for-in语法}$**

$\color{orange}{1.for-in的作用}$

**for-in 语句是一种精准的迭代语句，可以用来枚举对象的属性。**

```javascript
        var arr = [1,2,3,4,5,6];
        for(var a in arr){
            console.log(a);
        }
```

$\color{orange}{2.ECMAScript 对象的属性没有顺序}$

- 通过 for-in 循环输出的属性名的顺序是不可预测的。
- 所有属性都会被返回一次，但返回的先后次序可能会因浏览器而异。

$\color{orange}{3.使用注意事项}$

- 如果表示要迭代的对象的变量值为 null 或 undefined ， for-in 语句会抛出错误。
- ECMAScript 5 更正了这一行为,对这种情况不再抛出错误，而只是不执行循环体。
- 为了保证最大限度的兼容性，建议在使用 for-in 循环之前，先检测确认该对象的值不是 null 或 undefined。
