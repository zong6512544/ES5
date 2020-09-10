# 节点操作方法

**$\color{green}{本章学习内容}$**

- 节点操作方法表
- write()
- createElement()
- createTextNode()
- appendChild(newNode)
- insertBefore(newNode,beforeNode)
- reapalceChild(NewNode,replaceNode)
- removeChild(node)
- remove()
- cloneNode(boolean)

**$\color{green}{1.节点操作方法表}$**

| ⽅法                                | 说明                                        |
| ---------------------------------- | ------------------------------------------- |
| write()                            | 可以把任意字符串(或"元素")插入到文档中      |
| createElement()                    | 创建⼀个元素节点                             |
| createTextNode()                   | 创建⼀个文本节点                             |
| appendChild(newNode)               | 给当前节点的childNodes列表的末尾添加新节点            |
| insertBefore(newNode,beforeNode)   | 给当前节点的childNodes列表中指定节点的前⾯添加新节点 |
| reapalceChild(NewNode,replaceNode) | 新节点替换旧节点                            |
| removeChild(node)                  | 移除指定节点                                |
| remove()                           | 移除当前节点                                |
| cloneNode(boolean)                 | 复制克隆节点                                |

**$\color{green}{2.write()方法}$**

$\color{orange}{2.1.write()作用：}$

**可以把任意字符串(或"元素")插入到文档。**

```javascript
    document.write("往文档插入字符");
    document.write("<h1>往文档插入标签</h2>")
```

**$\color{green}{3.createElement()方法}$**

$\color{orange}{3.1.createElement()作用：}$

**创建⼀个元素节点。**

```javascirpt
    var li = document.createElement("li");

    console.log(li);
    //<li></li>
```

**$\color{green}{4.createTextNode()方法}$**

$\color{orange}{4.1.createTextNode()作用：}$

**创建⼀个文本节点。**

```javascript
    var text = document.createTextNode("我是一个文本节点");

    console.log(text);
    //"我是一个文本节点"
```

**$\color{green}{5.appendChild(newNode)方法}$**

$\color{orange}{5.1.appendChild(newNode)作用：}$

**给当前节点的childNodes列表的末尾添加新节点。**

```html
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>
    <script>
        var ul = document.getElementsByTagName('ul')[0];

        var li = document.createElement("li");

        var text = document.createTextNode("我是一个文本节点");

        li.appendChild(text);
        console.log(li);//<li>我是一个文本节点</li>

        ul.appendChild(li);

    </script>
</body>
```

**$\color{green}{6.insertBefore(newNode,beforeNode)方法}$**

$\color{orange}{6.1.insertBefore(newNode,beforeNode)作用：}$

**给当前节点的childNodes列表中，指定节点的前⾯添加新节点。**

$\color{orange}{6.2.insertBefore(newNode,beforeNode)参数：}$

- **newNode：添加的新节点**
- **beforeNode：表示要在某个指定节点前添加**

```html
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>

    <script>
        var ul = document.getElementsByTagName('ul')[0];

        var li = document.createElement("li");

        var text = document.createTextNode("我是一个文本节点");

        li.appendChild(text);

        //往第二个li节点前面添加新的li节点
        //因为li周围包含#TEXT文本节点
        //所以第二个li的位置为第四个，下标为3
        ul.insertBefore(li,ul.childNodes[3]);

    </script>
</body>

```

**$\color{green}{7.reapalceChild(NewNode,replaceNode)方法}$**

$\color{orange}{7.1.reapalceChild(NewNode,replaceNode)作用：}$

**新节点替换旧节点 。**

$\color{orange}{7.2.replaceBefore(newNode,replaceNode)参数：}$

- **newNode：添加的新节点**
- **replacetNode：表示要被替换的节点**

实例如下：

```html
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>

    <script>
        var ul = document.getElementsByTagName('ul')[0];

        var li = document.createElement("li");

        var text = document.createTextNode("我是一个文本节点");

        li.appendChild(text);

        //新节点替换旧的第三个li节点
        ul.replaceChild(li,ul.childNodes[5]);

    </script>
</body>
```

**$\color{green}{8.removeChild(node)方法}$**

$\color{orange}{8.1.removeChild(node)作用：}$

**移除指定节点。**

$\color{orange}{8.2.removeChild(node)的参数：}$

- **node:将要移除的节点**

```html
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>

    <script>
        var ul = document.getElementsByTagName('ul')[0];

        //移除ul中，第一个li节点
        ul.removeChild(ul.childNodes[1]);
    </script>
</body>
```

**$\color{green}{9.remove()方法}$**

$\color{orange}{9.1.remove()作用：}$

**移除当前节点。**

```html
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>

    <script>
        var ul = document.getElementsByTagName('ul')[0];

        //移除ul中，第一个li节点
        ul.childNodes[1].remove();
    </script>
</body>
```

**$\color{green}{10.cloneNode(Boolean)方法}$**

$\color{orange}{10.1.cloneNode(Boolean)作用：}$

**复制克隆节点。**

$\color{orange}{10.2.cloneNode(Boolean)的参数：}$

- **cloneNode(true):克隆节点的内容**
- **cloneNode(false):不克隆节点的内容**

```html
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>

    <script>
        var ul = document.getElementsByTagName('ul')[0];

        //克隆第5个节点，参数false，不克隆内容
        var cloneLi01 = ul.childNodes[9].cloneNode(false);
        console.log(cloneLi01)
        //将克隆的节点，放到ul的childNodes列表中最后一个节点
        ul.appendChild(cloneLi01);

        //克隆第4个节点，参数false，克隆内容
        var cloneLi02 = ul.childNodes[7].cloneNode(true);
        console.log(cloneLi02)
        //将克隆的节点，放到ul的childNodes列表中的第一个节点
        ul.insertBefore(cloneLi02, ul.firstChild);
    </script>
</body>
```
