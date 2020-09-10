# DOM的节点的关系属性

**$\color{green}{本章学习内容}$**

- 节点的关系
- childNodes属性和NodeList对象
- parentNode属性
- previousSibling属性
- nextSibling属性
- firstChild属性
- lastChild属性

**$\color{green}{1.节点的关系}$**

**$\color{orange}{1.1.节点关系的层次结构可以分为：}$**

- ⽗节点
- ⼦节点
- 兄弟节点

**当我们获取其中⼀个节点的时候，可以通过节点关系属性来获取它的相关的层次的节点。**

**$\color{orange}{1.2.节点的关系属性：}$**

| 属性            | 说明                        |
| --------------- | --------------------------- |
| childNodes      | 获取当前元素所有的⼦节点     |
| parentNode      | 获取当前节点的⽗节点         |
| previousSibling | 获取当前节点的前⼀个同级节点 |
| nextSibling     | 获取当前节点的后⼀个同级节点 |
| firstChild     | 获取childNodes列表中的第一个节点 |
| lastChild    | 获取childNodes列表中的最后⼀个节点 |

**$\color{green}{2.childNodes属性和NodeList对象}$**

**$\color{orange}{2.1.childNodes属性作用}$**

- 获取该节点所有子节点的（实时的）NodeList对象

**$\color{orange}{2.1.关于NodeList特点}$**

- **特点：**
  NodeList 是“实时的”，意思是如果该节点的子节点发生了变化，NodeList对象就会自动更新。
- **使用：**
  NodeList 是一种类数组对象，用于保存一组有序的节点，可以通过位置来访问这些节点。

**注意:**

- 虽然可以通过方括号"[]"语法来访问 NodeList 的值，而且这个对象也有 length 属性，$\color{red}{但NodeList它并不是 Array 的实例。}$

- NodeList 对象的独特之处在于，它实际上是基于 DOM 结构动态执行查询的结果，因此 DOM 结构的变化能够自动反映在 NodeList 对象中。

- 我们常说，NodeList 是有生命、有呼吸的对象，而不是在我们第一次访问它们的某个瞬间拍摄下来的一张快照。

**$\color{orange}{2.3.访问NodeList对象中的节点}$**

- 1.可以用$\color{red}{中括号[index]}$获取（index为获取的节点下标位置）
- 2.通过$\color{red}{item(index)}$方法获取（index为获取的节点位置）

实例如下：

```javascript
        console.log(document.childNodes);
        console.log(document.childNodes[0]);//<!DOCTYPE html>
        console.log(document.childNodes[1]);//html...

        console.log(document.childNodes.item(0));//<!DOCTYPE html>
        console.log(document.childNodes.item(1));//html...

        console.log(document.childNodes.length);//2
```

**$\color{orange}{2.4.补充：(将NodeList对象转为数组)}$**

- 对 arguments 对象使用 Array.prototype.slice()方法可以将其转换为数组。
- 而采用同样的方法，也可以将childNodes返回的 NodeList 对象转换为数组。

实例如下：

实例1:(在IE8 及之前版本中⽆效)

```javascript
        console.log(document.childNodes);//NodeList(2)
        //在 IE8 及之前版本中无效
        var arrayOfNodes = Array.prototype.slice.call(document.childNodes, 0);
        console.log(arrayOfNodes);//Array(2)
```

实例2:(在IE8中产生效果)

```javascript
            function convertToArray(nodes) {
            var array = null;
            try {
                array = Array.prototype.slice.call(nodes, 0);
                //针对非IE 浏览器
            } catch (ex) {
                array = new Array();
                for (var i = 0, len = nodes.length; i < len; i++) {
                    array.push(nodes[i]);
                }
            }
            return array;
        }
        console.log(convertToArray(document.childNodes));
        //[html,html]
        console.log(convertToArray(document.childNodes) instanceof Array);
        //true
```

**$\color{orange}{2.5.childNodes[n]使用注意事项！！}$**

**在使⽤childNodes[n]返回⼦节点对象的时候:**

- 有可能返回元素⼦节
- 也有可能返回其他类型的节点：如文本⼦节点（TEXT）

实例如下：

实例1:（包含TEXT节点）

