# Function（）函数的属性

**$\color{green}{本章学习内容}$**

$\color{purple}{每个函数都包含两个属性:}$

- length
- prototype

**$\color{green}{1.length属性:}$**

- 定义函数时,函数需要接收的形参个数
- (并非调用时实际传入的参数)

实例如下：

```javascript

        function sayHi() {
            return "no params";
        }
        console.log(sayHi.length);//0


        function sayName(name) {
            return name;
        }
        console.log(sayName.length);//1


        function sum(num1, num2) {
            return num1 + num2;
        }
        console.log(sum.length);//2

```

**$\color{green}{2.prototype属性:}$**

**$\color{orange}{2.1.prototype作用:}$**

- 对于引用类型而言
**$\color{red}{prototype 保存它们所有实例方法}$**
(是保存它们所有实例⽅法的真正所在)

- 在创建自定义引用类型以及实现继承时，prototype 属性的作用是极为重要的
（第 6 章将详细介绍）

- 在 ECMAScript 5 中，$\color{red}{prototype 属性是不可枚举的}$，因此使用 for-in 无法将其枚举。

实例如下：

```javascript
        var obj = {
            color: "red",
            changes: function (color) {
                return this.color + "和" + color;
            }
        }

        console.log(obj); //obj内部属性
        console.log(obj.changes); //返回一个函数体
        console.log(obj.changes("pink")); //执行函数
        console.log(obj.changes.length); //函数的属性length，获取定义函数时的形参数量
        console.log(obj.changes.prototype); //
```
