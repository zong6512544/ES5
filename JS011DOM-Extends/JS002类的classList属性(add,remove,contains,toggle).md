# DOM扩展

## $\color{purple}{类的classList属性}$

**在操作类名时，我们通常使用className属性添加、删除和替换类名**
**而且，className中是一个字符串，所以不利于对包含在其中的多个类名进行操作**

如：

```html
    <div class="i love you"></div>
```

如果要对其中某个类名（例如love）进行修改，className的使用下，则需要将对其字符串进行处理。
将其多个类名拆分，然后修改后再拼接新的字符串。

$\color{orange}{因此DOM中新扩展了classList属性}$

| 属性            | 说明                                                   |
| --------------- | ------------------------------------------------------ |
| add(value)      | 添加新的字符串类名                                     |
| remove(value)   | 移除指定的字符串类名                                   |
| contains(value) | 是否包含指定的字符串类名（如果存在返回true,否则false） |
| toggle(value)   | 如果包含指定字符串类名，就删除它,否则将其添加          |
