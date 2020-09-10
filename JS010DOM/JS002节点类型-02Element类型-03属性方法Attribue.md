# DOM

## $\color{purple}{本章内容}$

-  理解包含不同层次节点的 DOM
-  $\color{red}{使用不同的节点类型}$
-  克服浏览器兼容性问题及各种陷阱
  
## $\color{purple}{1.属性方法Atrribute}$

**每个元素都有一或多个特性，这些特性的用途是给出相应元素或其内容的附加信息。**

$\color{orange}{操作特性的DOM方法主要有3个，分别是：}$
| 方法                        | 功能               |
| --------------------------- | ------------------ |
| **getAttribute(key)**       | 获取元素的属性值   |
| **setAttribute(key,value)** | 设置元素的属性值(不存在则创建该属性)   |
| **removeAttribute(key)**    | 删除元素属性       |
| **attributes属性**              | 获取元素的所有属性 |

**这几个方法可以针对任何特性使用，包括那些以 HTMLElement 类型属性的形式定义的特性。**

## $\color{purple}{2.关于Atrribute方法的使用：}$

$\color{orange}{2.1.getAttribute(key)：}$

**getAttribute(key)⽅法⽤来获取元素内属性的值**
**（包括自定义属性）**
  
**注意：**
**传递给 getAttribute(key)的属性名key与实际的属性名相同**
**通过对象属性不能访问自定义属性**

实例如下：

```html
<body>

    <div title="titleDiv" class="divClass" mydiv="myDiv">我是div</div>

    <script>
        var div = document.getElementsByTagName("div")[0];

        //获取div属性值
        console.log(div.className);
        console.log(div.title);
        console.log(div.mydiv);
        //undefined,自定义属性无法通过对象属性获取

        //通过getAttribute获取属性值
        console.log(div.getAttribute("title"));
        console.log(div.getAttribute("class"));
        console.log(div.getAttribute("mydiv"));

    </script>
</body>
```

$\color{orange}{2.2.setAttribute(key,value)}$

**setAttribute(key,value)方法用来设置元素的属性值。**

**注意：**
**如果属性key,已经存在,则替换value**
**如果属性key不存在，创建新的属性名为key，值为value**

```html
<body>

    <div title="titleDiv" class="divClass" mydiv="myDiv">我是div</div>

    <script>
        var div = document.getElementsByTagName("div")[0];

        //修改属性值
        div.setAttribute("title","newTitle");
        div.setAttribute("newAttr","我是新的属性");
        div.setAttribute("mydiv","我是myDiv新的属性");
        //通过getAttribute获取属性值
        console.log(div.getAttribute("title"));
        console.log(div.getAttribute("newAttr"));
        console.log(div.getAttribute("mydiv"));
    </script>
</body>
```

$\color{orange}{2.3.removeAttribute(key)}$

**removeAttribute(key)这个⽅法⽤于彻底删除元素的特性。**

```html
<body>

    <div title="titleDiv" class="divClass" mydiv="myDiv">我是div</div>

    <script>
        var div = document.getElementsByTagName("div")[0];

        //彻底删除一个属性
        div.removeAttribute("mydiv");
        //通过getAttribute获取属性值
        console.log(div.attributes);
        console.log(div.getAttribute("mydiv"))
    </script>
</body>

```

$\color{orange}{2.4.attributes属性}$

```html
<body>

    <div title="titleDiv" class="divClass" mydiv="myDiv">我是div</div>

    <script>
        var div = document.getElementsByTagName("div")[0];
        //通过attributes获取元素所有属性
        console.log(div.attributes);
    </script>
</body>
```
