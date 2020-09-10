# 原型模式

**$\color{green}{本章学习内容}$**

- 关于原型
- 理解原型对象
- 原型与in操作符
- 原型的动态性
- 原生对象的原型

**$\color{green}{1.关于原型}$**

**$\color{orange}{1.1.是什么是原型？}$**

- 我们创建的每个函数都有一个 prototype（原型）属性，这个属性是一个指针，指向一个对象
- 而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。

**$\color{orange}{1.2.使用原型对象的好处？}$**

- **可以让所有对象实例共享它所包含的属性和方法**
- 也就不必在构造函数中定义对象实例的信息，而是可以将这些信息直接添加到原型对象中

实例如下：

```javascript
        function Person() {

        }
        Person.prototype.name = "Nicholas";
        Person.prototype.age = 29;
        Person.prototype.job = "Software Engineer";
        Person.prototype.sayName = function () {
            console.log(this.name);
        };

        var person1 = new Person();
        person1.sayName(); //"Nicholas"

        var person2 = new Person();
        person2.sayName(); //"Nicholas"

        console.log(person1.sayName === person2.sayName); //true

```

虽然Person构造方法内部为空，但是在其原型上定义了属性和方法。
因此，所有构造方法的实例都共享其原型上的属性和方法！！！

**$\color{orange}{1.3.使用原型的注意事项:}$**

- **当为对象添加一个属性时，这个属性就会屏蔽原型对象中保存的同名属性**

实例如下：

```javascript
        function Person() {
            this.name = 'yzb';
        }

        Person.prototype.name = "Nicholas";
        Person.prototype.age = 29;
        Person.prototype.job = "Software Engineer";
        Person.prototype.sayName = function () {
            console.log(this.name+'_'+this.age);
        };

        var person1 = new Person();
        person1.sayName(); //yzb_29

        var person2 = new Person();
        person2.sayName(); //yzb_29
```

- **使用for in会遍历到原型链上的属性**

实例如下：

```javascript
        function Person() {
            this.name = 'yzb';
        }

        Person.prototype.name = "Nicholas";
        Person.prototype.age = 29;
        Person.prototype.job = "Software Engineer";
        Person.prototype.sayName = function () {
            console.log(this.name + '_' + this.age);
        };

        var person1 = new Person();

        for (let item in person1) {
            console.log(item,person1[item])
        }
```

- **若不想遍历到原型链上的属性:**
  - 可以使用Obj.hasOwnProperty()判断这个属性是否为自身属性
  - 也可以使用Object.keys()去获取自身可枚举属性
  - 也可以使用Object.entries()去获取自身可枚举属性和属性值

实例如下：

```javascript
        function Person() {
            this.name = 'yzb';
        }

        Person.prototype.name = "Nicholas";
        Person.prototype.age = 29;
        Person.prototype.job = "Software Engineer";
        Person.prototype.sayName = function () {
            console.log(this.name + '_' + this.age);
        };

        var person1 = new Person();

        // 1.obj.hasOwnProperty()判断当前属性是否自身属性
        for (let item in person1) {
            if(person1.hasOwnProperty(item)){
                console.log(item,person1[item])
            }
        }

        // 2.Object.keys()枚举自身可遍历的属性
        console.log(Object.keys(person1))

        // 3.Object.entries()枚举自身可遍历的属性和属性值
        console.log(Object.entries(person1))
```

**$\color{green}{2.理解原型对象}$**

**$\color{red}{2.1.原型须知！！！}$**

- (函数)prototype:指向当前函数的prototype原型对象
- (函数)prototype.constructor:指向当前函数本身
- (函数or实例)constructor:指向当前实例的构造方法
- (函数or实例)\__proto__:指向当前实例的构造方法的prototype

**$\color{red}{2.2.参考图！！！}$**

![avatar](./JS002创建对象003原型模式.png)

实例如下(原型关系)：

