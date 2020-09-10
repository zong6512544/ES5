# DOM扩展

## $\color{purple}{JS004关于HTMLDocument的属性}$

| 方法和属性                 | 功能                          |
| -------------------------- | ----------------------------- |
| readyState | 两个属性值：1.loading:正在加载；2.complete：已经加载完文档 |
| head | 获取文档的head元素      |
| charset | 字符集属性，表示文档中实际使用的字符集      |

$\color{orange}{1.document.readyState属性}$

**用来指示一个文档--已经加载完成的指示器。**

属性值：

- document.readyState == "loading"  ：文档加载中
- document.readyState == "complete" ：文档加载完毕

$\color{orange}{2.document.head属性}$

**获取文档的head元素。**

实例如下(此属性不兼容IE，以下为兼容写法)：

```javascript
var head = document.head || document.getElementsByTagName('head')[0];
```

$\color{orange}{3.document.charset属性}$

**3.1.document.charset表示文档中实际使用的字符集.**

- 获取文档的字符集编码
- 设置文档的字符集编码
  
示例如下：

```javascript

console.log(document.charset);

document.cahrset = "UTF-8";

```

**3.1.补充：document.defaultCharset属性：**

- **便是默认浏览器即操作系统的设置，当前文档默认的字符集应该是什么**
- **如果文档没有使用默认的字符集，charset和defaultCharset属性值可能不一样**
