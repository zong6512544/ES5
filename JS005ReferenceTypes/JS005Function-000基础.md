# Function 基础

**$\color{green}{本章学习内容}$**

- 1.Function特点
- 2.函数的定义
- 3.详解讲解---函数名是指向函数的指针
- 4.深入理解---JS中没有函数(方法)重载
- 5.函数声明与函数表达式声明

**$\color{green}{1.Function特点:}$**

- 函数实际上是对象
- 函数都是Function类型的实例，而且都与其他引用类型一样具有属性和方法。
- 由于函数是对象，因此函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定。
- ECMAScript没有函数（方法）重载，后声明的函数会覆盖前面的函数

**$\color{green}{2.函数的定义:}$**

**$\color{orange}{2.1.函数声明:}$**

```javascript
    function sum (num1, num2) {
        return num1 + num2;
    }
```

**$\color{orange}{2.2.函数表达式声明:}$**

```javascript
    var sum = function(num1, num2){
        return num1 + num2;
    };
```

**$\color{orange}{2.3.使⽤Function构造函数声明函数:}$**

这种方式更便于理解$\color{red}{函数是对象，函数名是指针}$
(但不建议使用)

```javascript
    var myfun = new Function('num1', 'num2', 'return num1+num2');
    console.log(myfun(1,2))//3
```

- 因为这种语法会导致解析两次代码
- 第⼀次是解析常规ECMAScript 代码
- 第⼆次是解析传入构造函数中的字符串
- 从⽽影响性能。

**$\color{green}{3.详解-函数名是指向函数的指针:}$**

//定义一个函数:

```javascript
    var obj01 = function(params1,params2){
        return params1+params2;
    }
    console.log(obj01(10,10));//20
```

//定义第二个函数，且等于第一个函数:

```javascript
    var obj02 = obj01;
```

//此时函数名obj02和obj01指向同一个地址的函数
//因此obj02调用的是和obj01同一个函数

```javascript
    console.log(obj02(10,10));//20
```

//设置第一个obj01为null:
//所以obj01指向的地址为空:

```javascript
    obj01 = null;
    console.log(obj01);//null
```

// 所以obj01无法调用函数:

```javascript
    console.log(obj01(10,10));//obj01 is not a function**
```

//但是obj02已经存放了一个内存地址
//因此，obj01不会对obj02造成影响

```javascript
    console.log(obj02(10,10))
```

**$\color{green}{4.深入理解-JS中没有函数(方法)重载:}$**

- **$\color{red}{如果声明了两个同名函数}$**
- **$\color{red}{后面的函数覆盖了前面的函数}$**

实例如下：

```javascript
        // 定义一个函数
        function obj01(params){
            return params+100;
        }
        console.log(obj01(100))
        //200

        //定义重名的方法(尝试进行方法重载)
        obj01 = function (params){
            return params+200;
        }
        console.log(obj01(100));
        //300

        //没有调用到上面的obj01，而是被下面的obj01覆盖了
```

**$\color{green}{5.函数声明与函数表达式声明:}$**

**解析器在向执行环境中加载数据时：**

- $\color{red}{会率先读取函数声明}$
    使其在执行任何代码之前可用（可以访问）
- $\color{red}{函数表达式声明}$
    则必须等到解析器执行到它所在的代码行，才会真正被解释执行。

**5.1.如果调用$\color{red}{函数声明}$的函数：**
即使调用方法在它的声明之前也能访问，因为JavaScript引擎也能把函数声明提升到顶部。

```javascript
        alert(sum(10,10));
        // 会正确运行,打印出20

        function sum(num1, num2){
         return num1 + num2;
        }
```

**5.2.如果调用$\color{red}{函数表达式声明}$的函数**
则必须在声明的变量名之后才能调用function

```javascript
        alert(sum(10,10));
        // 错误使用，sum is not a function

        var sum = function(num1, num2){
            return num1 + num2;
        }

        alert(sum(10,10))
        // 正确，20
```
