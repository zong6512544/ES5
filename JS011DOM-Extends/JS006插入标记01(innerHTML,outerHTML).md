# DOM扩展

## $\color{purple}{插入标记innerHTML,outerHTML}$

|属性名|介绍|
|---|---|
|innerHTML|1.只读模式下：innerHTML属性返回调用元素的所有子节点(任何childNodes)对应的标记；(不包括此元素本身)<br/>2.在写模式下：innerHTML属性会根据指定的值创建新的DOM树，然后用这个新创建的DOM树去替换原有的DOM树子节点(替换原有DOM树所有的子节点，不替换此元素本身)
|outerHTML|1.只读模式下：outerHTML属性返回调用它的元素的所有子节点的对应标签(包括此元素本身节点)；<br/>2.在写模式下：outerHTML属性会根据指定的值创建新的DOM树，然后用这个DOM树去完全替换调用元素(替换此元素本身)|

$\color{orange}{1.innerHTML属性}$

实例如下：

```html

    <dl class="box">
        <dl>dl</dl>
        <dd>dd1</dd>
        <dd>dd2</dd>
        <dd>dd3</dd>
        <dd>dd4</dd>
        <dd>dd5</dd>
    </dl>

    <ul>

    </ul>

    <script>
        var box = document.getElementsByClassName('box')[0];
        var ul = document.getElementsByTagName('ul')[0];

        // 设置插入标记
        ul.innerHTML = "<li>1</li><li>2</li><li>3</li><li>4</li>";

        // 查看插入标记
        console.log(box.innerHTML)

    </script>

```

$\color{orange}{2.outerHTML属性}$

```html

  <dl class="box">
        <dt>dl</dt>
        <dd>dd1</dd>
        <dd>dd2</dd>
        <dd>dd3</dd>
        <dd>dd4</dd>
        <dd>dd5</dd>
    </dl>

    <ul>

    </ul>

    <script>
        var box = document.getElementsByClassName('box')[0];
        var ul = document.getElementsByTagName('ul')[0];

        // 设置插入标记
        ul.outerHTML = "<ol><li>1</li><li>2</li><li>3</li><li>4</li></ol>";

        // 查看插入标记
        console.log(box.outerHTML)

    </script>

```
