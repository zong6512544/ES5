# DOM

## $\color{purple}{本章内容}$

-  理解包含不同层次节点的 DOM
-  $\color{red}{使用不同的节点类型}$
-  克服浏览器兼容性问题及各种陷阱

## $\color{purple}{1.DocumentFrament类型介绍：}$

- **在所有节点类型中，只有 DocumentFragment 在文档中没有对应的标记。**
- **DOM 规定文档片段（document fragment）是一种“轻量级”的文档，可以包含和控制节点，但不会像完整的文档那样占用额外的资源**

## $\color{purple}{2.Document节点具有下列特征：}$

- **nodeType 的值为 11**
- **nodeName 的值为"#document-fragment"**
- **nodeValue 的值为 null**
- **parentNode 的值为 null**
- **子节点可以是 Element、ProcessingInstruction、Comment、Text、CDATASection 或EntityReference。**
