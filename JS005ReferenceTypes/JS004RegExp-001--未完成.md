# RegExp正则

**$\color{green}{本章学习内容}$**

- 正则的模式
- 正则的创建
- 正则的方法
  - exec()
  - test()
  - String.match()
- 注意事项

**$\color{green}{1.正则的模式:}$**

RegExp的每个实例都具有下列属性:

- g:表示全局模式(global):
  是用于执行全文的搜索
  （而不是在找到第一个就停止查找,而是找到所有的匹配）。
- i:表示不区分大小写(case=insensitive):
  用来执行不区分大小写的匹配。
- m:表示多行模式(multiline):
  即在到达一行文本末尾时还会继续查找下一行中是否存在于模式匹配的项。

**$\color{green}{2.正则的创建:}$**

- **var expression = / pattern / model;**
  构造函数创造正则对象时，需要常规的字符转义规则
  （在前面加反斜杠 \）

实例如下(邮箱)：

```javascript

    var email = new RegExp('^([0-9a-zA-Z]{6,18})@(qq|gmail|163|sohu)\.(com|cn)$','g');

    console.log(email.test('1435231027@qq.com'))

```

- **var expression = new RegExp(pattern,model);**

实例如下(邮箱)：

```javascript
    var email = /^([0-9a-zA-Z]{6,18})@(qq|gmail|163|sohu)\.(com|cn)$/g;

    console.log(email.test('1435231027@qq.com'))
```

**$\color{green}{3.正则的方法:}$**

**$\color{orange}{3.1.exec()方法(仅仅简述):}$**

- exec() 方法检索字符串中的指定值。
- 返回值是被找到的值。
- 如果没有发现匹配，则返回 null。

**3.1.1.exec()的返回值:**

- 返回包含第一个匹配项信息的数组。
  (返回的虽然是Array的实例，单包含两个额外的属性)
  - index:表示匹配项在字符串中的位置。
  - input:表示应用正则表达式的字符串。
- 在没有匹配项的情况下返回null。

```javascript

        var reg = /yzb/g;

        console.log(reg.exec("a1231a23lkdyzb00xxaasd"))
        // 0: "yzb"
        // index: 11
        // input: "a1231a23lkdyzb00xxaasd"
```

**$\color{orange}{3.2.test()方法:}$**

test()方法搜索字符串指定的值，根据结果并返回真或假。

**$\color{orange}{3.3.String.match()方法:}$**

**$\color{green}{4.注意事项:}$**

**$\color{red}{模式中使用的所有元字符必须转义:}$**

正则表达式中的元字符通常包括：
() [] {} \ ^ $ | ? * + .