```html
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
    </ul>

    <script>
        var ul = document.getElementsByTagName("ul")[0];

        for (var i = 0; i < ul.childNodes.length; i++) {
            console.log(ul.childNodes[i]);
        }
    </script>
</body>
```

实例2：(不包含TEXT节点)

- 思路1：
  因为元素节点为Node.ELEMENT_NODE，文字节点为Node.TEXT_NODE，两者nodeType不同
- 思路2：
  因为元素节点nodeType=1,而文字节点nodeType=3，两者nodeType不同

```html
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
    </ul>

    <script>
        var ul = document.getElementsByTagName("ul")[0];

        for (var i = 0; i < ul.childNodes.length; i++) {
            if (ul.childNodes[i].nodeType === Node.ELEMENT_NODE) {
                // if (ul.childNodes[i].nodeType === 1 ) {
                console.log("元素节点类别" + ul.childNodes[i].nodeType)
                console.log("元素节点名称" + ul.childNodes[i].nodeName)
                console.log("元素节点名称" + ul.childNodes[i].tagName)
                ul.childNodes[i].style.background = "red";
            } else {
                console.log("元素节点类别" + ul.childNodes[i].nodeType)
                console.log("文本节点的内容" + ul.childNodes[i].nodeValue)
            }
        }
    </script>
</body>
```

**$\color{green}{3.parentNode属性}$**

**$\color{orange}{3.1.parentNode属性作用：}$**

- 返回一个当前Node节点的父节点
- 如果没有这样的结点,这个属性返回null

**$\color{green}{4.previousSibling属性}$**

**$\color{orange}{4.1.previousSibling属性作用：}$**

- 返回当前节点的前一个节点(Node)
- 如果没有返回null

$\color{red}{(每个元素节点之外都可能包含其他类型的节点：如TEXT文本节点，注释节点等)}$

**$\color{green}{5.nextSibling属性}$**

**$\color{orange}{5.1.nextSibling属性作用：}$**

- 返回当前节点的下一个节点 (Node)
- 如果没有返回null

$\color{red}{(每个元素节点之外都可能包含其他类型的节点：如TEXT文本节点，注释节点等)}$

## **结合上述3.4.5.实例如下：**

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
    <!--注释：我我-->
    <div>找我</div>

    <script>
        var aLi = document.getElementsByTagName('li');
        //获取li父级节点
        console.log(aLi[0].parentNode);

        //获取li父级节点的下一个兄弟节点div
        //（为了跨过TEXT文本节点和注释节点，需要执行四次nextSibling）
        console.log(aLi[0].parentNode.nextSibling.nextSibling.nextSibling.nextSibling);

        var oDiv = document.getElementsByTagName('div')[0];
        //获取div的上一个兄弟节点ul
        //（为了跨过TEXT文本节点和注释节点，需要执行四次previousSibling）
        console.log(oDiv.previousSibling.previousSibling.previousSibling.previousSibling)
    </script>
</body>
```

**$\color{green}{6.firstChild属性}$**

**$\color{orange}{6.1.firstChild属性作用：}$**

- 返回当前节点的第一个子节点(Node)
- 如果该节点没有子节点则返回null

**$\color{green}{7.lastChild属性}$**

**$\color{orange}{7.1.lastChild属性作用：}$**

- 返回当前节点的最后一个子节点(Node)
- 如果该节点没有子节点则返回null

## **综合上述结合6.7.实例如下：**

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

        //目标：获取ul中第一个li子节点

        //(因为li元素节点前后被TEXT文本节点包围，所以第一个节点为TEXT文本节点)
        //因此li就为第二个节点
        //所以，第一个li节点位置，也就是第一个节点的下一个兄弟节点
        console.log(ul.firstChild.nextSibling)

        console.log(ul.childNodes[1]);

        //目标：获取ul中最后一个li子节点

        //(因为li元素节点前后被TEXT文本节点包围，所以最后一个节点为TEXT文本节点)
        //因此，li节点在最后一个节点前一位
        //所以，最后一个li节点位置，也就是最后一个节点的上一个兄弟节点
        console.log(ul.lastChild.previousSibling)
    </script>
</body>
```
