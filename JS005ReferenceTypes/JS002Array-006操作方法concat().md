# 操作方法-concat()

**$\color{green}{本章学习内容}$**

- concat()特点
- concat()工作原理
- concat()使用

**$\color{green}{1.concat()特点}$**

**可以基于当前数组中的所有项创建一个新数组并返回。**

**$\color{green}{2.concat()工作原理}$**

- 这个方法会先创建当前数组一个副本,
- 然后将接收到的参数添加到这个副本的末尾，
- 最后返回新构建的数组

**$\color{green}{3.concat()使用}$**

**$\color{orange}{3.1.在没有给 concat() 方法传递参数的情况下}$**

**它只是复制当前数组并返回副本。**

实例如下：

```javascript
        var colors = ["red", "green", "blue"];
        var colors2 = colors.concat();

        console.log(colors); //Array(3)//["red", "green", "blue"]
        console.log(colors2);//Array(3)//["red", "green", "blue"]
```

**$\color{orange}{3.2.如果传递给 concat() 方法的是一或多个数组}$**

**则该方法会将这些数组中的每一项都添加到结果数组中。**

实例如下：

```javascript

        var colors = ["red", "green", "blue"];
        var colorss = [1,2,3,4];
        var colorsss = ['yzb','gg',22,'gg'];
        var colors2 = colors.concat(colorss,colorsss);

        console.log(colors); //Array(3) //["red", "green", "blue"]
        console.log(colors2);//Array(11)//["red", "green", "blue", 1, 2, 3, 4, "yzb", "gg", 22, "gg"]
  

```

**$\color{orange}{3.3.如果传递的值不是数组}$**
**这些值就会被简单地添加到结果数组的末尾**

```javascript

        var colors = ["red", "green", "blue"];
        var colors2 = colors.concat('yzb',666,'zz');

        console.log(colors); //Array(3)//["red", "green", "blue"]
        console.log(colors2);//Array(6)// ["red", "green", "blue", "yzb", 666, "zz"]
```
