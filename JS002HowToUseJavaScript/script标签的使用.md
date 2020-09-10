# script标签的使用

**$\color{green}{本章学习内容}$**

- 使用script标签元素的方式

- script标签属性
  
- script标签加载顺序
  
- script标签放置的位置
  
- 延迟脚本--defer属性
  
- 异步脚本--async
  （类似于--defer--属性，目的：改变处理脚本的行为）
  
- noscript标签

- **小结**

**$\color{green}{1.使用script标签元素的两种方式}$**

**$\color{orange}{1.1.直接在页面嵌入javaScript代码:}$**

```javascript
   <script type="text/javascript">console.log("test")</script>
```

在解释器对<\/script>元素内部的所有代码求值完毕前，页面中其余内容都不会被浏览器加载or显示。

**$\color{orange}{1.2.引入外部javaScript文件:}$**

和嵌入式JavaScript代码一样，在解析外部JavaScript（包括下载该文件   时，页面的处理会暂时停止。

```javascript
   <script type="text/javascript" src="js路径/js文件"></script>
```

**<\script>标签元素的src属性可以引入来自--外部域--的javaScript文件：**

- 优点：必要时可以引入多个--外部域--js文件。
- 弊端：能够引入任何--外部域--js文件，可能引入带有威胁的js代码，引入--外部域--需要谨慎。

**$\color{orange}{1.3.NOTICED:}$**

- 带有src属性的<\script>元素引入了外部的js文件,不应该在其标签中再包含额外的javaScript代码。
- 若包含了嵌入的代码，则只会下载并执行外部脚本文件，嵌入的代码会被忽略。

**$\color{green}{2.script标签的属性}$**

| 属性     | 特点   | 目标     | 作用                                                                                         | 注意                                                                                                                 |
| -------- | ------ | -------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| async    | 可选   | （掌握） | 表示应该立即下载脚本，但不应妨碍页面中的其他操作。 <br/>如：下载其他资源or等待加载其他脚本。 | (只对外部脚本文件有效)                                                                                               |
| defer    | 可选   | （掌握） | 表示脚本可以延迟到文档完全被解析和显示之后再执行。                                           | （只对外部脚本文件有效）<br/>（IE7及更早版本对嵌入脚本也支持这个属性）)                                              |
| src      | 可选   | （掌握） | 表示要引入和执行外部的脚本文件                                                               |                                                                                                                      |
| type     | 可选   | （了解） | 表示编写代码使用的脚本语言的内容类型（也称为MIME类型）                                       | 考虑到约定俗成和最大限度的浏览器兼容性,目前type属性默认值依旧还是text/javascript <br/>(可以看成是language的替代属性) |
| charset  | 可选   | （了解） | 表示通过src属性指定的代码的字符集。                                                          | 由于大多数浏览器会忽略它的值，因此这个属性很少有人使用。                                                             |
| language | 已废弃 | 已废弃   |                                                                                              |                                                                                                                      |

**$\color{green}{3.关于script的加载顺序}$**

- 只要script元素标签不存在--defer--和--async--属性。
- 浏览器都会按照script元素标签在页面中出现的先后顺序对它们依次进行加载和解析。

实例如下：

```javascript
        <script src="js文件1"></scirpt>
        <script src="js文件2"></scirpt>
        <script src="js文件3"></scirpt>
```

**解析顺序：**
js文件1--(解析完才会解析)--js文件2--依次--js文件3

**$\color{green}{4.script标签放置的位置}$**

**$\color{orange}{4.1.不建议}$**

- 1.传统做法是把script标签都放在head标签中，这种做法的目的就是：
  把所有外部文件（包括css文件和javaScript文件）的引用都放在相同的地方。
- 2.但是，head元素中包含javaSciprt文件，意味着等到全部javaScript代码都被下载、解析和执行完成以后，才能呈现页面的内容。
  （浏览器在遇到body标签时才开始呈现内容）
- 3.对于那些需要很多javaScript代码的页面来说，会导致浏览器呈现页面时出现明显的延迟，在加载完毕之前，导致页面窗口一片空白。

**不建议示范如下：**

```javascript
        <head>
                <meta charset="UTF-8" />
                <title></title>
                <script type="text/javascirpt" src="js路径1"></script>
                <script type="text/javascirpt" src="js路径2"></script>
        </head>
```

**$\color{orange}{4.2.建议}$**

- 1.为了解决此问题，现代web应用程序一般都把全部javaScript引用放在body元素中页面内容的后面。

**建议示范如下：**

