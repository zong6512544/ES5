# 数据类型-Undefined类型

**$\color{green}{本章学习内容}$**

- Undefined特点
- Undefined的注意事项

**$\color{green}{1.Undefined特点}$**

**Undefined 类型只有一个值：undefined。**

**$\color{green}{2.Undefined的注意事项}$**

**$\color{orange}{2.1.声明（定义）变量，却未初始化变量}$**

这个变量会被赋予undefined值

```javascript
        var a;            //声明变量，未初始化
        console.log(a);   //undefined
```

**$\color{orange}{2.2.使用未定义（声明）的变量}$**

报错:（xxx-is-not-defined）

```javascript
        console.log(a)
        //报错！a未定义
        //a is not defined
```

**$\color{red}{定义(声明)变量时初始化(赋值)变量，是明智的选择}$**

**$\color{orange}{2.3.使用typeof操作变量返回undefined时}$**

- 变量没有被定义（没有被声明）
- 变量没有被初始化（没有被赋值）

```javascript
        var variables;
        //定义一个变量，但未初始化(默认为undefined)

        console.log(typeof variables);
        //输出 undefined

        console.log(typeof numbers);
        //numbers没有被声明（定义）
        //输出 undefined
```

- 未定义(声明)的变量
- 定义(声明）了却未初始化(赋值)的变量
- **两者在typeof()操作符下返回值是相同的！**

**$\color{orange}{2.4.NOTICED:}$**

- 在初始化(赋值)变量的前提下：
- 使用typeof操作符返回"undefined"时
- 就能检测到这个变量是未被定义（声明），而不是未被初始化(赋值)。

```javascript
        var a=1;         //初始化变量
        alert(typeof a); //Number
```
