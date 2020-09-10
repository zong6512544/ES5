# 基本包装类型---String

**$\color{green}{本章学习内容}$**

- 字符查找方法
  - charAt()
  - charCodeAt()
- 字符串操作方法
  - concat()
  - slice()
  - substring()
  - substr()
- 字符串位置方法
  - indexO[f()
  - lastIndexOf()
- trim()
  - trim()
  - trimLeft()
  - trimRight()
- 字符串大小写转换方法
  - toLowerCase()
  - toUpperCase()
- 字符串的模式匹配方法(匹配正则)
  - match() //类似于pattern.test()
  - search()
  - replace()
  - split()
- localeCompare()
- fromCharCode()

**$\color{green}{1.字符查找方法}$**

**作用：**

根据传入的参数位置，查找字符串中特定位置的字符。

**$\color{orange}{1.1.charAt()}$**

返回值：
返回当前给定位置的字符。

```javascript

    var str = 'yzb520haha';

    console.log(str.charAt(0));//返回第一个字符:y

    console.log(str.charAt(str.length - 1));//返回最后一个字符:a

    console.log(str.charAt(3));//返回指定位置字符:5

```

**$\color{orange}{1.2.charCodeAt()}$**

返回值：
返回当前给定位置的字符编码。

```javascript
    var str = 'yzb520haha';

    console.log(str.charCodeAt(0));//121

    console.log(str.charCodeAt(str.length - 1));//97

    console.log(str.charCodeAt(3));//53
```

**$\color{green}{2.字符串操作方法}$**

**$\color{orange}{2.1.concat()}$**

**作用：**

用于将一个or多个字符串拼接起来，返回拼接后的新字符串。

```javascript

    var me = 'ilove';

    me = me.concat('you','wm','!');
    console.log(me);//iloveyouwm!

```

**注意：**

虽然concat()方法是用来拼接字符串的方法，但实践中更多还是使用加号操作符(+)。

**$\color{orange}{2.2.slice()和substring()}$**

**作用：**

基于子字符串创建新的字符串并返回。

**传入两个参数：**

- 参数一：指定字符串开始的位置(包括开始位置)
- 参数二：指定字符串结束的位置(不包括尾部)

```javascript

    var me = 'ilove520wm!!';

    console.log(me.slice(5,8))
    console.log(me.substring(5,8))

```

**$\color{orange}{2.3.substr()}$**

**作用：**

基于子字符串创建新的字符串并返回。

**传入两个参数：**

- 参数一：指定字符串开始的位置(包括开始位置)
- 参数二：指定从开始位置往后返回的字符个数。

```javascript

    var me = 'ilove520wm!!';

    console.log(me.slice(5,8))
    console.log(me.substring(5,8))
    console.log(me.substr(5,3));

```

**$\color{green}{3.字符串位置方法}$**

作用：

- 根据传入的字符，查找该字符在字符串的位置。
- 如果没有找到返回-1

传参：

- 参数一：查找的字符
- 参数二：开始查找的起点位置(可选)

**$\color{orange}{3.1.indexOf()}$**

特点：
正序查找，从左往右

```javascript
    var yzb = 'yzb520yzblovewmyzb';
  
    console.log(yzb.indexOf('y'));   // 0
    console.log(yzb.indexOf('y',5)); // 6
    console.log(yzb.indexOf('y',14));// 15
    console.log(yzb.indexOf('y',22));// -1
```

**$\color{orange}{3.2.lastIndexOf()}$**

特点：
逆序查找,从指定末尾位置开始，从右往左

```javascript
    var yzb = 'yzb520yzblovewmyzb';

    console.log(yzb.lastIndexOf('y'));   // 15
    console.log(yzb.lastIndexOf('y',5)); // 0
    console.log(yzb.lastIndexOf('y',14));// 6
    console.log(yzb.lastIndexOf('y',22));// 15
```

**$\color{green}{4.trim()}$**

- trim()
  删除前置和末尾的空格，返回新字符串。
- trimLeft()
  删除前置空格，返回新字符串
- trimRight()
  删除后置空格，返回新字符串

```javascript

   var trm = '  i love u  ';

   console.log(trm.trim());
   console.log(trm.trimLeft());
   console.log(trm.trimRight());

```

**$\color{green}{5.字符串大小写转换方法}$**

将字符串进行大小写转换后返回新数组。

- toLowerCase()
  将字符转换为小写(常用)
- toUpperCase()
  将字符转换为大写(常用)
- toLocaleLowerCase()
  将字符转换为小写(根据特定地区实现)
- toLocaleUpperCase()
  将字符转换为小写(根据特定地区实现)

```javascript

      var yzb = 'iLoveYOUwM';

      console.log(yzb.toLowerCase())//iloveyouwm
      console.log(yzb.toUpperCase())//ILOVEYOUWM

```

**$\color{green}{6.字符串的模式匹配方法(匹配正则)}$**

**$\color{orange}{6.1.match()}$**

**6.1.1.特点：**

- 字符串调用match()就相当于调用RegExp的exec()方法
- 返回一个数组匹配项
  (所有匹配项都存入在此数组)
- 没有找到返回-1

**6.1.2.match()方法接受一个参数：**

- 正则表达式
- 一个RegExp对象

```javascript

      var str = 'yzb i love u WM 520 yzb';
      console.log(str.match(/yzb/g));

      var reg = new RegExp('yzb', 'g');
      console.log(str.match(reg));

      var reg02 = /yzb/g;
      console.log(str.match(reg02));

```

**6.1.3.使用实例：**
**匹配某个字符串在另一个字符串中出现的次数。**

```javascript

    var str = 'yzb i love u WM WBJ WBJ WBJ 520 yzb';

    console.log(str.match(/WBJ/g));
    console.log(str.match(/WBJ/g).length);//3

```

**$\color{orange}{6.2.search()}$**

**6.2.1.特点：**

- 字符串调用search()就相当于调用RegExp的exec()方法。
- 返回第一个匹配项的位置。
- 没有找到返回-1

**6.2.2.search()方法接受一个参数：**

- 正则表达式
- 一个RegExp对象

```javascript
    var str = 'yzb i love u WM WBJ WBJ WBJ 520 yzb';
    console.log(str.search(/WBJ/g));

    var reg = new RegExp('WBJ','g');
    console.log(str.search(reg));

    var reg02 = /WBJ/g;
    console.log(str.search(reg02));

```

**6.2.3.使用实例：**
**查询某个字符串在另一个字符串中第一次出现的位置**

```javascript
    var str = 'yzb i love u WM WBJ WBJ WBJ 520 yzb';

    console.log(str.search(/WBJ/g))
```

**$\color{orange}{6.3.replace()}$**

**6.3.1.特点：**

- 替换某个字符串中匹配到的内容

**6.3.2.replace()方法接受两个参数：**

- 匹配项
  - 可以是字符
  - 也可使正则
- 被替换的字符串or函数

```javascript
      var str = 'yzb i love u WM WBJ WBJ WBJ 520 yzb';
      console.log(str.replace(/WBJ/g, 'WM'));

      var reg = new RegExp('WBJ', 'g');
      console.log(str.replace(reg, 'WM'));

      var reg02 = /WBJ/g;
      console.log(str.replace(reg02, 'WM'));

    // 上述打印结果均相同:
    //yzb i love u WM WM WM WM 520 yzb
```

**6.3.3.使用实例(参数2为字符串)：**
**将某个字符串中的非数字替换为空格**

```javascript
    var str = '123yzb i 123love u13123 WM 123WBJ 123WBJ WBJ 520 yzb3';

    console.log(str.replace(/\D/g, ''))
```

**6.3.4.使用实例(参数2为函数)：**

```javascript
    str.replace(reg,function(item,index,arr){
        // 处理并返回替换结果
        return '';
    })
```

- 参数一：为匹配项
- 参数二：为当前匹配项下标
- 参数三：为当前被匹配字符串

```javascript
      var str = '123yzb i 123love u13123 WM 123WBJ 123WBJ WBJ 520 yzb3';

      console.log(str.replace(/\D/g,function(item,index,arr){
          console.log(item,index,arr)
          return '';
      }))
```

**$\color{orange}{6.4.split()}$**

**6.4.1.特点：**

- 根据特定字符将字符串切割为数组

**6.4.2.split()方法接受两个参数：**

- 匹配项
  - 可以是字符
  - 也可使正则
- 指定的数组大小(可选)
  (若未指定数组大小，将显示所有分割内容)

```javascript
        var str = 'yzb i love u WM WBJ WBJ WBJ 520 yzb';

        console.log(str.split(/WBJ/g));
        console.log(str.split(/WBJ/g), 2);

        var reg = new RegExp('WBJ', 'g');
        console.log(str.split(reg));
        console.log(str.split(reg, 2));

        var reg02 = /WBJ/g;
        console.log(str.split(reg02));
        console.log(str.split(reg02, 2));
```

**6.4.3.使用实例：**
**将一个数组转换为字符串，字符转根据逗号分割成数组，然后恢复之前原来的数据**

```javascript

        var arr = [1, 2, 3, 4, 5, 6, 7, 8];
        console.log(arr);

        arr = arr.toString();
        console.log(arr);

        arr = arr.split(',').map(function(item,index,arr){
            return parseInt(item,10);
        });
        console.log(arr)
```
