# 操作方法-slice()

**$\color{green}{本章学习内容}$**

- 1.slice()的作用
- 2.slice()的使用

**$\color{green}{1.slice()特点}$**

**将数组指定区间项的数据放入一个新的数组并返回。**

**$\color{green}{2.slice()的使用}$**

**slice() 方法可以接受一个或两个参数:**

- $\color{red}{返回项的起始位置(包含当前项)}$
- $\color{red}{返回项的结束位置(不包含当前项)}$

$\color{orange}{2.1.一个参数的情况-slice(start)}$

**返回从参数start指定下标位置开始,到当前数组末尾的所有项。**

实例如下：

```javascript

        var colors1 = [1,2,3,4,5,6,7];

        console.log(colors1.slice(5));
        //返回从第6个开始，到数组结尾，所有的数据。
        // 6,7

        console.log(colors1);
        // 1,2,3,4,5,6,7
```

$\color{orange}{2.2.两个参数的情况-slice(start,end)}$

- **返回开始start下标和结束位置end下标之间的项**
- $\color{red}{但不包括结束位置的项}$

实例如下：

```javascript
        var colors1 = [1,2,3,4,5,6,7];

        console.log(colors1.slice(0,5));
        //返回从第1个开始，
        //到第6个(截止于6之前，不包含6)之间的所有数据。
        // 1,2,3,4,5

        console.log(colors1);
        // 1,2,3,4,5,6,7
```

$\color{orange}{2.3.如果结束位置小于起始位置，则返回空数组}$
