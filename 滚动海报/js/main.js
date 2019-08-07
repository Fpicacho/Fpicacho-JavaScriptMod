window.onload = function(){
    function $(id){
        return typeof id === 'string'?document.getElementById(id):null;
    }

    var num = 0, time = null;
    $('top').onmouseenter = function(){
        clearInterval(time);
        time=setInterval(function(){
            num -= 10;
            // $('img').style.top = num + 'px' 
            if(num>=-750){
                $('img').style.top = num + 'px' 
            }else{
                clearInterval(time);
            }
        },100)
    }
    $('bottom').onmouseenter = function(){
        clearInterval(time);
        time=setInterval(function(){
            num += 10;
            // $('img').style.top = num + 'px' 
            if(num<=0){
                $('img').style.top = num + 'px' 
            }else{
                clearInterval(time);
            }
        },100)
    }
    $('box').onmouseout = function(){
        clearInterval(time);
    }
}