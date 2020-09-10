# 流程控制语句

**$\color{green}{本章学习内容}$**

- lable
- continue
- break

**$\color{green}{1.label语句}$**

**$\color{orange}{1.1.label作用}$**

使用 label 语句可以在代码中添加标签，以便将来使用。

**$\color{orange}{1.2.label 语句的语法}$**

```javascript
    label: statement
```

实例如下：

```javascript
    start: for (var i=0; i < 10; i++) {
        alert(i);
    }
```

**$\color{orange}{1.3.label的使用注意}$**

- 加标签的语句一般都要与 for 语句等循环语句配合使用。
- 上述实例中定义的 start 标签可以在将来由 break 或 continue 语句引用。

**$\color{green}{2.continue语句}$**

**$\color{orange}{2.1.continue作用}$**

**continue 语句用于跳出当前循环，执行下一个循环。**

实例如下：
要求打印出所有的奇数

```javascript
        for (var i = 1; i < 10; i++) {
            if (i % 2 === 0) {
                continue;
                //当满足if条件，跳出当前循环，进入下一个循环。
            }
            console.log(i)
            //1,3,5,7,9
        }
```

**$\color{green}{3.break语句}$**

**$\color{orange}{3.1.break作用}$**

**break 语句会立即退出循环（当前循环停止）。**

实例如下：要求打印小于五的数

```javascript

        for (var i = 1; i < 10; i++) {
            if (i == 5) {
                break;
            }
            console.log(i)
            // 1,2,3,4
        }

```

**$\color{green}{4.continue和label的搭配使用}$**

实例如下：
要求打印0~99的整数，及其个数
（除了49-61之间的数）

```javascript
        var num = 0;

        outermost: for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                if (i == 5 && j == 0) {

                    continue outermost;

                    //当i=5,j=0,也就是num即将=51时，
                    //外部循环跳出，执行下一次循环，
                    //也就是i=6时，继续循环
                    //因此，当i=5时，内部循环少循环10次，
                    //num的总数要减去10
                }
                console.log(i*10+j)
                num++;
            }
        }
        alert(num);
        // 90 //总共循环了90次，因为50~59没有打印
```

**$\color{green}{5.break和label的搭配使用}$**

实例如下：
要求打印0~99的整数，及其个数
（除了50-99之间的数）

```javascript
        var num = 0;

        outermost: for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                if (i == 5 && j == 0) {
                    break outermost;
                    //当i=5,j=0,也就是num即将=51时
                    //停止外部循环
                    //所以sum最大值为50
                }
                console.log(i*10+j)
                num++;
            }
        }
        alert(num); //50
```
