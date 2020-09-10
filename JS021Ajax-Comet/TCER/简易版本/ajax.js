function ajax(obj){
    var xhr = new XMLHttpRequest();
    
    if(typeof obj.data==='object'){
        obj.data = formData(obj.data)
    }else{
        obj.data = obj.data
    }
    
    if(obj.method==='get'){
        if(obj.data.indexOf('?')==-1){
            obj.url = obj.url+"?"+obj.data
        }else{
            obj.url = obj.url+obj.data;
        }
    }

    xhr.open(obj.method,obj.url,true)

    if(obj.method==='post'){
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(obj.data);
    }else{
        xhr.send(null);
    }

    xhr.onreadystatechange=function(){
        if(this.readyState===4){
            if(this.status >=200 && this.status<300){
                obj.success(this)
            }else{
                console.error('错误状态码'+this.status)
            }
           
        }
       
    }
   
}


function formData(data){
   var arr = [];
   for (var key in data) {
       if (data.hasOwnProperty(key)) {
           var el = data[key];
           arr.push(encodeURIComponent(key)+'='+encodeURIComponent(el));
       }
   }
   return arr.join('&')
}