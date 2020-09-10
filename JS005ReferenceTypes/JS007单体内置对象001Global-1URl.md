# URI 编码方法

**$\color{green}{本章学习内容}$**

- encodeURI()和encodeURLComponent()
- decodeURI()和decodeURIComponent()

**$\color{green}{1.encodeURI()和encodeURLComponent()方法}$**

$\color{orange}{1.1.作用：}$

- 有效的 URI 中不能包含某些字符，例如空格。
- 这两个 URI 编码方法可以对 URI 进行编码，以便发送给浏览器。
- 它们用特殊的 UTF-8 编码替换所有无效的字符，从而让浏览器能够接受和理解。

$\color{orange}{1.2.encodeURI()和encodeURLComponent()区别：}$

$\color{red}{1.2.1.encodeURL()}$

- 1.主要用于整个 URI
（例如<http://www.wrox.com/illegalvalue.htm>）
- 2.encodeURI()不会对本身属于 URI 的特殊字符进行编码，
例如冒号、正斜杠、问号和井字号；
会对中文、空格进行编码。

$\color{red}{1.2.2.encodeURLComponent()}$

- encodeURIComponent()则会对它发现的任何非标准字符进行编码
- 一般建议encodeURLComponent()处理附加在URI后面的字符串
  (<http://www.wrox.com/illegalvalue.htm>)
  也就是上述URI的最后一部分
  (illegalvalue.htm)

$\color{red}{1.2.3.encodeURL()和encodeURLComponent()使用实例}$

```javascript
        var uri = "http://www.wrox.com/illegal value .htm#start哈哈";

        console.log(uri);
        // http://www.wrox.com/illegal value .htm#start

        // 将空格,中文进行编码
        console.log(encodeURI(uri));
        // http://www.wrox.com/illegalvalue.htm#start

        // 将任何非字母数字进行编码(不建议编码整个URI)
        console.log(encodeURIComponent(uri));
        // http%3A%2F%2Fwww.wrox.com%2Fillegal%20value%20.htm%23start%E5%93%88%E5%93%88

        // 将任何非字母数字进行编码(建议编码URI末尾附加的字符串)
        console.log(encodeURIComponent('illegal value .htm#start哈哈'));
        // illegal%20value%20.htm%23start%E5%93%88%E5%93%88
```

**解析上述代码：**

- **使用 encodeURI()编码的结果:**
除了空格、中文之外的其他字符都原封不动，只有空格和中文被编码
- **使用encodeURIComponent()编码的结果:**
则会使用对应的编码替换所有非字母数字字符。

**总结：**

- 对整个 URI 使用 encodeURI()
- 对附加在现有 URI 后面的字符串使用 encodeURIComponent()

**NOTICED:**

一般来说，我们使用 encodeURIComponent() 方法的时候要比使用encodeURI()更多，因为在实践中更常见的是对查询字符串参数而不是对基础 URI进行编码。

**$\color{green}{2. decodeURI()和 decodeURIComponent()方法}$**

decodeURI()和 decodeURIComponent()方法与encodeURI()和 encodeURIComponent()方法对应：

- 上述方法用来编码
- 当前方法用来解码

$\color{red}{2.1.decodeURI()}$

- decodeURI()只能对encodeURI()编码的字符进行解码。

$\color{red}{2.2.decodeURIComponent()}$

- decodeURIComponent()能够解码encodeURIComponent()编码的所有字符。
- 即它可以解码任何特殊字符的编码。

实例如下：

```javascript
        var uri = "http://www.wrox.com/illegal value .htm#start哈哈";

        console.log(uri);
        // http://www.wrox.com/illegal value .htm#start

        // 将空格,中文进行编码
        console.log(encodeURI(uri));
        // http://www.wrox.com/illegalvalue.htm#start

        // 解码encodeURI
        console.log(decodeURI('http://www.wrox.com/illegalvalue.htm#start'))

        // 将任何非字母数字进行编码(不建议编码整个URI)
        console.log(encodeURIComponent(uri));
        // http%3A%2F%2Fwww.wrox.com%2Fillegal%20value%20.htm%23start%E5%93%88%E5%93%88

        // 解码encodeURIComponent
        console.log(decodeURIComponent('http%3A%2F%2Fwww.wrox.com%2Fillegal%20value%20.htm%23start%E5%93%88%E5%93%88'))

        // 将任何非字母数字进行编码(建议编码URI末尾附加的字符串)
        console.log(encodeURIComponent('illegal value .htm#start哈哈'));
        // illegal%20value%20.htm%23start%E5%93%88%E5%93%88

        // 解码encodeURIComponent
        console.log(decodeURIComponent('illegal%20value%20.htm%23start%E5%93%88%E5%93%88'))

```

**解析上述代码:**

- **使用decodeURI()解码的结果:**
只有%20 被替换成了空格。

- **使用decodeURIComponent()解码的结果**
所有特殊字符的编码都被替换成了原来的字符，得到了一个未经转义的字符串。
（但这个字符串并不是一个有效的 URI）。
