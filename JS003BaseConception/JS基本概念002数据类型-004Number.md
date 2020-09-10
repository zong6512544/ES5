# 数据类型-Number类型

**$\color{green}{本章学习内容}$**

- Number类型的数据
- 整数值
- 浮点数值
- NaN(Not a Number)非数值
- 数值转换的方法(Number()、parseInt(),parseFloat())

**$\color{green}{1.Number类型的数据}$**

Number类型⼀共有两种数据：

- **$\color{red}{整型（整数）}$**
- **$\color{red}{浮点型（带⼩数点）}$**

(这种类型使⽤IEEE754格式来表⽰。)

**$\color{green}{2.整数值}$**

**$\color{orange}{2.1.⼗进制整数}$**

最基本的⼀个数值字⾯量就是⼗进制整数

```javascript
        var intNum = 55;
        // 整数
```

**$\color{orange}{补充:}$**
除了以十进制表示外，整数还可以通过八进制（以 8 为基数）或十六进制（以 16 为基数）的字面值来表示

**$\color{orange}{2.2.八进制字面值}$**

- 八进制字面值的第一位必须是零（0）
- 然后是八进制数字序列（0～7），（以8为基数）

```javascript
        var octalNum1 = 070; // 八进制的 56
        var octalNum2 = 079; // 无效的八进制数值——解析为 79
        var octalNum3 = 08;  // 无效的八进制数值——解析为 8
```

**$\color{orange}{2.3.十六进制字面值}$**

- ⼗六进制前导必须是0x
- 后面必须是（0-9及a-f）

```javascript
        var n = 0xA; //⼗六进制的 10
```

**$\color{green}{3.浮点数值}$**

$\color{orange}{3.1. 什么是浮点数值?}$

- 所谓浮点数值，就是该数值中必须包含一个小数点
- 并且小数点后面必须至少有一位数字
- 虽然小数点前面可以没有整数，但我们不推荐这种写法

```javascript
        var floatNum1 = 1.1;
        var floatNum2 = 0.1;
        var floatNum3 = .1; // 有效，但不推荐
```

$\color{orange}{3.2.浮点数值和整数值的联系}$

- 保存浮点数值的内存空间，是保存整数值的两倍
- 因此ECMAScript会随时将浮点数值转换为整数值

```javascript
        var n = 1.;   // ⼩数点后⾯没有数字——解析为1
        var n = 10.0; // 整数——解析为10
```

**$\color{orange}{3.3.对于那些极⼤或极⼩的数值的处理}$**

- 可以⽤--e--（即科学计数法）表示
- (--e--)表示这个数值的前⾯的10的指数次幂

```javascript
        var n = 2.14e9;
        console.log(n);       //n = 2140000000 = 2.14*10的9次幂
```

**$\color{orange}{3.4.浮点数值的精度问题}$**

- 浮动点值的最⾼精度有17位⼩数
- 但是算术运算中可能不会精确
- 基于这样的原因，做判断的时候⼀定要考虑这个问题

```javascript
    var n = 0.1+0.2; //0.30000000000000004;

    if(n === 0.3){
        console.log(11)
    }else{
        console.log('不好意思我不是0.3')
    }

    var n = 0.2+0.4 //0.6000000000000001
```

**$\color{orange}{ps:}$**

关于浮点数值计算会产⽣舍入误差的问题:

- 这是使⽤基于IEEE754 数值的浮点计算的通病,并非ECMAScript 独此⼀家
- 其他使⽤相同数值格式的语言也存在这个问题

**$\color{orange}{3.5.浮点数值的范围}$**

浮点数值的范围在：Number.MIN_VALUE 和 Number.MAX_VALUE之间。

```javascript
        console.log(Number.MIN_VALUE)
        console.log(Number.MAX_VALUE)
```

**$\color{orange}{ps:}$**

如果超过了上述两个值的范围就转成正⽆穷和负⽆穷。

```javascript
        var n = 10e10000000;  //Infinity //正无穷
        var n = -10e10000000; //-Infinity//负无穷
```

**$\color{orange}{3.6.正无穷和负无穷(+infinity和-infinity)}$**

- Number.POSITIVE_INFINITY(正无穷)
- Number.NEGATIVE_INFINITY(负无穷)

**$\color{orange}{ps:}$**
上述代码即可获取+Infinity(正无穷)和-Infinity(负无穷)的值

```javascript
        alert(Number.NEGATIVE_INFINITY) //-Infinity
        alert(Number.POSITIVE_INFINITY) //Infinity
```

