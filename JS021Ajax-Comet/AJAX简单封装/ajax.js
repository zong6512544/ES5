const $yzb = {
    // 封装ajax（异步）
    // 传入一个对象
    // 该对象包含属性：
    // 1.请求地址url
    // 2.请求方法method
    // 3.请求参数data（对象）
    // 4.设置请求头reHeader
    // 5.回调函数success
    ajax: function (obj) {
        // 创建xhr
        let xhr = new XMLHttpRequest();
        // 将请求参数（对象）进行处理
        obj.data = this.formatData(obj.data);
        // 配置xhr
        // 如果是get请求
        if (obj.method.toUpperCase() === 'GET') {
            // 设置xhr
            xhr.open(obj.method, obj.url + '?' + obj.data, true);
            // GET为null
            xhr.send(null);
        } else if (obj.method.toUpperCase() === 'POST') {
            // 设置xhr
            xhr.open(obj.method, obj.url, true);
            // 设置请求头
            xhr.setRequestHeader("Content-Type", obj.reHeader === undefined ? "application/x-www-form-urlencoded" : obj.reHeader)
            // 请求参数
            xhr.send(obj.data);
        }

        xhr.onreadystatechange = function () {
            // 执行有5个步骤，最后一步则为请求完全执行成功（readyState=4）
            if (this.readyState === 4) {
                // 200~300请求成功（大于等于200小于300）
                if (this.status >= 200 && this.status < 300) {
                    // 执行回掉函数，所谓回掉函数就是当所有执行完毕后，执行的函数，此处用于将服务器返回的数据传入函数中，并自行编写代码处理！！！
                    obj.success(this);
                } else {
                    console.error('错误状态码' + this.status)
                }
            }
        }
    },
    // 从对象中提取参数
    formatData: function (data) {
        // 用数组存放分割的单个请求参数
        var arr = [];
        // 遍历对象
        for (var key in data) {
            // 如果对象data中存在该属性
            if (data.hasOwnProperty(key)) {
                // 将该属性根据key拿出value，并按键值对的方式，key=value存放进数组
                // 使用encodeURICompoent进行编码,对非字符串和非数字的其他字符进行编码处理
                arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
            }
        }
        // 使用join()方法，将数组转换成字符串并用指定符号隔开
        // 此处使用&分隔,用于url请求地址参数的组合
        return arr.join('&');
    }
}