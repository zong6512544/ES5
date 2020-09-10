# history对象

**$\color{green}{本章学习内容}$**

- 了解history
- go()
- back()和forward()

**$\color{green}{1.了解history}$**

history:保存着用户上网的历史记录，从窗口被打开的那一刻算起。

history.length:保存的是历史记录的条数。

**$\color{green}{2.go()}$**

使用go()方法可以在用户的历史记录中任意跳转，可以向前可以向后。

**$\color{green}{2.1.go()接受一个参数}$**

**2.1.1.若参数为数字：**

- 正数表示往前跳转的页面数
- 负数表示完后跳转的页面数

```javascript

    // 后退一页
    history.go(-1)

    // 前进一页
    history.go(1)

    // 前进两页
    history.go(2)

```

**2.1.2.若参数为字符串：**

- 浏览器会跳转到历史记录中包含该字符串的第一个位置
（可能前进or可能后退，具体看哪个位置近）
- 如果不包含该字符串，那么这个方法什么也不做。

```javascript

    // 跳转到最近的xiaojiejie.xyz页面
    history.go('xiaojiejie.xyz');

```

**$\color{green}{3.back()和forward()}$**

- back()：模拟浏览器的后退
- forward():模拟浏览器的前进
