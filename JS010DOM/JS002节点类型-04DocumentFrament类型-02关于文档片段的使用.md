# DOM

## $\color{purple}{本章内容}$

-  理解包含不同层次节点的 DOM
-  $\color{red}{使用不同的节点类型}$
-  克服浏览器兼容性问题及各种陷阱

## $\color{purple}{1.关于文档片段}$

- **虽然不能把文档片段直接添加到文档中，但可以将它作为一个“仓库”来使用,即可以在里面保存将来可能会添加到文档中的节点。**
- **要创建文档片段，可以使用 document.createDocumentFragment()方法**
  
实例如下：

```javascirpt

    var fragment = document.createDocumentFragment();
```

## $\color{purple}{2.文档片段的使用须知：}$

- **文档片段继承了 Node 的所有方法，通常用于执行那些针对文档的 DOM 操作。**
- **如果将文档中的节点添加到文档片段中，就会从文档树中移除该节点，也不会从浏览器中再看到该节点。**
- **添加到文档片段中的新节点同样也不属于文档树。**
- **可以通过 appendChild()或 insertBefore()将文档片段中内容添加到文档中。**
- **在将文档片段作为参数传递给这两个方法时，实际上只会将文档片段的所有子节点添加到相应位置上；**
- **文档片段本身永远不会成为文档树的一部分。**

## $\color{purple}{3.文档片段的使用实例：}$

- **假设我们想为这以个ul元素添加 3 个列表项。**
- **$\color{red}{如果逐个地添加列表项}$**
  **$\color{red}{将会导致浏览器反复渲染（呈现）新信息.}$**
- **为避免这个问题，可以像下面这样使用一个文档片段来保存创建的列表项，然后再一次性将它们添加到文档中。**

实例如下：

```html
<body>

    <ul></ul>

    <script>
        var ul = document.getElementsByTagName("ul")[0];
        //创建文档片段
        var docFrament = document.createDocumentFragment();
        //ul里面动态添加三个li属性
        for (var i = 0; i < 3; i++) {
            //创建li元素节点
            var li = document.createElement("li");
            //创建文本节点
            var text = document.createTextNode("我是li" + i);
            //添加文本节点到元素节点
            li.appendChild(text);
            //将元素节点添加进文档片段
            docFrament.appendChild(li);
        }
        //当所有的li节点创建并放入文档判断后，
        //再一次性将文档片段放进ul元素节点
        //（相当于一次向将3个li放入ul，而不是每创建一个li就往ul放入）
        //（同时，因为文档片段永不为文档树的一部分）
        // 减少了浏览器的渲染次数，提高效率
        ul.appendChild(docFrament);
    </script>
</body>
```
