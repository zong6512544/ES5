# 流程控制语句

**$\color{green}{流程控制语句-for语句}$**

$\color{orange}{1.正常使用}$

```javascript
    var count = 10;
    for (var i = 0; i < count; i++){
        console.log(i)
    }
```

$\color{orange}{2.无限循环}$

```javascript
    for(;;){
        console.log(1)
    }
```

$\color{orange}{3. for 循环转换成while 循环}$

```javascript
    var count = 10;
    var i = 0;
    for (; i < count; ){
        alert(i);
        i++;
    }
```
