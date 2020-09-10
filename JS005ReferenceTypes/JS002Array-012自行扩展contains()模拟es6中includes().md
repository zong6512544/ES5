# 数组自己扩展----contains方法

**$\color{green}{本章学习内容}$**

- contains()方法
  模拟es6中includes()方法
- 介绍includes()方法

**$\color{green}{1.作用:}$**

$\color{red}{Array是不存在contains()方法}$

- 因此，当我们想获取数组中是否包含某个值，可以自行封装方法。
- 因为contains方法是dom的classList衍生的方法，目的是查看当前节点是否包含某个className
- 因此，contains方法往往会让人产生误解。

$\color{red}{Array原型定义contains()方法实现es6中includes()方法}$

```javascript

    Array.prototype.contains = function (compare) {
            // 定义一个变量接受当前数组长度
            var length = this.length;

            // 开始遍历数组，比较是否包含compare这个参数值
            // 当前length=0时则表示遍历完毕
            while (length--) {
                if (this[length] === compare) {
                    return true
                }
            }
            return false;
    }

```

$\color{green}{2.es6中includes()方法:}$

使用includes方法()

```javascript
    var arr = [1,2,3,4,5,6,7,8];
    console.log(arr.includes(8));//true
    console.log(arr.includes(9));//false
```

不使用includes方法()

```javascript

    Array.prototype.contains = function (compare) {
            // 定义一个变量接受当前数组长度
            var length = this.length;

            // 开始遍历数组，比较是否包含compare这个参数值
            // 当前length=0时则表示遍历完毕
            while (length--) {
                if (this[length] === compare) {
                    return true
                }
            }
            return false;
    }

    var arr = [1, 2, 3, 4, 5, 6, 7, 8];

    console.log(arr.contains(8))//true
    console.log(arr.contains(9))//false

```