```javascript

        function father(name, age) {
            this.name = name,
                this.age = age,
                father.prototype.getInfo = function () {
                    console.log(this.name + ':' + this.age)
                }
        }

        var son = new father('yzb', 12);

        // son => father
        console.dir(son.constructor)

        // son => father.prototype
        console.log(son.__proto__);
        // father => father.prototype
        console.log(father.prototype)

        // son => fahter.prototype => father.prototype.__proto__ = Object
        console.log(son.__proto__.__proto__)
        // father => father.prototype =>father.prototype.__proto__ = Object
        console.log(father.prototype.__proto__)

        // son => fahter.prototype => father.prototype.__proto__ = Object => Object.__proto__ = null
        console.log(son.__proto__.__proto__.__proto__)
        // father => father.prototype =>father.prototype.__proto__ = Object => Object.__proto__ = null
        console.log(father.prototype.__proto__.__proto__)

        console.log('分隔符*******************************')
        // Person => Person.prototype.constructor = Person  
        console.dir(father.prototype.constructor.constructor)
        // Person => Person.constructor = 父级构造函数Function()
        console.log(father.constructor)

        // Person => Person.constructor = 父级构造函数Function() =>Function().prototype
        console.log(father.constructor.prototype)
        // Person =>Function().prototype
        console.log(father.__proto__)

```

**$\color{green}{3.原型与in操作符}$**

**$\color{orange}{3.1.关于两种使用in操作符的方式：}$**

- 单独使用in操作符
- 在for-in循环中使用

**$\color{orange}{3.2.单独使用in操作符：}$**

- in操作符，只要对象能访问给定属性时就返回true(包括原型)
- 当不能存在该属性返回false

实例如下：

```javascript
        function Person() {
            this.name = 'yzb';
        }

        Person.prototype.name = "Nicholas";
        Person.prototype.age = 29;
        Person.prototype.job = "Software Engineer";
        Person.prototype.sayName = function () {
            console.log(this.name + '_' + this.age);
        };

        var person1 = new Person();

        console.log('name' in person1);//true
        console.log('age' in person1); //true
        console.log('sex' in person1); //false
```

**$\color{orange}{3.3.in操作符和Obj.hasOwnProperty()方法：}$**

- 当in操作符返回true时，就证明这个对象本身or原型中包含了该属性
- 使用hasOwnProperty()方法可以判断这个属性是否为对象自身属性

因此，二者同时使用就可以很轻松的辨别这个属性是否为自身属性or原型属性。

**$\color{green}{4.原型的动态性}$**

**$\color{orange}{4.1.通常的情况(未重写原型对象)：}$**

由于在原型中查找值的过程是一次搜索，因此我们对原型对象做的任何修改都能立即从实例中反映出来————即使是先创建了实例后修改原型也照此。

实例如下：

```javascript

        let man = new Person();

        function Person() {

        }

        Person.prototype.getName = function () {
            console.log('name' + this.name);
        }
        Person.prototype.name = 'yzb';

        man.getName();//nameyzb

```

**$\color{orange}{4.2.重写原型对象：}$**

调用构造函数会为实例添加一个指向最初原型的__proto__指针。
然后把原型修改成另外一个对象，就等于切断了构造函数与最初原型的联系。
(实例中的__proto__指针仅仅指向原型，不指向构造函数)

```javascript

        let man = new Person();

        function Person() {

        }

        // 重写原型对象，导致构造函数与最初的原型关系断裂。
        Person.prototype = {
            constructor:Person,
            name:'yzb',
            getName:function(){
                console.log('name'+this.name)
            }
        }

        man.getName();//报错

```

**解析：**

当我们重写了其原型对象：

- 就会导致当前构造函数与当前新的原型对象关系断裂。
- 因为实例保存的始终是原始的原型对象，所以无法访问到新的原型对象。

**$\color{green}{5.原生对象的原型}$**

**$\color{orange}{5.1.特点：}$**

- 原型模式的不仅体现在创建自定义类型方面。
- 所有的引用类型，都是采用这种模式创建的
  (Object,Array,String等等)
- 通过原型对象可以取得所有默认方法的引用，也可以定义新的方法。

实例如下：(给数组添加contains方法)

```javascript

        let arr = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 5, 67];

        Array.prototype.contains = function (compare) {

            let max = this.length;

            while (max--) {
                if (this[max] === compare) {
                    return true;
                }
            }
            return false;
        }

        console.log(arr.contains(1))

```

**$\color{orange}{5.2.注意事项：}$**

通常情况下不建议在原生对象中添加or修改原生方法，可能会因为因为命名冲突导致意外。
