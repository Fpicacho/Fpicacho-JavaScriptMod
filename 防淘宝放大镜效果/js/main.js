window.onload = function () {
    function $(id){return typeof id === 'string'?document.getElementById(id):null;}

    $('small_box').onmouseover = function () {
        $('mask').style.display = 'block';
        $('big_box').style.display = 'block';
    };

    $('small_box').onmouseout = function () {
        $('mask').style.display = 'none';
        $('big_box').style.display = 'none';

        $('small_box').onmousemove = function (e) {
            e = e || window.event;
            //求 small_box移动位置
            var moveX = e.clientX - $('small_box').offsetLeft - $('box').offsetLeft - $('mask').offsetWidth * 0.5;
            var moveY = e.clientY - $('small_box').offsetTop - $('box').offsetTop - $('mask').offsetHeight * 0.5;

            if(moveX < 0){
                moveX = 0 ;
            }else if(moveX >= $('small_box').offsetWidth - $('mask').offsetWidth){
                moveX = $('small_box').offsetWidth - $('mask').offsetWidth;
            }

            if(moveY < 0){
                moveY = 0 ;
            }else if(moveY >= $('small_box').offsetHeight - $('mask').offsetHeight){
                moveY = $('small_box').offsetHeight - $('mask').offsetHeight;
            }

            $('mask').style.left = moveX + 'px';
            $('mask').style.top = moveY + 'px';

            var x = moveX / ($('small_box').offsetWidth - $('mask').offsetWidth);
            var y = moveY / ($('big_img').offsetWidth - $('big_box').offsetWidth);

            $('big_img').style.left = -x *($('big_img').offsetWidth - ($('big_box').offsetWidth)) + 'px';
            $('big_img').style.top = -x *($('big_img').offsetHeight - ($('big_box').offsetHeight)) + 'px';
        }
    }
};