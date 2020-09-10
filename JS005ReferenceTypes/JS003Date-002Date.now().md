# Date 类型 Date.now()方法

**$\color{green}{本章学习内容}$**

- Date.now()
- 使用注意

**$\color{green}{1.Date.now()作用:}$**

**返回表示调用这个方法时的($\color{red}{时间戳}$)**

实例如下：

```javascript
    //取得开始时间
    var start = Date.now();

    //调用函数
    doSomething();

    function doSomething(){
        console.log('hah')
    }

    //取得停止时间
    var stop = Date.now();

    //获得时间差
    result = stop – start;
```

**$\color{green}{2.使用注意:}$**

- **1.支持 Data.now()方法的浏览器包括:**
  IE9+、Firefox 3+、Safari 3+、Opera 10.5 和 Chrome。
- **2.在不支持它的浏览器中，**
  使用 + 操作符把 Data 对象转换成字符串，也可以达到同样的目的。

实例如下：

```javascript
        //取得开始时间
        var start = +new Date();

        //调用函数
        doSomething();

        function doSomething() {
            console.log('hah')
        }

        //取得停止时间
        var stop = +new Date();

        //获得时间差
        result = stop - start;
        console.log(result)
```
