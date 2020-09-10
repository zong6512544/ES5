# DOM扩展

## $\color{purple}{计算的样式：}$

**虽然style对象能够提供支持style特性的任何元素的样式信息。**
**但它不包括---从其它层叠样式表而来---并影响到当前元素样式--的信息。**

**$\color{orange}{1.关于element.style属性}$**

**element.style不能读取：**

- link的样式层叠表
- style标签中的样式

**element.style只能读取:**

- 只能读取元素默认样式
- 元素的属性style中的样式

**$\color{orange}{2.使用计算的样式--属性--即可解决}$**

| 属性or方法               | 使用及作用                 |
| ------------------------ | -------------------------- |
| document.defaultView属性 | 获取getComputedStyle()方法 |
| getComputedStyle(element,virtual)方法   | 获取element节点的最终呈现的样式信息<br/> 1.参数element表示获取样式的节点<br/>2.参数virtual表示是指定的伪类信息                          |
| element.currentStyle属性                         | (兼容IE)  <br/>   获取element节点的最终呈现的样式信息                      |

实例如下：

```html

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        * {
            padding: 0;
            margin: 0;
        }

        div.box {
            height: 200px;
            border: 1px solid #d0d0d0;
        }
    </style>

</head>

<body>
    <div class="box" style="width: 200px;">

    </div>

    <script>
        window.onload = function () {

            var box = document.getElementsByClassName('box')[0];

            box.addEventListener('click', function (e) {

                console.log('width:' + box.style.width)
                console.log('height:' + box.style.height)

                console.log('Computed-width:' + document.defaultView.getComputedStyle(box, null)['width'])
                console.log('Computed-height:' + document.defaultView.getComputedStyle(box, null).height)

                console.log('Computed-width-IE:' + box.currentStyle['width'])
                console.log('Computed-height-IE:' + box.currentStyle.height)

            }, false)

        }
    </script>
</body>


```
