# DOM

## $\color{purple}{本章内容}$

-  理解包含不同层次节点的 DOM
-  $\color{red}{使用不同的节点类型}$
-  克服浏览器兼容性问题及各种陷阱

## $\color{purple}{查找元素的方法}$

**查找元素的方法表：**

|⽅法 |说明|
|-|-|
|getElementById() |获取特定的ID元素节点|
|getElementsByTagName() |获取相同的元素节点列表，返回⼀个集合|
|getElementsByClassName()| 返回带有指定类的所有元素的NodeList|
|namedItem() |可以通过元素的name特性取得集合中的第⼀项|
|getElementsByName() |返回带有给定name 特性的所有元素|
|querySelector() |⽅法接收⼀个CSS 选择符，返回与该模式匹配的第⼀个元素,如果没有找到匹配的元素，返回null|
|querySelectorAll()|返回的是所有匹配的元素⽽不仅仅是⼀个元素。这个⽅法返回的是⼀个NodeList 的实例|
|matchesSelector()|这个⽅法接收⼀个参数，即CSS 选择符，如果调⽤元素与该选择符匹配，返回true；否则，返回false|
