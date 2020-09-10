# DOM扩展

## $\color{purple}{ScrollIntoView()方法}$

如何滚动页面也是DOM规范没有解决的一个问题。
为了解决这个问题，浏览器实现了一些新方法。
————尤其是ScrollIntoView()

**$\color{orange}{1.ScrollIntoView()作用：}$**

- 其可以在所有HTML元素上调用，通过滚动浏览器窗口or某个容器元素，
调用元素就可以出现在视口中。
- 也可以适用于锚点

Elements.scrollIntoView(参数);

**$\color{orange}{2.ScrollIntoView()参数：}$**

| 参数           | 作用                                                                                                 |
| -------------- | ---------------------------------------------------------------------------------------------------- |
| true 或 不传入 | 会让调用元素的顶部与视口顶部尽可能平齐                                                   |
| false          | 让调用元素尽可能全部出现在视口中<br/>(可能的话，调用元素的地步会与视口底部平齐)<br/>不过顶部不一定平齐 |
| {block: 'start',behavior: 'smooth'} |靠近头部，并产生过渡效果(存在兼容问题)|
|{block: 'end',behavior: 'smooth'} |靠近底部，并产生过渡效果(存在兼容问题)|

**$\color{orange}{3.ScrollIntoView()适用场景：}$**

当页面变化时候，一般会用这个方法来吸引用户的注意力。

例如新增信息排列位置，发送信息显示最新消息。

实例如下：

```html
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        div.father {
            position: relative;
            width: 100vw;
            height: 100vh;
            box-sizing: border-box;
        }

        div.father header {
            width: 100vw;
            height: 10vh;
            box-sizing: border-box;
            border-bottom: 1px solid #d0d0d0;
        }

        div.father main {
            width: 100vw;
            height: 80vh;
            box-sizing: border-box;
            overflow: auto;
        }

        div.father main ul {
            width: 100%;
            box-sizing: border-box;
        }

        div.father ul li {
            height: 10vh;
            width: 100vw;
            border-bottom: 1px solid #d0d0d0;
            line-height: 10vh;
        }

        div.father footer {
            width: 100vw;
            height: 10vh;
            line-height: 10vh;
            text-align: center;
            box-sizing: border-box;
            border-top: 1px solid #d0d0d0;
        }

        div.father footer button {
            outline: none;
            padding: 1vh 1vw;
        }
    </style>
</head>

<body>

    <div class="father">
        <header></header>
        <main>
            <ul id="uls">

            </ul>
        </main>
        <footer>
            <button>点击添加并跳转到top</button>
            <button>点击添加并跳转到bottom</button>
        </footer>
    </div>


    <script>
        window.onload = function () {

            var btns = document.getElementsByTagName('footer')[0].children;
            var uls = document.getElementById('uls');

            btns[0].onclick = function () {
                createElements(uls, "top")
            }

            btns[1].onclick = function () {
                createElements(uls, "bottom")
            }

            // 创建节点
            function createElements(uls, location) {
                let li = document.createElement('li');
                let text = document.createTextNode(uls.children.length + 1);
                li.appendChild(text);

                if (location == "top") {
                    uls.insertBefore(li, uls.firstElementChild);
                    // uls.firstElementChild.scrollIntoView(true);
                    uls.firstElementChild.scrollIntoView({
                        block: 'start',
                        behavior: 'smooth'
                    });
                } else {
                    uls.appendChild(li);
                    // uls.lastElementChild.scrollIntoView(false)
                    uls.lastElementChild.scrollIntoView({
                        block: 'end',
                        behavior: 'smooth'
                    });
                }
            }
        }
    </script>
```
