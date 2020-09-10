# window对象

**$\color{green}{本章学习内容}$**

- 了解window
- 全局作用域
- 获取窗口位置
  - screenLeft 和 screenX
  **(支持：IE、Safari、Opera和Chrome)**
  - screenTop 和 screenY
  **(支持：FireFox)**
- 移动窗口位置
  - moveTo()
  - moveBy()
- 获取窗口大小
  - innerWidth 和 outerWidth
  - innerHeight 和 outerHeight
- 设置窗口大小
  - resizeTo()
  - resizeBy()
- 导航和打开窗口
  - window.open()
  - window.close()
- 间歇调用和超时调用
  - setInterval()
  - setTimeout()
  - clearInterval()
  - clearTimeout()
- 系统对话框
  - alert()
  - confirm()
  - prompt()

**$\color{green}{1.了解window}$**

DOM的核心对象是window，表示浏览器的一个实例。

在浏览器中window具有双重角色：

- 是javascript访问浏览器窗口的一个接口
- 也是ECMAScript规定的Global对象。

**$\color{green}{2.全局作用域}$**

全局作用域中声明的变量、函数都会变成window对象的属性和方法。

```javascript

    var age = 22;

    function getInfo(){
        console.log(this.age)
    }

    getInfo();//29
    console.log(age);//29
    window.getInfo();//29
```

**解析：**

因为上述函数存在全局作用域中：
所以this指向了window，this.age = window.age。

**$\color{orange}{2.1.注意事项：}$**

定义在全局的变量和定义在window对象上有一定的差别。

- 全局变量不能delete操作符删除
  (因为使用var声明的属性描述符configurable:false)
- window对象上定义的属性可以delete删除

**$\color{green}{3.获取窗口位置}$**

- screenLeft 和 screenX
  **(支持：IE、Safari、Opera和Chrome)**
- screenTop 和 screenY
  **(支持：FireFox)**

```javascript
    var winX = (typeof window.screenLeft == 'number') ? window.screenLeft : window.screenX;

    var winY = (typeof window.screenTop == 'number') ? window.screenTop : window.screenY;

    console.log(winX,winY)
```

**$\color{green}{4.移动窗口位置}$**

- moveTo(x,y)
  **表示移动到精准的坐标**
- moveBy(x,y)
  **表示在当前坐标x轴和y轴移动的像素**

moveTo(x,y)实例：

```javascript
  // 浏览器移动到左上
  window.moveTo(0, 0)
```

moveBy(x,y)实例：

```javascript
  // 浏览器在当前坐标往右下移动100
  window.moveBy(100,100)
```

**$\color{orange}{使用注意：}$**

这两个方法可能会被浏览器禁用。
这两个方法都只能对最外层的window对象使用。

**$\color{green}{5.移动窗口位置}$**

- innerWidth 和 outerWidth
- innerHeight 和 outerHeight

outer获取的是浏览器窗口本身的尺寸
inner获取的是容器页面视图区的大小(减去边框宽度)

**$\color{orange}{使用注意：}$**

- 在Opera中，这outer属性的值表示页面视图容器大小。
- 在Chrome中，outer和inner返回相同的值，即视口大小而非浏览器窗口大小。

**$\color{green}{6.设置窗口大小}$**

- resizeTo(x,y)
  **表示给浏览器窗口设置新的宽度和高度**
- resizeBy(x,y)
  **表示在当前浏览器窗口的宽度和高度上进行改变**

```javascript

    // 调整到100x100
    window.resizeTo(100,100);

    // 原来的基础上进行调整，200x50
    window.resizeBy(100,-50);

```

**$\color{green}{7.导航和打开窗口}$**
  
- window.open()
  打开一个新窗口
- window.close()
  关闭当前窗口

**7.1.传入一个参数url：**

实例如下：

```javascript
    window.open('xiaojiejie.xyz');
```

**7.2.传入一个参数url,另一个target:**

实例如下：

```html
    <iframe src="" frameborder="0" name="newPage">
    </iframe>

    <a href="xiaojiejie.xyz" target="newPage">newPage</a>
```

等同于：

```html

    <iframe src="" frameborder="0" name="newPage">
    </iframe>

    <script>
        window.open('xiaojiejie.xyz','newPage');
    </script>
```

**$\color{green}{8.间歇调用和超时调用}$**

- setInterval()
- setTimeout()
- clearInterval()
- clearTimeout()

**$\color{green}{9.系统对话框}$**

- alert()   ：警告框
- confirm() ：确认框
- prompt()  ：提示框

**$\color{green}{9.1.alert()}$**

```javascript
    alert('nihao');
```

**$\color{green}{9.2.confirm()}$**

```javascript
    var ifTrue = confirm('确认支付？');

    if (ifTrue) {
        alert('支付成功！');
    } else {
        alert('支付取消！');
    }
```

**$\color{green}{9.3.prompt()}$**

```javascript
    var ifTrue = prompt('确认支付？','请输入金额');

    if (ifTrue) {
        alert('支付成功！'+ifTrue);
    } else {
        alert('支付取消！'+ifTrue);
    }

```
