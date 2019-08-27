window.onload = function () {
    //常规玩法实现
    var li = document.getElementsByTagName('li');
    var box = document.getElementById('box');
    setTimeout(function () {
        var newli = document.createElement('li');
        newli.innerHTML = 7;
        box.appendChild(newli);
    },3000);

    box.onmousemove = function (e) {
        // console.log(e);
        e = e || window.event;
        target = e.target || e.srcElement;
        target.style.background = 'pink';
    }
    box.onmouseout = function (e) {
        // console.log(e);
        e = e || window.event;
        target = e.target || e.srcElement;
        target.style.background = 'palegreen';
    }
    // for(var i = 0; i < li.length; i++){
    //     console.log(li[i]);
    //     li[i].onmousemove = function () {
    //         this.style.background = 'pink';
    //     };
    //     li[i].onmouseout = function () {
    //         this.style.background = 'palegreen';
    //     };
    // }

    //事件代理玩法 事件实际目标实现
    // var box = document.getElementById('box');
    // box.onmousemove = function (e) {
    //     console.log(e);
    //     e = e || window.event;
    //     var target = e.target || e.srcElement;
    //
    //     target.style.background = 'pink';
    // };
    //
    // box.onmouseout = function (e) {
    //     e = e || window.event;
    //     var target = e.target || e.srcElement;
    //
    //     target.style.background = 'palegreen';
    // }
};