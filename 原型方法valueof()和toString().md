# valueOf()和toString()区别

- **toString():返回对象的字符串表示形式**
- **valueOf():返回指定对象的基元值**

实例如下：

    var obj = {
        toString:function(){
            return 'hello world';
            }
        }

    alert(isNaN(obj)) //true
