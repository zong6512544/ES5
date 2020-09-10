# 流程控制语句

**$\color{green}{流程控制语句-switch语句}$**

$\color{orange}{1.switch使用须知}$

- 首先，可以在switch 语句中使用任何数据类型（在很多其他语言中只能使用数值），无论是字符串，还是对象都没有问题。
- 其次，每个 case 的值不一定是常量，可以是变量，甚至是表达式。
- switch 语句在比较值时使用的是全等操作符，因此不会发生类型转换
  （例如，字符串 "10" 不等于数值 10）

$\color{orange}{2.switch语法}$

- **switch 语句中的每一种情形（case）的含义是:**
  如果表达式(expression)等于这个值（value），则执行后面的语句（statement）
- **break 关键字会导致代码执行流跳出 switch 语句:**
  如果省略 break 关键字，就会导致执行完当前 case 后，继续执行下一个 case
- **default 关键字:**
  在表达式(expression)不匹配前面任何一种情形(value)的时候,执行default后后面statement

实例一：

```javascript
        switch (expression) {

        case value1: statement
        break;

        case value2: statement
        break;

        case value3: statement
        break;

        case value4:
        case value5:
            statement
        break;  

        //合并使用，
        //expression等于value4和value5时，
        //都执行通同一个statement

        default: statement
        }
```

实例二：

```javascript
        var num = 25;

        switch (true) {

        case num < 0:
            alert("Less than 0.");
        break;

        case num >= 0 && num <= 10:
            alert("Between 0 and 10.");
        break;

        case num > 10 && num <= 20:
            alert("Between 10 and 20.");
        break;

        default:
            alert("More than 20.");
        }
```

实例三：
要求，按键盘w,a,s,d实现三角形的左右移动，以及三角形的朝向

```html
    <style>
        body {
            width: 100%;
            height: 100%;
        }

        * {
            padding: 0;
            margin: 0;
        }

        div {
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            border: 50px solid transparent;
            border-bottom-color: red;
            transition: all 0.3s;
        }
    </style>

    <div>
    </div>

    <script>
        var trangel = document.getElementsByTagName("div")[0];
        document.onkeypress = function (e) {
            var e = event || window.event;
            var eC = e.keyCode;
            console.log(eC);
            // w:119
            // s:115
            // a:97
            // d:100
            // enter:13

            switch (eC) {
                case 119:
                    trangel.style.webkitTransform = "rotate(0deg)";
                    trangel.style.top = trangel.offsetTop - 10 + "px";
                    console.log(trangel.style.top);
                    break;
                case 115:
                    trangel.style.webkitTransform = "rotate(180deg)";
                    trangel.style.top = trangel.offsetTop + 10 + "px";
                    console.log(trangel.style.top)
                    break;
                case 97:
                    trangel.style.webkitTransform = "rotate(-90deg)";
                    trangel.style.left = trangel.offsetLeft - 10 + "px";
                    console.log(trangel.style.left)
                    break;
                case 100:
                    trangel.style.webkitTransform = "rotate(90deg)";
                    trangel.style.left = trangel.offsetLeft + 10 + "px";
                    console.log(trangel.style.left)
                    break;
                default:
                    alert("stop!!");
                    break;
            }
        }
        </script>
    </body>
```
