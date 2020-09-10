# 操作方法-indexOf()

**$\color{green}{本章学习内容}$**

- indexOf()和lastIndexOf()
- indexOf()
- lastIndexOf()

**$\color{green}{1.indexOf()和lastIndexOf():}$**

$\color{orange}{1.1.ES5 为数组实例添加了两个位置方法:}$

- **indexOf()**
- **lastIndexOf()**

$\color{orange}{1.2.这两个方法都接收两个参数:}$

- 要查找的匹配项
- 开始查找的起点索引（可选的）

$\color{orange}{1.3. 特点:}$

- 这两个方法都返回要查找的项在数组中的位置（下标）
- 在没找到的情况下返回 -1
- 要求查找的项必须严格相等（就像使用===一样）

**$\color{green}{2.indexOf()}$**

**从数组的开头（位置 0或指定位置）向后查找匹配项:**

**$\color{orange}{2.1.从数组的开头（位置 0）向后查找匹配项:}$**

```javascript
            var arr = [1, 2, 3, '4', '5', '6', '5', 4, 3, 2, 1];

            console.log(arr.indexOf('4'));  //3
            console.log(arr.indexOf(4));    //7
```

**$\color{orange}{2.2.从数组（指定的开始位置）向后查找匹配项:}$**

```javascript
            var arr = [1, 2, 3, '4', '5', '6', '5', 4, 3, 2, 1];

            console.log(arr.indexOf('4',4));//-1
            console.log(arr.indexOf('4',3));//3
```

**$\color{green}{3.lastIndexOf()特点}$**

**从数组的（末尾或指定位置）开始向前查找:**

**$\color{orange}{3.1.从数组的末尾（Array.length）开始向前查找匹配项:}$**

```javascript
        var arr = [1, 2, 3, 4, '4', '5', '6', '5', 4, 3, 2, 1];

        console.log(arr.lastIndexOf(4));   //8
        console.log(arr.lastIndexOf('4')); //4

```

**$\color{orange}{3.2.从数组（指定的末尾位置）向前查找匹配项:}$**

```javascript
        var arr = [1, 2, 3, 4, '4', '5', '6', '5', 4, 3, 2, 1];

        console.log(arr.lastIndexOf(3, 8)); //2
        console.log(arr.lastIndexOf(3, 6)); //2
        console.log(arr.lastIndexOf(3, 9));//10
```
