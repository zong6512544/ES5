# DOM扩展

## $\color{purple}{自定义数据属性}$

**HTML5规定可以给元素添加非标准的属性：**

- **自定义数据属性就是：自定义属性添加前缀(data-)**
- **目的是为元素提供与渲染无关的信息，或提供语义信息**
- **添加了自定义数据属性后，可以通过元素的dataset属性访问自定义数据属性**

$\color{orange}{1.dataset属性}$

dataset属性:

- 内置的是一个DOMStringMap的一个实例(MAP结构---键值映射结构)，
- 在这个映射中，每个data-name的属性，都有一个对应的属性值，
- 通过该属性名的获取值，不需要data-前缀，只需data-name的name。
(获取：dataset.name)

实例如下：

```html
    <!-- 自定义数据属性，前缀data- -->
    <p data-name="开发者宝宝" data-author="yzb"></p>
    <input data-password="这里需要填入密码" type="text">

    <script>

        var p = document.getElementsByTagName('p')[0];
        var input = p.nextElementSibling;

        // 输出data-name
        console.log(p.dataset.name+p.dataset.author);
        console.log(input.dataset.password)

        // 修改or设置：data-name
        input.dataset.password = '默认密码身份证后六位';

        console.log(input.dataset.password)

    </script>

```
