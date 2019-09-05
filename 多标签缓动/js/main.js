window.onload = function () {
    var boxs = document.getElementsByClassName('box');
    for(i = 0; i < boxs.length; i++){
        boxs[i].onmousemove = function () {
            straAtn(this,1000);
        };
        boxs[i].onmouseout = function () {
            straAtn(this,300);
        };
        straAtn = function (obj,End) {
            //管理定时器
            //定时器绑定于对象上 防止bug
            clearInterval(obj.time);
            obj.time = setInterval(function () {
                var cur =  parseInt(getStyle(obj,'width'));
                console.log(cur);
                speed = (End - cur) / 20;
                speed = End > cur ? Math.ceil(speed) : Math.floor(speed);

                //临界处理
                if(End === cur){
                    clearInterval(obj.time);
                    return;
                }
                obj.style.width = cur + speed + 'px';
            });
        }
    }
    
    function getStyle(obj,attr) {
            return getComputedStyle(obj,null)[attr];
    }
};