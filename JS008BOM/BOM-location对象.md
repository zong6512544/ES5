# location对象

**$\color{green}{本章学习内容}$**

- 了解location
- location属性表
- location常用方法
  - location.assgin(url);
  - location. replace(url);
  - location.reload(boolean);

**$\color{green}{1.了解location}$**

location既是window对象的属性，也是document对象属性。

```javascript
    window.location;
    document.location;
```

上述两者是一样的，均引用的同一个对象。

**$\color{green}{2.location属性表：}$**

|属性名|作用|
|-|-|
|hash|返回URL中的hash(#号后跟零or多个字符)<br/>如果URL中不包含散列，则返回空字符串|
|host|返回服务器名称和端口号(如果有)|
|href|返回当前加载页面的完整URL<br/>(location对象的toStirng()也返回这个值)|
|pathname|返回URL中的目录和(or)文件名|
|port|返回URL中指定的端口号<br/>如果URL不包含端口号返回空字符串|
|protocol|返回页面使用的协议<br/>(通常是http:或https:)|
|search|返回URL的查询字符。<br/>(这个字符以问号开头)|

实例如下：

```javascript
        console.log(location.hash)
        console.log(location.href)
        console.log(location.protocol)
        console.log(location.host)
        console.log(location.port)
        console.log(location.pathname)
        console.log(location.search)
```

**$\color{green}{3.location常用方法：}$**

**$\color{orange}{3.1.location.assgin(url)：}$**

打开新的URL并在浏览器的历史记录中生成一条记录。

- location.assing('xiaojiejie.xyz');
- window.location = 'xiaojiejie.xyz';
- location.href = 'xiaojiejie.xyz';

上述下面两种方法隐式调用了location.assing(url)方法。
且最常用的为location.href = 'url';

**$\color{orange}{3.2.location.replace(url)：}$**

上述方式修改了URL之后，浏览器的历史记录中就会生成一条新的记录，因此用户可以通过单击"返回"按钮导航到上一个页面。

若要禁止此行为，可以使用location.replace(url)。

这个方法可以导航到指定URL，且不会在浏览器中生成新记录，用户也就无法返回到上一个页面。

```javascript
    location.replace('xiaojiejie.xyz');
```

**$\color{orange}{3.3.location.reload(boolean)：}$**

其作用是重新加载当前显示的页面。

可以接受一个Boolean参数。

- location.reload(true)：
  (从服务器重新加载)
- location.reload(false)或location.reload()
  (可能从缓存中加载)

```javascript
    location.reload(true);
    location.reload();
    location.reload(false);
```
