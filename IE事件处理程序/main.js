window.onload = function(){
    // IE:attachEvenet() detachEvenet()
    var box = document.getElementById('box');
    box.attachEvent('onclick',function(){
        //ie中this指向window
        // this.innerHTML += '1';  与DOM2类似 支持绑定多个事件
        box.innerHTML += '1';
    })
    // box.detachEvent('事件名'，事件处理程序);
}