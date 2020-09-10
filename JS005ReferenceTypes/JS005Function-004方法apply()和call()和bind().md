# Function（）函数的属性

**$\color{green}{本章学习内容}$**

- 介绍
- apply()
- call()
- apply和call()的实际使用
- bind()

**$\color{green}{1.介绍:}$**

apply()和call()的用途：

- $\color{red}{指定函数作用域}$
- $\color{red}{在特定的作用域中调用函数}$
- (ps:实际上等同于设置函数体内 this 对象的值)

bind()用途：

- $\color{red}{指定函数作用域}$
- 但是其返回一个函数体

**$\color{green}{2.apply()使用注意事项:}$**

**$\color{orange}{2.1.apply()方法接收两个参数：}$**

- 参数一：
$\color{red}{指定函数赖以运行的作用域}$

- 参数二：传递给函数的参数(数组格式)
  - $\color{red}{Array 的实例}$
  - $\color{red}{arguments 对象}$

**$\color{orange}{2.2.apply()指定作用域+传参实例如下：}$**

实例一(传参)：

```javascript
        function sum(num1, num2){
            return num1 + num2;
        }

        function callSum1(num1, num2){
            //因为callSum1()在全局作用域被调用
            //所以当前this指向window

            return sum.apply(this, arguments);
            // 传入 arguments 对象
        }

        function callSum2(num1, num2){
            //因为callSum2()在全局作用域被调用
            //所以当前this指向window

            return sum.apply(this, [num1, num2]);
            // 传入array实例
        }

        alert(callSum1(10,10)); //20
        alert(callSum2(10,10)); //20
```

实例二（作用域+传参）：

```javascript

        var name = "果果";
        var age = 20;

        let fn = {
            name: '老垃圾',
            age: 22,
            getInfo: function () {
                return this.name + this.age;
            }
        }

        console.log(fn.getInfo());
        // 老垃圾 22
        console.log(fn.getInfo.apply(window));
        // 果果 20

```

实例三（作用域+传参）：

```javascript

        var name = "果果";
        var age = 20;

        let fn = {
            name: '老垃圾',
            age: 22
        }

        function getInfo() {
            return this.name + this.age;
        }

        console.log(getInfo());
        // 果果 20
        console.log(getInfo.apply(fn));
        // 老垃圾 22

```

**$\color{green}{3.call()使用注意事项:}$**

**$\color{orange}{3.1.call()方法与 apply()方法的作用相同}$**

**$\color{orange}{3.2.call()和apply()的区别仅在于:}$**

- 1.参数一：
    $\color{red}{指定函数的作用域}$
- 2.接收参数的方式不同：
    **$\color{red}{(传递给函数的参数，必须逐个传入)}$**

实例一（传参）:

```javascript

        function sum(num1, num2) {
            return num1 + num2;
        }

        function callSum1(num1, num2) {
            //因为callSum1()在全局作用域被调用
            //所以当前this指向window

            return sum.call(this, num1,num2);
            //传递给函数的参数必须逐个列举出来
        }

        console.log(callSum1(10, 10)); //20


```

**$\color{green}{4.apply和call()的实际使用}$**

**$\color{red}{指定函数的作用域以及传参}$**
**然后执行函数**

实例如下：

```javascript

        var color = "red";

        var obj = {

            color: "pink",

            obj2: {
                color: "skyblue",
                func11: function (params1, params2) {
                    return this.color + params1 + params2;
                }
            },
            obj3: {
                color: "black"
            }
        }


        function test(params1, params2) {
            // 初始调用，作用域obj2
            // return obj.obj2.func11(params1,params2);
            // 打印skyblue1020

            // apply()指向window，用arguments对象传参
            // return obj.obj2.func11.apply(window,arguments);
            // 打印red1020

            // apply()指向obj3,用array实例传参
            // return obj.obj2.func11.apply(obj.obj3,[params1,params2]);
            // 打印black1020

            //call()指向obj3,参数必须逐个列举,打印black1020
            return obj.obj2.func11.call(obj.obj3,params1,params2);
            // 打印black1020
        }

        console.log(test(10, 20));

```

**$\color{green}{5.bind()使用注意事项}$**

**$\color{orange}{5.1.bind()会返回一个函数的实例(函数体)}$**
**$\color{orange}{5.2.bind()的传参类似于call(),必须逐个传递参数}$**

实例1：
**用bind()返回函数**

```javascript

    window.color = "red";

    var o = { color: "blue" };

    function sayColor(){
     alert(this.color);
    }

    // 此时返回的是一个函数体，需要再次执行
    var objectSayColor = sayColor.bind(o);

    objectSayColor(); //blue
```

实例2：
**用bind()返回带参数的函数（两种）**

```javascript

        window.color = "red";

        var o = {
            color: "blue"
        };

        function sayColor(newColor, newColor2) {
            console.log(this.color + newColor + newColor2);
        }

        //case01:
        //使用bind指向o作用域，
        //同call()传参一样逐个传入参数，
        //返回当前函数体，
        //加上()执行当前方法
        sayColor.bind(o, "pink", "white")();
        //bluepinkwhite



        //case02:
        //使用bind指向o作用域，
        //返回当前函数体，
        //再传参调用这个函数
        sayColor.bind(o)("pink", "white");
        //bluepinkwhite

```
