# Function 函数内部属性

**$\color{green}{本章学习内容}$**

- arguments
  - arguments[index]或arguments
  - arguments.callee
  - someFunction.caller
- this
- 关于在严格模式下

**$\color{green}{1.arguments:}$**

**$\color{orange}{1.1. arguments或argument[index] 的主要用途}$**

- arguments保存函数调用时实际传入的参数
- arguments[index]取得函数调用时实际传入的指定参数
- (详见第三章)

**$\color{orange}{1.2. arguments.callee 的属性}$**

- **此属性是一个指针，指向当前拥有arguments对象的函数**
- 也就是说这个对象指向当前函数本身

实例如下：

```javascript

    function me() {
        console.log(arguments.callee)
    }
    me();
```

例如：使用递归实现阶乘

**方法一：**

```javascript
    function arg(num){
        if (num <=1) {
            return 1;
        } else {
            return num * arg(num-1)
        }
    }
    console.log(arg(4));//4
```

不足之处：

此方法定义函数，递归的功能是可以实现，
但问题是这个函数的执行与函数名 arg 紧紧耦合在了一起
（若要改动函数名，全都要改动，造成了很多不必要的麻烦）

**方法二：为了解决上述代码的耦合性。**

$\color{red}{建议使用 arguments.callee}$

```javascript
        function arg(num) {
            if (num <= 1) {
                return 1;
            } else {
                return num * arguments.callee(num - 1);
            }
        }
        console.log(arg(4)); //4
```

**优点：**

无论函数名怎么改变，都可以通过arguments.callee找到它。
(arg函数中拥有arguments.callee属性，这个属性会找到arg地址)

**$\color{orange}{1.3. 函数对象的属性：function.caller}$**

- **此属性保存着调用当前函数的-----函数引用**
  (也就是函数A调用B,则A.caller就指向B)
- **如果是在全局作用域中调用当前函数，它的值为 null。**

```javascript
    function outer(){

        //调用inner()
        inner();

        cosole.log(1)
    }

    function inner(){

        // 当前函数inner()被outer（）调用
        // 所以inner.caller中保存着：
        // 调用当前函数（inner）的---函数(outer)的--引用

        alert(inner.caller);

        //  输出
        //  function outer(){
        //      inner();
        //      cosole.log(1)
        //  }  
    }

    outer();
```

**$\color{orange}{1.4. 结合arguments.callee和function.caller的使用}$**

```javascript
        function outer() {
            inner();
            console.log(1)
        }

        function inner() {
            // 1.使用arguments.calle获取当前函数

            // 2.使用arguments.calle.caller
            // 获取--调用当前函数的--函数的--引用

            // alert(inner.caller);
            alert(arguments.callee.caller);
        }
        outer();
```

**$\color{green}{2.this:}$**

**$\color{orange}{2.1.this引用的是函数执行的环境对象:}$**

**也就是函数调⽤语句所处的作⽤域。**

**$\color{orange}{2.2.使用this的注意事项:}$**

- **当在全局作用域中调用函数时，this 对象引用的就是 window**
- **当在局部作用域中调用函数时，this 对象引用的就是所处的对象**

实例一：

```javascript
        window.color = "red";

        var o = {
            color: "blue"
        };

        function sayColor() {
            alert(this.color);
        }

        //全局作用域
        sayColor(); //"red"

        //局部作用域
        //定义一个动态属性，并初始化=sayColor()函数地址
        o.sayColor = sayColor;
        o.sayColor(); //"blue"
```

实例二：

```javascript
        var color = "我是window下面的颜色black"

        var obj = {
            color:"我是obj改变前的颜色red",
            changeColor:function(){
                var color = "我是ojb改变后的颜色pink";
                return this.color;
                //当前的this指向obj
                //因此返回值是obj.color
                //"我是obj改变前的颜色red"
            }
        }

        // 局部作用域
        console.log(obj.changeColor());
        //"我是obj改变前的颜色red"
```

**$\color{green}{3.关于在严格模式下:}$**

- 访问 arguments.callee会导致错误。
- arguments.caller 属性，但在严格模式下访问它也会导致错误。
- 以上变化都是为了加强这门语言的安全性，这样第三方代码就不能在相同的环境里窥视其他代码了。
- 严格模式还有一个限制：不能为函数的 caller 属性赋值，否则会导致错误。
