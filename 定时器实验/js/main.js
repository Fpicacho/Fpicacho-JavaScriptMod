window.onload = function(){
    function $(id){return typeof id==='string'?document.getElementById(id):null;}
    var num = 0, timer = null;

    $('start').onclick = function(){
        clearInterval(timer); //开启定时器之前清除定时器 以免重复激活定时器产生堆叠BUG
        document.getElementById("start").setAttribute("disabled",true); //禁用开始按钮 进一步防止重复点击产生堆叠bug（其实是上一行没有很完美的解决问题= =！）
        timer = setInterval(function(){
            console.log(num++);
        },1000);
    }

    $('close').onclick = function(){
        clearInterval(timer);
        document.getElementById("start").setAttribute("disabled");
    }
}