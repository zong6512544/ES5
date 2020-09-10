# DOM扩展

## $\color{purple}{访问元素的方式：}$

**DOM2规范，为style对象定义了一些属性和方法：**

- 这些属性和方法在提供元素的style特性值
- 同时也可以修改样式

**$\color{orange}{element.style属性和方法：}$**

| 属性or方法 | 作用 |
| ---------- | ---- |
| cssText属性    |  1.读取模式下:能访问到style中的css代码 <br/>2.写入模式下:赋值给cssText的值会重写该元素整个style中的css代码    |
|length属性|该元素表示css属性的数量<br/>    (可以搭配item(index)方法,迭代元素中定义的css属性)|
|parentRule属性|css信息的CSSRule对象|
|getPropertyCSSValue(propertyName)方法|返回包含给定属值的CSSValue对象|
|getPropertyPriority(propertyName)方法|1.如果给定的属性使用了！important设置，则返回'！important'<br/>2.否则返回空字符串|
|getPropertyValue(propertyName)方法|返回给定属性的字符串值|
|item(index)方法|返回给定位置的CSS属性的名称|
|removeProperty(propertyNmae)方法|从该元素样式中删除给定样式属性|
|setProperty(propertyName,propertyValue,priority)方法|将给定属性名propertyName设置相应的值propertyValue,并加上优先权标志("important" 或 空字符串)|
