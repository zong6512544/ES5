# 操作方法-splice()

**$\color{green}{本章学习内容}$**

- 1.splice()的作用
- 2.splice()的使用

**$\color{green}{1.splice()的作用}$**

**$\color{orange}{1.1.splice() 的主要用途:}$**
**向数组的内部插入新数据**

**$\color{orange}{1.2.使用这种方法的方式有如下三种:}$**

- 删除 (start,after)
- 插入 (start,after=0,data01,data02,,,,)
- 替换 (start,after,data01,data02,,,)

**$\color{green}{2.splice()的使用}$**

**$\color{orange}{2.1. 删除操作}$**

**指定 2 个参数：**

```javascript
   Array.splice(start,after);
```

- 1.要删除的起点位置start
- 2.从此项目往后要删除的项数after
  
（并返回删除的数据）

**例如：**

Array.splice(1,2)
将从数组中的第2个位置开始（包含第2个），往后删除两项

```javascript
        var colors1 = [1,2,3,4,5,6,7];

        console.log(colors1.splice(1,2));
        //返回被删除的数据:2，3

        console.log(colors1)
        //1，4，5，6，7
```

**$\color{orange}{2.2. 新增操作}$**

**指定 3 个参数：**

- 1.要新增的起点位置start
- $\color{red}{2.往后要删除的项数（此处为0）}$
- 3.要插入的数据项（可以传入多个，用逗号隔开）

**例如：**

```javascript
  Array.splice(1,0,"i","love","you")
```

往数组中的第2个位置，添加三个数据，"i","love","you"**

```javascript
        var colors1 = [1,2,3,4,5,6,7];

        console.log(colors1.splice(1,0,"i","love","you"));
        //返回值：[]

        console.log(colors1)
        // 1,"i","love","yout",2,3,4,5,6,7

```

**$\color{orange}{2.3 替换操作}$**

**指定 3 个参数：**

- 1.要新增的起点位置start
- 2.往后要删除的项数after
- 3.要插入的项（可以传入多个，用逗号隔开）

**例如：**

```javascript
   splice(1,2,"i","love","you")
```

从数组第2个位置开始(包含第2个)，将后面2项替换为:"i","love","you"

```javascript
        var colors1 = [1,2,3,4,5,6,7];

        console.log(colors1.splice(0,2,"i","love""you"))
        //返回被删除的数据：1，2
        console.log(colors1);
        //"i","love","you",3,4,5,6,7
```
