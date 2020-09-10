# DOM

## $\color{purple}{本章内容}$

-  理解包含不同层次节点的 DOM
-  $\color{red}{使用不同的节点类型}$
-  克服浏览器兼容性问题及各种陷阱

## $\color{purple}{NOTICED}$

$\color{red}{在浏览器中document 对象表示整个 HTML 页面。}$

## $\color{purple}{1.Document的子节点}$

**$\color{orange}{1.1.DOM 标准规定 Document 节点的子节点可以是:}$**

- DocumentType
- Element
- ProcessingIn-struction
- Comment

## $\color{purple}{2.Document获取子节点}$

**$\color{orange}{2.1.document.documentElement属性：}$**

- **该属性始终指向 HTML 页面中的html元素。**
（所有浏览器都支持 document.documentElement 和 document.body 属性。）
  
**$\color{orange}{NOTICED:}$**
**两个内置的获取html节点的快捷方式：**

- $\color{red}{1.第一个就是 documentElement属性。}$
- **2.另一个就是通过 childNodes 列表访问文档元素。**

**通过 documentElement 属性则能更快捷、更直接地访问该元素。**

实例如下：

```javascript
        console.log(document.childNodes[0], document.childNodes[1]);
        // <!DOCTYPE html>
        // html..

        console.log(document.firstChild,document.firstChild.nextSibling);
        // <!DOCTYPE html>
        // html..

        //推荐
        console.log(document.doctype,document.documentElement);
        // <!DOCTYPE html>
        // html..
```

**$\color{orange}{2.2.document.doctype属性作用：(DocumentType)：}$**

- **Document 另一个可能的子节点是 DocumentType。**
- **通常将在浏览器中是使用document.doctype来访问DocumentType的信息。**

实例如下：

```javascript
        console.log(document.doctype);
        // <!DOCTYPE html>
```

**$\color{orange}{NOTICED:}$**

**浏览器对 document.doctype 的支持不一致，因此这个属性的用处很有限。**

## $\color{purple}{3.Document的文档信息}$

**作为 HTMLDocument 的一个实例，document 对象还有一些标准的 Document 对象所没有的属性。**

| 属性名称          | 说明                                        |
| ----------------- | ------------------------------------------- |
| document.body     | 可以直接获取body节点                        |
| document.title    | 可以直接获取或设置⽹⻚标题                    |
| document.URL      | 属性中包含⻚⾯完整的URL（即地址栏中显⽰的URL） |
| document.domain   | 取得当前⻚⾯的地址域名                        |
| document.referrer | 属性中可能会包含空字符,常规条件返回⽹址信息  |

**$\color{orange}{3.1.document.body：}$**

实例如下：

```javascript

        var body = document.body;

        console.log(body);
        //body...

        console.log(document.getElementsByTagName('body')[0] === body);
        //true
```

**$\color{orange}{3.2.document.title：}$**

实例如下：

```javascript
        //取得文档标题
        var originalTitle = document.title;

        //设置文档标题
        document.title="我是修改后的title";
```

**$\color{orange}{3.3. URL、domain 和 referrer：}$**

 **URL、domain 和 referrerz 这3 个属性都与对网页的请求有关。**

```javascript
        console.log(document.referrer) //取得完整的URL，有可能包含空字符
        console.log(document.URL)      //取得完整的URL
        console.log(document.domain)   //取得域名
```
