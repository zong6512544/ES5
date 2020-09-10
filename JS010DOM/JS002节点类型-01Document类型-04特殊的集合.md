# DOM

## $\color{purple}{本章内容}$

-  理解包含不同层次节点的 DOM
-  $\color{red}{使用不同的节点类型}$
-  克服浏览器兼容性问题及各种陷阱

## $\color{purple}{特殊的集合}$

**除了属性和方法，document 对象还有一些特殊的集合。这些集合都是 HTMLCollection 对象，**

**为访问文档常用的部分提供了快捷方式，包括：**
|对象|作用|
|-|-|
| document.anchors|包含文档中所有带 name 特性的a元素；
| document.applets|包含文档中所有的applet元素，因为不再推荐使用applet元素，所以这个集合已经不建议使用了；
| document.forms|包含文档中所有的form元素，与 document.getElementsByTagName("form")得到的结果相同；
| document.images|包含文档中所有的img元素，与 document.getElementsByTagName("img")得到的结果相同；
| document.links|包含文档中所有带 href 特性的a元素。这个特殊集合始终都可以通过 HTMLDocument 对象访问到，而且，与 HTMLCollection 对象类似，集合中的项也会随着当前文档内容的更新而更新。
  