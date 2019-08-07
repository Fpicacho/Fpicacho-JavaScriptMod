window.onload=function(){
    //页面加载完成后 获取事件源
    var cart = document.getElementById("cart");
    var prevBtn = document.getElementById("prev");
    var textBtn = document.getElementById("text");

    //定义最小与最大值
    var minIndex=1,maxIndex=6;
    //定义当前显示的值 并且默认为1
    var currentIndex = minIndex;


    textBtn.onclick=function(){
        //如果当前值等于定义最大值为了防止移除将当前值定义到最小数不满足则当前值自增
        if(currentIndex === maxIndex){
            currentIndex = minIndex;
        }else{
            currentIndex++;
        }
        // 利用setAttribute改变img中的src参数
        cart.setAttribute('src','./images/image'+currentIndex+'.jpg');
        console.log(currentIndex);
    }

    prevBtn.onclick=function(){
        if(currentIndex === minIndex){
            currentIndex = maxIndex;
        }else{
            currentIndex--;
        }
        cart.setAttribute('src','./images/image'+currentIndex+'.jpg');
    }
}