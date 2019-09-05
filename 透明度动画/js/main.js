window.onload = function () {
    var box = document.getElementById('box');
    var time = null,alpha = 30,speed = 0;
    box.onmouseover = function () {
        opacityAtn(this,100);
    };
    box.onmouseout = function(){
        opacityAtn(this,30);
    };
    opacityAtn = function (ojb,endOpacityAtn) {
        clearInterval(time);
        time = setInterval(function () {
            speed = endOpacityAtn > alpha ? 10 : -10;
            alpha += speed;
            ojb.style.opacity = alpha / 100;
            if(alpha === endOpacityAtn){
                clearInterval(time);
                return;
            }
        },30);
    }
};