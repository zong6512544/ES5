# NODE类型和NODE属性

**$\color{green}{本章学习内容}$**

- NODE介绍
- nodeType属性
- nodeName属性和nodeVlue属性

**$\color{green}{1.NODE介绍}$**

**$\color{orange}{1.1.关于NODE接口:}$**

DOM1级定义了一个 Node 接口，该接口将由 DOM 中的所有节点类型实现。

**$\color{orange}{1.2.NODE接口的特点:}$**

- Node 接口在JavaScript 中是作为 Node 类型实现的
- $\color{red}{除了 IE 之外}$，在其他所有浏览器中都可以访问到这个类型
- $\color{red}{JavaScript 中的所有节点类型都继承自 Node 类型}$
- 因此所有节点类型都共享着相同的基本属性和方法

**$\color{orange}{1.3.NODE属性:}$**

|属性名|作用|
|-|-|
|nodeType|表明节点的类型|
|nodeName|获取节点的元素的标签名|
|nodeValue|在元素节点中始终为null(文本节点中就是该节点的文本)|

**$\color{green}{2.nodeType属性}$**

**$\color{orange}{2.1.nodeType属性作用:}$**

- 每个节点都有一个 nodeType 属性
- 用于表明节点的类型

**$\color{orange}{2.2.十二种节点类型}$**

节点类型由在 Node 类型中定义的下列12 个数值常量来表示，任何节点类型必居其一：
| nodeType值 | 常量名                           | 说明     |
| ---------- | -------------------------------- | -------- |
| 1          | Node.ELEMENT_NODE                | 元素     |
| 2          | Node.ATTRIBUTE_NODE              | 属性     |
| 3          | Node.TEXT_NODE                   | 文本     |
| 4          | Node.CDATA_SECTION_NODE          | CDATA    |
| 5          | Node.ENTITY_REFERENCE_NODE       | 实体参考 |
| 6          | Node.ENTITY_NODE                 | 实体     |
| 7          | Node.PROCESSING_INSTRUCTION_NODE | 处理指令 |
| 8          | Node.COMMENT_NODE                | 注释     |
| 9          | Node.DOCUMENT_NODE               | 文档根   |
| 10         | Node.DOCUMENT_TYPE_NODE          | doctype  |
| 11         | Node.DOCUMENT_FRAGMENT_NODE      | 文档片段 |
| 12         | Node.NOTATION_NODE               | 符号     |

实例如下：

```html
<body>
    <div class="hha ">
        123
    </div>

    <script>
        var hha = document.getElementsByClassName("hha")[0];

        console.log(hha.nodeType);
        //1
        console.log(hha.nodeType == Node.ELEMENT_NODE)
        //true
        //若在IE中，可能会导致报错
    </script>
</body>
```

**$\color{orange}{2.3.nodeType属性在IE中的使用！！！}$**

**由于 IE 没有公开 Node 类型的构造函数，所以上面的代码在 IE 中会导致错误。**

因此：

**为了确保跨浏览器兼容，最好还是将 nodeType 属性与数字值进行比较。**

实例如下：

```html
<body>
    <div class="hha ">
        123
    </div>

    <script>
        var hha = document.getElementsByClassName("hha")[0];

        console.log(hha.nodeType);
        //1
        console.log(hha.nodeType == 1)
        //true
        //适用于所有浏览器
    </script>
</body>
```

**$\color{orange}{2.4.nodeType属性在IE中的使用(扩展！！！)}$**

- 并不是所有节点类型都受到Web 浏览器的⽀持
- 开发⼈员最常⽤的就是元素和文本节点
- 因为IE不⽀持我们可以⾃⼰定义⼀个单例对象让IE去⽀持

实例如下：

```javascript

        if (typeof Node === 'undefined') {
            window.Node = {
                ELEMENT_NODE: 1,
                ATTRIBUTE_NODE: 2,
                TEXT_NODE: 3,
                CDATA_SECTION_NODE: 4,
                ENTITY_REFERENCE_NODE: 5,
                ENTITY_NODE: 6,
                PROCESSING_INSTRUCTION_NODE: 7,
                COMMENT_NODE: 8,
                DOCUMENT_NODE: 9,
                DOCUMENT_TYPE_NODE: 10,
                DOCUMENT_FRAGMENT_NODE: 11,
                NOTATION_NODE: 12
            }
        }

```

**$\color{green}{3.nodeName 和 nodeValue 属性}$**

- 了解节点的具体信息，可以使用 nodeName 和 nodeValue 这两个属性
- 这两个属性的值完全取决于节点的类型

**$\color{orange}{3.1.nodeName和nodeValue属性作用:}$**

**对于元素节点(Element)：**

- nodeName 中保存是元素的标签名
- nodeValue 的值则始终为 null
  （TEXT节点nodeValue属性值，包含的是节点文本）

**$\color{orange}{3.2.nodeName和nodeValue属性注意事项:}$**

- 在使用这两个属性以前，最好是先检测一下节点的类型是否为（元素节点）

实例如下：

```javascript
<body>
    <div class="hha ">
        123
    </div>

    <script>
        var hha = document.getElementsByClassName("hha")[0];

        if (hha.nodeType == 1) {
            value = hha.nodeName; //nodeName的值是元素的标签名
        }
        console.log(hha.nodeName); //DIV
        console.log(hha.nodeValue);//null
    </script>
</body>
```