**$\color{orange}{3.7.isFinite()函数的作用}$**

**确定一个数值是不是有穷的**
(是否位于最小数和最大的数值之间)

- 如果没有超出返回true
- 超过了就返回false

```javascript
        var n = 100e1000;
        console.log(isFinite(n)) //false //已经超出了我们的最⼤范围值
```

**$\color{orange}{ps:}$**

- 尽管在计算中很少出现某些值超出表⽰范围的情况
- 但在执⾏极⼩或极⼤数值的计算时，检测监控这些值是可能的，也是必需的

**$\color{green}{4.NaN(Not a Number)非数值}$**

**$\color{orange}{4.1.什么是NaN?}$**

NaN是⼀个特殊的数值:
$\color{red}{⽤于表⽰⼀个要返回Number的操作数,却未返回Number的情况}$
（这样就不会抛出错误了）

**$\color{orange}{ps:}$**

- 在其他编程语⾔中，任何数值除以0 都会导致错误从⽽停⽌代码执⾏
- 但在ECMAScript 中，任何数值除以0 会返回NaN，因此不会影响其他代码的执⾏

```javascript
        var n = 0 / 0; //NaN
        var n = 12 / 0; //infinity
        var n = 12 / 0 * 0 //NaN
```

**$\color{orange}{4.2.NaN 两个非同寻常的特点}$**

- **$\color{red}{任何涉及NaN的操作（例如NaN/10）都会返回NaN}$**
- **$\color{red}{NaN 与任何值都不相等，包括NaN本⾝}$**

```javascript

        console.log(Number.NaN) //NaN
        console.log(NaN + 1) //NaN

        console.log(NaN == NaN); //false
```

**$\color{orange}{4.3.isNaN()函数的作用}$**

**isNaN()函数的作用:用于判断这个参数是否为"NaN"。**

工作原理:

- isNaN() 在接收到一个值之后，会尝试将这个值转换为数值
- 某些不是数值的值会直接转换为数值
  （例如字符串 "10" 或 Boolean 值）
- 任何不能被转换为数值的值都会导致这个函数返回 true

```javascript
        console.log(isNaN(NaN));      //true
        console.log(isNaN(10));       //false（10 是一个数值）
        console.log(isNaN("10"));     //false（可以被转换成数值 10）
        console.log(isNaN("blue"));   //true（不能转换成数值）
        console.log(isNaN(true));     //false（可以被转换成数值 1）
```

**$\color{orange}{ps:}$**
**isNaN()确实也适用于对象**

- 在基于对象调用 isNaN()函数时，会首先调用对象的 valueOf()方法
- 然后确定该方法返回的值是否可以转换为数值
- 如果不能，则基于这个返回值再调用 toString()方法，再测试返回值

$\color{green}{5.数值转换的三种方法}$

| 方法名       | 作用                             |
| ------------ | -------------------------------- |
| number()     | 用于任何数据类型                 |
| parseInt()   | 专门用于将数值or字符串转换成整数 |
| parseFloat() | 专门用于将数值or字符串转换成浮点数值 |

$\color{green}{6.Number()转换的转换规则}$

| 非字符串数据转换 | 结果                                |
| ---------------- | ----------------------------------- |
| Boolean 值       | true 和 false 将分别被转换为 1 和 0 |
| 数字值           | 简单的传入和返回                    |
| null 值          | 返回 0                              |
| undefined        | 返回 NaN                            |

```javascript
        var num1 = Number(true);       //1
        var num2 = Number(11);         //11
        var num3 = Number(null);       //0
        var num4 = Number(undefined);  //NaN
```

| 字符串数据转换                                         | 结果                                                                                    |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| 只包含数字的字符串 <br/>（包括前面带正号或负号的情况） | 则将其转换为数值。<br/>如:"1"会变成 1,而"011"会变成 11。<br/>（注意：前导的零被忽略了） |
| 字符串中包含有效的浮点格式                             | 则将其转换为对应的浮点数值。<br/>如:"1.1"会转换为1.1。<br/>（同样，也会忽略前导零）     |
| 字符串中包含有效的十六进制格式                         | 则将其转换为相同大小的十进制整数值                                                      |
| 字符串是空的（不包含任何字符）                         | 则将其转换为 0                                                                          |
| 除上述格式之外的字符                                   | 则将其转换为 NaN                                                                        |

```javascript
        var num1 = Number("000011");       //11
        var num2 = Number("1.1")           //1.1
        var num3 = Number("0xf");          //15
        var num4 = Number("");             //0
        var num5 = Number("hello word");   //NaN
```

