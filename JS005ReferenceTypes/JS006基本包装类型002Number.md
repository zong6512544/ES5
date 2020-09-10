# 基本包装类型---Number

**$\color{green}{本章学习内容}$**

- 理解Number
- toFixed()
- toExponential()
- toPrecision()

**$\color{green}{1.理解Number}$**

- Number是数字值对应的引用类型。
- 创建Number对象，可以在调用Number构造函数时传入相应的数值参数。

```javascript
        var num = new Number(123);

        console.log(num)
        console.log(num.toString())
        console.log(num.toString(10))
        console.log(num.toString(8))
        console.log(num.toString(16))

```

**$\color{green}{2.Fixed()}$**

- **返回指定小数位的数值字符串。**
- **如果数值本身包含的小数位比指定的多，那么超出部分将进行四舍五入**

```javascript
    // 未超出小数位
    var num = 12345;
    console.log(num);           //12345       //number
    console.log(num.toFixed(5));//12345.00000 //string

    // 超出小数位
    var floats01 = 123456.789;
    var floats02 = 123456.123;
    console.log(floats01.toFixed(2));//123456.79
    console.log(floats02.toFixed(2));//123456.12
```

**$\color{green}{3.toExponential()}$**

- **用于格式化数值**
- **传入的参数也是小数位取值的个数位**
  (超出部分四舍五入)
- **该方法返回以指数表示法(也称为e表示法)表示的数值字符串**
  (也就是科学计数法)

```javascript
        var num = 123.4567;

        console.log(num.toExponential(2));//1.23e+2
        console.log(num.toExponential(4));//1.2346e+2
```

**$\color{green}{4.toPrecision()}$**

- **该方法可能返回固定大小（fixed）格式**
- **也可能返回指数(exponential)格式**
- **具体规则是看哪种格式合适就自动使用哪种格式**
- **该方法接受一个参数：**
  表示数值的所有数字的位数(不包含指数部分)
- **超出的部分将会四舍五入**

```javascript

    var num = 123.45678;

    console.log(num.toPrecision(1));//1e+2
    console.log(num.toPrecision(2));//1.2e+2
    console.log(num.toPrecision(3));//123
    console.log(num.toPrecision(4));//123.5

```
