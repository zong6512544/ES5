# eval() 方法

**$\color{green}{本章学习内容}$**

- eval()
- 注意事项

**$\color{green}{1.eval()特点:}$**

eval()方法就像是一个完整的 ECMAScript 解析器

**$\color{green}{2.eval()只接受一个参数:}$**

即要执行的 ECMAScript（或 JavaScript）字符串。

实例如下：

```javascript
    eval("alert('hi')");
```

这行代码的作用等价于下面这行代码：

```javascript
    alert("hi");
```

**$\color{green}{3.eval()使用解析：}$**

当解析器发现代码中调用eval()方法时

- $\color{red}{eval()会将传入的参数}$
- $\color{red}{当作实际的ECMAScript 语句来解析}$
- $\color{red}{然后把执行结果插入到原位置}$

实例如下：

```javascript
    eval('var a=1;alert(a)'); //可以直接解析字符串代码

    eval('function fn(){var a = 2;return a};alert(fn())')
    //任何符合js语法的字符串都可以被执行
```

实例如下：

```html
    <textarea id="test" cols="30" rows="10" onchange="change()"></textarea>

    <script>
        function change() {
            // 如果要使用这个方法。
            // 必须要对输入进来的内容。
            // 进行强大而细致的正则判断
            eval(console.log(document.getElementById('test').value));
        }
    </script>
```

**$\color{green}{4.NOTICED：}$**

eval()能够解释代码字符串的能力非常强大，但也非常危险。

- 因此在使用eval()时必须极为谨慎
- 特别是在用它执行用户输入数据的情况下
- 否则，可能会有恶意用户输入威胁你的站点或应用程序安全的代码
- $\color{red}{（即所谓的代码注入）}$
