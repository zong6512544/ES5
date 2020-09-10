# 函数的声明(提升、匿名函数)

**$\color{green}{本章学习内容}$**

- 函数声明的方式
- 函数声明
  - 函数的name属性
  - 变量的提升
  - 函数声明的提升
- 表达式声明
  - 匿名函数
- 立即执行函数
- 函数声明和表达式声明使用注意事项

**$\color{green}{1.函数声明的方式}$**

$\color{orange}{1.1.定义(声明)函数的⽅式有两种：}$

- 函数声明(普通函数)
- 函数表达式声明

$\color{green}{2.函数声明}$

$\color{orange}{2.1.函数声明的语法:}$

```javascript
    function func(){
        //函数体
    }
```

$\color{orange}{2.2.函数的name 属性：}$

**通过这个属性可以访问到给函数指定的名字。**

```javascript

    //只在 Firefox、Safari、Chrome 和 Opera 有效
    console.log(func.name); //"func"

```

$\color{red}{2.3.变量的提升：}$

```javascript
        console.log(a); // undefined
        var a = 4;
```

在js引擎（也就是解释器）中会把我们上⾯的两⾏代码修改成以下三⾏

```javascript
        var a;    // a = undefined
        alert(a); // undefined
        a = 4;    // a = 4
```

**变量的提升只会优先提升声明，不会提升赋值.**

$\color{red}{2.4.函数声明提升：}$

- 意思是在执行代码之前会先读取函数声明。
- 这就意味着:可以把函数声明放在调用它的语句后面。

```javascript
        sayHi();

        function sayHi(){
            alert("Hi!");
        }
```

在js引擎（也就是解释器）中会把上面代码修改如下：

```javascript
        function sayHi(){
            alert("Hi!");
        }

        sayHi();
```

$\color{green}{3.表达式声明}$

$\color{orange}{3.1.表达式声明的语法:}$

```javascript
    var func = function (){
        //函数体
    }
```

这种形式看起来好像是常规的变量赋值语句：
**$\color{red}{即：创建一个函数并将它赋值给变量func}$**
这种情况下创建的函数叫做匿名函数（anonymous function）

- (function 关键字后面没有标识符name)
- (function是个没有名字的函数)

$\color{orange}{3.2.关于匿名函数：}$

- 匿名函数就是:没有名字的函数
- 匿名函数的 name 属性是空字符串
(匿名函数有时候也叫———拉姆达函数)
- $\color{red}{匿名函数执行完毕，会销毁代码块中的变量}$

$\color{red}{3.3.函数表达式提升（无法提升）：}$

**函数表达式与其他表达式一样，在使用前必须先赋值，否则会报错。**

```javascript
        func();
        //报错：func is not a function

        var func =function(){
            alert("HI!")
        }
```

$\color{green}{4.立即执行函数}$

- 使用()把函数封装成表达式
- 函数体末尾添加()表示执行函数
  （可以传参）

```javascript
        (function func(who) {
            alert(who + " is running");
        })('yzb');
```

$\color{green}{5.函数声明和表达式声明使用注意事项：}$

**1.某种情况下——函数声明使用(缺点):**

```javascript
        //不要这样做！
        var password = 123456;
        var condition = 123456==password?true:false;

        if (condition) {            //true
            function sayHi() {
                alert("密码正确!");
                //chrome下//判断true执行
            }
        } else {                    //false
            function sayHi() {
                alert("密码错误!");
                //在IE10及以下浏览器中
                //当判断为true的时候会执⾏
            }
        }
        sayHi();
```

**2.函数表达式使用(解决以上的不足):**

```javascript
        // 声明一个变量
        var func;

        var password = 123456;
        var condition = 123456==password?true:false;
        if (condition) {            //true
           func = function() {
                alert("密码正确!");
            }
        } else {                    //false
            func = function() {
                alert("密码错误!");
            }
        }
        sayHi();
```
