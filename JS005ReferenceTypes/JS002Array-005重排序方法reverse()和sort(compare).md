# 重排序方法

**$\color{green}{本章学习内容}$**

- reverse()
- sort()
- sort(compare())比较函数

**$\color{green}{1.reverse()方法}$**

**$\color{orange}{1.1.reverse()方法的作用:}$**

**反转数组项的顺序。**

实例如下：

```javascript
        var arr = [1,2,3,4,7,66,55];
        console.log(arr.reverse());
        // 55，66，7，4，3，2，1

        console.log(arr)
        // 55，66，7，4，3，2，1 说明arr是引⽤ 类型的值
```

**$\color{green}{2.sort()方法}$**

**$\color{orange}{2.1.sort()作用:}$**

- **按升序排列数组项**
- (即最⼩的值位于最前⾯)

实例如下：

```javascript
        var arr = [1,2,3,4,7,66,55];
        console.log(arr.sort());    //1，2，3，4，55，66，7
        console.log(arr)            //1，2，3，4，55，66，7
```

**$\color{orange}{2.1.sort()注意事项!!!(必看):}$**

- sort()⽅法：会根据测试字符串的结果改变原来数组的顺序。
- 虽然数值 7 虽然⼩于 66,
- 但在进⾏字符串比较时,
- "6"则位于"7"的前⾯，于是数组的顺序就被修改了

**解决措施:**

给sort()方法添加比较函数=》sort(compare)

**$\color{green}{3.sort(compare)方法}$**

**$\color{orange}{3.1.sort(compare)作用:}$**

弥补上述sort()排序的不足。

**因为：**

- sort()⽅法：会根据测试字符串的结果改变原来数组的顺序。
- 虽然数值 7 虽然⼩于 66,
- 但在进⾏字符串比较时,
- "6"则位于"7"的前⾯，于是数组的顺序就被修改了
- **所以当前数组的顺序，并不是真正意义上按数值大小排列。**

**$\color{orange}{3.2. sort(compare)的使用:}$**

- $\color{red}{创建自定义比较函数compare（val1,val2）}$
- $\color{red}{然后将compare()添加进入srot()中即可}$

1.升序排列compare()

```javascript
function compare(val1,val2){
        if(val1 > val2){
                return 1;
        }else if(val1 < val2){
                return -1;
        }else {
                return 0;
        }
}
```

2.降序排列compare()

```javascript
function compare(val1,val2){
        if(val1 > val2){
                return -1;
        }else if(val1 < val2){
                return 1;
        }else {
                return 0;
        }
}
```

3.sort()中传入比较函数compare(val1,val2)

```javascript
        var arr = [1,2,3,4,7,66,55];
        console.log(arr.sort(compare));//传参比较函数
        //打印输出：1，2，3，4，7 ,55，66
        console.log(arr)
        //打印输出：1，2，3，4，7 ,55，66
```