| 对象数据的转换 |    执行过程 |
| -------------- | --- |
|     Object           |1. 首先会调用valueOf()方法，然后依照前面的规则转换返回的值。<br/>2.如果转换的结果是 NaN，则调用对象的 toString()方法，然后再次依照前面的规则转换返回的字符串值|

```javascript
        var obj = {
            toString:function(){
                return '0xa' ;  //可以把return '0xa' 改成数值或普通字符串查看结果
                }
            }
        alert (Number(obj))     //10
```

$\color{green}{6.parseInt()转换的转换规则}$

$\color{orange}{6.1.parseInt()相对于Number()优点：}$

- 由于Number()函数在转换字符串时比较复杂⽽且不够合理
- 因此在处理整数的时候更常⽤的是parseInt()函数

$\color{orange}{6.2.parseInt()特点：}$

- parseInt()函数在转换字符串时，更多的是看其是否符合数值模式
- 它会忽略字符串前面的空格，直至找到第一个非空格字符

$\color{orange}{6.3.parseInt()转换规则：}$

|转换的数据类型|结果|
|-|-|
|如果字符串第一个字符不是数字or负号|返回 NaN。|
|转换空字符串|返回 NaN<br/>（Number()对空字符返回 0）|
|如果第一个字符是数字字符，parseInt()会继续解析第二个字符，直到解析完所有后续字符或者遇到了一个非数字字符|返回被解析到的数值。<br/>如：<br/>一、"1234blue"会被转换为 1234<br/>因为"blue"为非数值字符串,解析到此将终止解析<br/>二、类似的，"22.5"会被转换为 22<br/>(因为小数点并不是有效的数字字符)|

```javascript
        (parseInt('px1000'))//第一个字符不是数字字符或者负号，parseInt()就会返回 NaN
        alert(parseInt('')) //NaN
        alert(Number(''))   //0

        alert(parseInt('1000px1000'))//1000 返回整数部分
        alert(parseInt('100.55'))    //100 返回整数部分
```

**parseInt()函数也可以识别八进制和⼗六进制:**

```javascript
        var num3 = parseInt("0xA"); // 10（按照十六进制解析）
        var num5 = parseInt("070"); // 56（按照八进制解析）
        var num6 = parseInt("70");  // 70（按照十进制解析）
        var num7 = parseInt("0xf"); // 15（按照十六进制）
```

$\color{orange}{6.3.parseInt()的基数-也就是可选的第二个参数：}$

**6.3.1.为什么使用基数？**

- ECMAScript 3 认为是56（八进制），
- ECMAScript 5 认为是70（⼗进制）

$\color{red}{综上所述，为了解决进制问题，从而使用基数}$

**6.3.2.基数的作用？**

**用来决定parsInt()如何去解析输入的字符串。**

```javascript
        alert(parseInt('70',8))               //56 按照八进制解析
        alert(parseInt('101010101010',2))     //2730 按照⼆进制解析

        // 如果指定了 16 作为第二个参数，字符串可以不带前面的"0x"
        alert(parseInt("0xAF", 16));          //175 按照⼗六进制解析
        alert(parseInt('AF',16))              //175 按照⼗六进制解析

        var num2 = parseInt("AF");            //NaN 因为参数为字符串，不为数值
```

**$\color{orange}{ps:}$**

- 不指定基数意味着让 parseInt()决定如何解析输入的字符串
- 因此为了避免错误的解析
- $\color{red}{建议无论在什么情况下都明确指定基数}$

$\color{green}{7.parseFloat()转换的转换规则}$

**parseFloat()与parseInt()有很多相似**
**以下列举parseFloat()与parseInt()的不同之处：**

$\color{orange}{7.1}$

- 字符串中的第一个小数点是有效的
- 而第二个小数点就是无效的了
- 因此它后面的字符串将被忽略
(22.34.5会被转换为22.34)

```javascript
        var num1 = parseFloat("22.34.5"); //22.34
```

$\color{orange}{7.2.它始终都会忽略前导的零}$

```javascript
        var num2 = parseFloat("0xA"); //0
```

$\color{orange}{7.3. parseFloat()只解析十进制值}$

**它没有用第二个参数指定基数的用法。**

```javascript
        var num1 = parseFloat("3.125e7"); //31250000
        var num2 = parseFloat("0908.5");  //908.5
        var num3 = parseFloat("1234blue");//1234 （整数）
```
