# 函数

**$\color{green}{本章学习内容}$**

- 函数的参数
- arguments属性的使用(caller,calle,[])

**$\color{green}{1.函数的参数：}$**

$\color{orange}{1.1.函数的参数使用须知}$

**ECMAScript 函数不介意传递进来多少个参数，也不在乎传进来参数是什么数据类型。**

- 你定义的函数只接收两个参数，在调用这个函数时也不一定要传递两个参数。
- 可以传递一个、三个甚至不传递参数，而解析器永远不会有什么怨言。

实例如下：

```javascript
    fn(name,age){

    }

    fn("yzb",22,"张家界")
    fn("yzb")
```

解析：

- **因为 ECMAScript 中的参数在内部是用一个数组来表示的。**
- 函数接收到的始终都是这个数组，而不关心数组中包含哪些参数。
（如果有参数的话）

$\color{orange}{1.2.函数的参数的特点}$

ECMAScript 函数的一个重要特点：
命名的参数只提供便利，但不是必需的

$\color{orange}{1.3.NOTICED}$
ES5中的所有参数传递的都是值，不可能通过引用传递参数。

**$\color{green}{2.arguments属性}$**

- **$\color{red}{arguments获取的参数是调用方法时候实际传入的值}$**
- **$\color{red}{而不是根据定义函数时的形参}$**

**$\color{orange}{2.1.arguments.length的作用}$**

获知有多少个参数传递给了函数()

**$\color{orange}{ps:}$**

- **对象的长度是调用函数时实际传入的参数个数**
- **不是由定义函数时的命名参数的个数决定的**

实例如下：

```javascript
        function howManyArgs() {
            alert(arguments.length);
        }
        howManyArgs("string", 45);  //2
        howManyArgs();              //0
        howManyArgs(12);            //1
```

**$\color{orange}{2.2.arguments[index]的作用}$**

**通过index下标参数，接收第任意个参数。**

实例如下：

```javascript

        function doAdd() {
            if(arguments.length == 1) {
                alert(arguments[0] + 10);
            } else if (arguments.length == 2) {
                alert(arguments[0] + arguments[1]);
            }
        }
        doAdd(10);          //20
        doAdd(30, 20);      //50
```

**$\color{orange}{2.3.命名参数可以与 arguments属性一起使用}$**

实例如下：

```javascript
        function doAdd(num1, num2) {
            if (arguments.length == 1) {
                alert(num1 + 10);
            } else if (arguments.length == 2) {
                alert(arguments[0] + num2);
            }
        }

        doAdd(1);   //  11
        doAdd(1,5); //  6
```

**$\color{orange}{ 2.4关于arguments最具独特的一点}$**

- **$\color{red}{arguments[index]的值永远与对应命名参数的值保持同步。}$**
- 但arguments[index]和参数并不是访问相同的内存空间
- 它们的内存空间是独立的，不过它们的值会同步

实例如下：

```javascript
        function doAdd(num1, num2) {
            arguments[1] = 10;
            alert(arguments[0] + num2);
            // 如上所说，此时的num2和arguemnts[1]一致
        }
        doAdd(1, 5);    //  11
```
