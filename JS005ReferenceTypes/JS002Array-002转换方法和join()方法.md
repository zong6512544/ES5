# 转换方法

**$\color{green}{本章学习内容}$**

- 所有对象的都具有的方法
  - toString()
  - valueOf()
  - toLocalString()
- 数组特有方法join()

**$\color{green}{1.所有对象的都具有的方法}$**

- toString()
- valueOf()
- toLocaleString()

**$\color{orange}{1.1.toString()}$**

```javascript

        var colors = ["red", "blue", 666];

        console.log(colors.toString());
        //red,blue,666
```

解析：

返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串

**$\color{orange}{1.2.valueOf()}$**

```javascript

        var colors = ["red", "blue", 666];

        console.log(colors.valueOf());
        //数组Array(3)
        //[red,blue,666]

        alert.log(colors.valueOf());  
        //red,blue,666
```

解析：

- valueOf()返回的是这个值本身：
  因此当前返回值就是一个数组。
- 但是在alert()打印的时候，却返回的字符串：
  因为，alert()接受一个参数，但这个参数必须是字符串，如果不是将自行调用toString()方法将其参数转换为字符串。

**$\color{orange}{1.3.toLocalString()}$**

toLocaleString()方法经常也会返回与 toString()和 valueOf()方法相同的值，但也不总是如此。
当调用数组的 toLocaleString()方法时，它也会创建一个数组值的以逗号分隔的字符串。
而与前两个方法唯一的不同之处在于：
这一次为了取得每一项的值，调用的是每一项的 toLocaleString()方法，而不是 toString()方法

**$\color{green}{2.join()}$**

$\color{orange}{2.1.join()作用：}$

**$\color{red}{join()可以使用不同的分隔符，将这个数组构建成字符串}$**

$\color{orange}{2.2.join()的使用：}$

**join()方法只接收一个参数：**
即用作分隔符的字符串。

实例如下：

```javascript
        var colors = ["red", "green", "blue"];

        console.log(colors.join(","));
        //red,green,blue

        console.log(colors.join("||"));
        //red||green||blue

        // 转换成无分隔符的纯字符串
        console.log(colors.join(""));
        //red green blue

```
