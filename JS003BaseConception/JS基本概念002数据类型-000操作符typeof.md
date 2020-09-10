# 数据类型-typeof操作符

**$\color{green}{本章学习内容}$**

- 数据类型
- typeof作用
- typeof操作数据的返回值
- typeof的使用和注意事项

**$\color{green}{1.数据类型}$**
  
**JavaScript的8大数据类型:**

- String
- Number
- Null
- Undefined
- Boolean
- Object
- Symbol     (es6新增)
- Bigint     (es10新增)

**$\color{green}{2.typeof作用}$**

**检测数据类型。**

**$\color{green}{3.typeof操作数据的返回值}$**

| 操作的数据          | 返回类型  |
| :------------------ | :-------- |
| 字符串              | String    |
| 数值                | Number    |
| 对象or空对象or数组（null) | Object    |
| 布尔值              | Boolean   |
| 未定义              | Undefined |
| 函数                | funciton  |

**$\color{green}{4.typeof的使用和注意事项}$**

**$\color{orange}{4.1.typeof的使用}$**

- **typeof 操作符的操作数可以是变量**
- **也可是数值字面量**

实例如下:

```javascript
    var message = "some string"; // 声明一个变量并初始化
    var arr = new Array(1,2,3,4,5);
    console.log(typeof message); // "string" //message为变量
    console.log(typeof 95);      // "number" //95为字面量
    console.log(typeof arr)      // "object" //数组
```

**$\color{orange}{4.2.注意事项}$**

- **typeof 是一个操作符而不是函数**
- **圆括号可以使用，但不是必需的**

下述两种写法本质上是一样的，没什么区别。

- typeof variables
- typeof(variables)

```javascript
        var message = "me";
        console.log(typeof message);   // "string"
        console.log(typeof(message));  // "string"
```

**$\color{orange}{4.3.typeof(null)的返回值}$**

- typeof(null) 返回值是：Object
- 因为：null被认为是一个空对象的引用

```javascript
        console.log(typeof(null));  //Object
```

**$\color{orange}{4.4.typeof(function)的返回值}$**

- 函数function在ECMAScript中是对象
- 但使用typeof(function)会得到一个(function类型)
- 因此通过 typeof 操作符区分函数和其他对象是有必要的

```javascript
        function a(){
            console.log(1)
        }
        console.log(typeof(a))       //function

        var b= {

        }
        console.log(typef(b))        //Object
```

**$\color{orange}{4.5.typeof（RegExp)的使用}$**

- Safari 5 及之前版本、Chrome 7 及之前版本:
  typeof(RegExp)会返回"function"
- 而其他浏览器在这种情况下会返回"object"
