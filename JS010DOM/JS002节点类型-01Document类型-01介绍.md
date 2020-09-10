# DOM

## $\color{purple}{本章内容}$

-  理解包含不同层次节点的 DOM
-  $\color{red}{使用不同的节点类型}$
-  克服浏览器兼容性问题及各种陷阱
  
## $\color{purple}{1. Document类型介绍}$

- **JavaScript 通过 Document 类型表示文档。**
- **在浏览器中document 对象表示整个 HTML 页面。**
- **而且，document 对象是 window 对象的一个属性，因此可以将其作为全局对象来访问。**

## $\color{purple}{2.Document节点具有下列特征：}$

- nodeType 的值为 9；
- nodeName 的值为"#document"；
- nodeValue 的值为 null；
- parentNode 的值为 null；
- ownerDocument 的值为 null；
- 其子节点可能是一个 DocumentType（最多一个）、Element（最多一个）、ProcessingInstruction或 Comment。
