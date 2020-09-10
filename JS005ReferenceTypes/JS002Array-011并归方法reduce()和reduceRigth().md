# 数组的并归方法

**$\color{green}{本章学习内容}$**

- reduce()和reduceRight()

**$\color{green}{1.作用:}$**

两个方法都会迭代数组的所有项，然后构建一个最终返回的值。

- reduce()方法从数组的第一项开始，逐个到最后。
- reduceRight()方法从数组的最后一项开始，向前遍历到第一项。

**$\color{green}{2.使用:}$**

**它们均接受两个参数:**

- 1.一个在数组每一项上面调用的函数：
  function(prev,curr,index,arr)
  - prev:表示当前遍历的：上一个值
  - curr:表示当前遍历的：值
  - index：表示当前遍历项的:索引
  - arr:表示当前数组对象
- 2.作为归并基础的初始值(可选的)
  (也就是第一次遍历时第一个prev初始值)

实例如下：

```javascript

        var arr = [1, 2, 3, 4, 5, 6];

        // 传入两个参数
        // 参数01.每一项调用的函数fn(pre,curr,index,arr)
        // 参数02.可选择：归并基础的初始值
        // (也就是第一次遍历时第一个prev初始值)

        // 当前的return返回值，就是下一次遍历的上一项的值pre
        arr = arr.reduce(function (prev, curr, index, arr) {
            // 1  2  1
            // index = 2,也就是所谓的从第二项开始迭代
            console.log(prev, curr, index)
            return curr;
        });

        console.log(arr); //5

```

实例如下：
数组每项相加，数据每项相乘

```javascript
      var arr = [1, 2, 3, 4, 5];

      // 数组每项相加
      var plus = arr.reduce(function (prev, curr, index, arr) {
            return prev + curr;
      }, arr[0])
      console.log(plus)

      // 数组每项相乘
      var mutiple = arr.reduce(function (prev, curr, index, arr) {
            return prev * curr;
        }, arr[0])
      console.log(mutiple)

```

**$\color{green}{3.使用注意:}$**

- 第一次迭代发生在数组的第二项(下标index=1)，因此:
  - 第一个prev参数是数组的第一项(也就是curr当前项的上一项)
  - 第二个curr参数就是数组的第二项(curr当前项)。
- 当前的return返回值，就是下一次遍历的prev值。
- 最终的返回值就是：最后一次执行return返回值的取值。
