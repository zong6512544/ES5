# 流程控制语句

**$\color{green}{流程控制语句-with语句}$**

$\color{orange}{1.with使用须知}$

- 由于大量使用 with 语句会导致性能下降
- 同时也会给调试代码造成困难
- 因此在开发大型应用程序时，不建议使用 with 语句

$\color{orange}{2.with作用}$

with语句的作用是将代码的作用域设置到一个特定的对象中

$\color{orange}{3.定义 with 语句的目的}$

主要是为了简化多次编写同一个对象的工作

$\color{orange}{4.with语法}$

```javascript
with (expression) statement
```

实例如下：

不使用with

```javascript

    var qs = location.search.substring(1);
    var hostName = location.hostname;
    var url = location.href;
```

使用with

```javascript
    with(location){
        var qs = search.substring(1);
        var hostName = hostname;
        var url = href;
    }
```

$\color{orange}{4.NOTICED}$

- 这意味着在 with 语句的代码块内部，每个变量首先被认为是一个局部变量。
- 而如果在局部环境中找不到该变量的定义，就会查询location 对象中是否有同名的属性。
- 如果发现了同名属性，则以 location 对象属性的值作为变量的值。
