# 流程控制语句

**$\color{green}{流程控制语句-if 语句}$**

$\color{orange}{1.if使用(简写)}$

写法如下：

```javascript
    var i = -1;
    if (i > 25)
        console.log("Greater than 25.");
    else if (i < 0)
        console.log("Less than 0.");
    else
        console.log("Between 0 and 25, inclusive.");
```

$\color{orange}{1.if使用(标准写法)}$

但我们推荐的做法则是像下面这样,提高代码可读性

```javascript
    if (i > 25) {
        alert("Greater than 25.");
    } else if (i < 0) {
        alert("Less than 0.");
    } else {
        alert("Between 0 and 25, inclusive.");
    }
```