```javascript
        <body>

                页面内容

                <script type="text/javascirpt" src="js路径1"></script>
                <script type="text/javascirpt" src="js路径2"></script>
        </body>
```

**$\color{green}{5.延迟脚本-defer属性:}$**

**$\color{orange}{5.1.工作原理:}$**

加载脚本>
延迟执行>
页面加载到<\/html>标签后执行>
若存在多个延迟执行>
可能会导致延迟脚本的执行顺序打乱

- 脚本会被延迟到整个页面都解析完毕后再运行
- （即：浏览器立即下载脚本，但延迟执行）
- 脚本会被延迟到浏览器遇到html标签后再执行

**$\color{orange}{5.2.使用目的:}$**

让脚本在执行时不会影响页面的构造。

**$\color{orange}{5.3.写法如下:}$**

```javascript
        <head>
                <meta charset="UTF-8" />
                <title></title>
                <script type="text/javascript" defer="defer" src="js路径"></script>
                <script type="text/javascript" defer="defer" src="js路径"></script>
        </head>
```

**$\color{orange}{5.4.属性defer加载的问题:}$**

- HTML5规范要求脚本按照其出现的先后顺序执行
- 延迟脚本不一定会按照顺序执行，也不一定在DOMContentLoad时间触发前执行，因此,最好只包含一个延迟脚本
- 由于浏览器版本的不同，可能有的浏览器会忽略defer属性
- **为此，我们还是建议把延迟脚本放在页面底部才是最佳选择**

**$\color{green}{6.异步脚本-async属性:}$**

**$\color{orange}{6.1.工作原理和过程:}$**

类似于--defer--属性，目的：改变处理脚本的行为

加载脚本>
加载完毕立即执行>
多个脚本可以并行进行加载和执行（异步）

**$\color{orange}{6.2.使用目的:}$**

不让页面等待两个脚本下载和执行，从而异步加载页面其他内容。
（为此，建议异步脚本不要在加载期间修改DOM）

**$\color{orange}{6.3.写法如下:}$**

```javascript
        <head>
            <meta charset="UTF-8" />
            <title></title>
            <script type="text/javascript" async src="js路径"></script>
            <script type="text/javascript" async src="js路径"></script>
        </head>
```

**注意:**
以上代码中，脚本二可能会在脚本已之前执行。
因此，确保两者之间互不依赖很重要

**$\color{orange}{6.4.使用注意事项:}$**

- **标记为async的脚本不保证按照指定它们的先后顺序执行；**
- **异步脚本一定会在页面的load事件之前执行；**
- 但可能会在DOMContentLoaded事件触发之前or之后执行。

**$\color{green}{7.noscript标签:}$**

**$\color{orange}{7.1.noscript标签的作用:}$**

**在noscript元素中的内容只有特定情况下才会显示出来。**

情况如下：

- 浏览器不支持脚本
- 浏览器支持脚本，但脚本被禁用

**$\color{orange}{7.2.标签的使用注意事项:}$**

- 这个元素可以出现在文档body标签中的任何 HTML 元素
- script元素除外

**$\color{orange}{7.1.3. 写法如下:}$**

```javascript
        <body>
                <noscript>
                        <p> 本页面需要浏览器支持（启用）JavaScript 。
                </noscript>
        </body>
```

**$\color{green}{7.总结:}$**

- 在包含外部 JavaScript 文件时，必须将 src 属性设置为指向相应文件的 URL。而这个文件既可以是与包含它的页面位于同一个服务器上的文件，也可以是其他任何域中的文件

- 所有 <\/script> 元素都会按照它们在页面中出现的先后顺序依次被解析。
  - 在不使用 defer 和async 属性的情况下:
  - 只有在解析完前面 <\/script> 元素中的代码之后，才会开始解析后面<\/script> 元素中的代码

- 由于浏览器会先解析完不使用 defer 属性的 <\/script> 元素中的代码，然后再解析后面的内容。所以一般应该把 <\/script> 元素放在页面最后，即html元素内容的后面，也就是 <\/body> 标签前面

- 使用 defer 属性可以让脚本在文档完全呈现之后再执行。延迟脚本总是按照指定它们的顺序执行(但是可能会出现执行顺序混乱)

- 使用 async 属性可以表示当前脚本不必等待其他脚本，也不必阻塞文档呈现。
  - 不能保证异步脚本按照它们在页面中出现的顺序执行
  - 若脚本之间存在依赖关系，不建议使用异步

- 使用<\/noscript>元素可以指定在不支持脚本的浏览器中显示的替代内容。但在启用了脚本的情况下，浏览器不会显示 <\/noscript> 元素中的任何内容
