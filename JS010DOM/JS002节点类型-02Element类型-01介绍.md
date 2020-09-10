# DOM

## $\color{purple}{本章内容}$

-  理解包含不同层次节点的 DOM
-  $\color{red}{使用不同的节点类型}$
-  克服浏览器兼容性问题及各种陷阱
  
## $\color{purple}{1.Element类型介绍}$

- **除了 Document 类型之外，Element 类型就要算是 Web 编程中最常用的类型了。**
- **Element 类型用于表现 XML 或 HTML元素，提供了对元素标签名、子节点及特性的访问。**

## $\color{purple}{2.Element节点具有下列特征：}$

- **nodeType 的值为 1；**
- **nodeName 的值为元素的标签名；**
- **nodeValue 的值为 null；**
- **parentNode 可能是 Document 或 Element；**
- **其子节点可能是 Element、Text、CommentProcessingInstruction、CDATASection 或EntityReference。**

## $\color{purple}{3.元素节点的nodeName和tagName属性}$

- **要访问元素的标签名，可以使用 nodeName 属性，也可以使用 tagName 属性；**
- **这两个属性会返回相同的值（使用后者主要是为了清晰起见）。**

实例如下：

```javascript
        console.log(document.body.nodeName);//BODY
        console.log(document.body.tagName); //BODY

        //HTML中标签始终以全大写表示
```

## $\color{purple}{Noticed:}$

- **在 HTML 中，标签名始终都以全部大写表示；**
- **而在 XML（有时候也包括 XHTML）中，标签名则始终会与源代码中的保持一致。**
