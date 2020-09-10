# Date 类型

**$\color{green}{本章学习内容}$**

- Date介绍
- Date日期对象的创建
- Date对象的使用
- Date.parse()
- Date.UTC()

**$\color{green}{1.Date介绍:}$**

ECMAScript 中的 Date 类型是在早期 Java 中的 java.util.Date 类基础上构建的。

为此，Date类型使用自 UTC（Coordinated Universal Time，国际协调时间）1970 年 1 月 1 日午夜（零时）开始经过的毫秒数来保存日期。

在使用这种数据存储格式的条件下，Date 类型保存的日期能够精确到 1970 年 1 月 1 日之前或之后的 285 616 年。

**$\color{green}{2.Date日期对象的创建:}$**

```javascript
   var now = new Date();
```

**$\color{green}{3.Date 对象的使用:}$**

$\color{orange}{3.1.调用Date()函数不传递参数的情况下}$

**创建的对象将自动获取当前日期和时间。**

实例如下：

```javascript
        var now = new Date();
        console.log(now);

        // 获取到了当前日期和时间
        // 例如:
        // Mon Mar 02 2020 22:07:25 GMT+0800 (中国标准时间)
```

$\color{orange}{3.2.调用Date()函数传递参的情况下}$

**3.2.1.如果要创建特定日期和时间的Date对象：**
必须传入表示该日期的---毫秒数$\color{red}{(时间戳)}$

```javascript

        var someTime = new Date(1231231231123);
        console.log(someTime)
        // Tue Jan 06 2009 16:40:31 GMT+0800 (中国标准时间)
```

**3.2.2.什么是时间戳？**
即从 UTC：
 时间 1970 年 1 月 1 日午夜起，至该日期止经过的毫秒数。

**3.2.3.时间戳的转换？**

为了简化时间戳计算过程,ECMAScript提供了两个方法：

- $\color{red}{Date.parse()}$
- $\color{red}{Date.UTC()}$

**$\color{green}{4.Date.parse()的使用:}$**

**$\color{orange}{4.1.Date.parse()参数：}$**

- 接收一个表示日期的$\color{red}{字符串}$参数
- 然后尽可能根据这个字符串返回相应日期的毫秒数
  ($\color{red}{时间戳}$)

实例如下：

```javascript
        console.log(Date.parse("2020-1-1"));
        // 1577808000000
```

**$\color{orange}{4.2.如果传入的字符串不能表示日期，那么返回NaN}$**

实例如下：

```javascript
        console.log(Date.parse("this is a time"))
        // NaN
```

**$\color{orange}{4.3.Date()传入参数为字符串时，Date.parse()将被隐式调用}$**

实例如下：

```javascript
     var now = new Date(Date.parse("May 5,2014"))
        // 和
     var now = new Date("May 5,2014")
        // 是等价的
```

**$\color{orange}{NOTICED:}$**
ECMA-262 没有定义 Date.parse()应该支持哪种日期格式。通常是因地区而异。

**$\color{orange}{4.4.浏览器通常都接受下列⽇期格式：}$**

- 1."⽉/⽇/年"，如:6/13/2004

```javascript
   //为 2004 年 5 月 25 日创建一个日期对象:
   var now00 = new Date(Date.parse("5/25/2004"))
   console.log(now00)
```

- 2."英文⽉名,⽇,年"，如:January 12,2004

```javascript
   //为 2004 年 5 月 25 日创建一个日期对象:
   var now01 = new Date(Date.parse("May 25,2004"))
   console.log(now01)
```

- 3."英文星期⼏,英文⽉名,⽇,年,时:分:秒 时区"
  
```javascript
  Tue May 25 2004 00:00:00 >>GMT-0700
```

- 4.ISO 8601 扩展格式YYYY-MM-DDTHH:mm:ss.sssZ
 （例如2004-05-25T00:00:00）。
  只有兼容ECMAScript 5 的实现⽀持这种格式。

```javascript
  //为 2004 年 5 月 25 日创建一个日期对象:
  var now02 = new Date(Date.parse("2004-5-25 22:22:22"));
  console.log(now02)
```

**$\color{green}{5.Date.UTC()的使用:}$**

**$\color{orange}{5.1.Date.UTC()参数：}$**

- 接收一个表示日期的$\color{red}{时间数值}$参数
- 然后尽可能根据这个数值参数返回相应日期的毫秒数
  ($\color{red}{时间戳}$)

参数格式如下：

- 年份、
- 基于 0 的月份（一月是 0，二月是 1，以此类推）、
- 月中的哪一天（1 到 31or30）、
- 小时数（0 到 23）、
- 分钟、
- 秒以、
- 毫秒数

```javascript

      var now2 = new Date(Date.UTC(2015, 4, 15, -8, 12, 12, 12));
      console.log(now2)
      // Fri May 15 2015 00:12:12 GMT+0800 (中国标准时间)
```

**$\color{orange}{5.2.Date.UTC()参数和Date.parse()也有不同：}$**

  Date.UTC()方法同样也返回表示日期的$\color{red}{毫秒数}$，但它与 Date.parse()在构建值时使用不同的信息。

- Date.parse()传入的是一个字符串
- Date.UTC()传入的是一个时间数值

**$\color{orange}{5.3.Date.UTC()的使用：}$**

- **5.3.1.Date.UTC()的具体时间：**
  $\color{red}{具体的小时数=传入的小时参数+8}$
  (UTC默认小时是从8：00开始)

- $\color{red}{如果第一个参数是数值,就会调用Date.UTC()}$
  且Date构造函数第一个参数为年，而第二个参数是月份，以此类推。

实例如下：

```javascript

    //Date.Parse()
    var now = new Date(Date.parse("May 15,2015"));

    //Date.UTC()
    var now2 = new Date(Date.UTC(2015, 4, 15,-8));

```

**$\color{orange}{5.4. NOTICED:}$**

- 1.在这些参数中，只有前两个参数（年和月）是必需的。
- 2.如果没有提供月中的天数，则假设天数为 1；
  如果省略其他参数，则统统假设为 0。

实例如下：

```javascript
    // GMT 时间 2000 年 1 月 1 日午夜零时
    var y2k = new Date(Date.UTC(2000, 0));

    // GMT 时间 2005 年 5 月 5 日下午 5:55:55
    var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
```
