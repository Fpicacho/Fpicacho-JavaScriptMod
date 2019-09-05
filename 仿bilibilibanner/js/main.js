window.onload = function () {
    var slider = document.getElementById('slider');
    var slide_main = document.getElementById('slide_main');
    var allBox = slide_main.children;
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');
    var slider_index = document.getElementById('slider_index');

    var iNow = 0;
    //动态索引
    for(var i = 0; i < allBox.length; i++){
        var span = document.createElement('span');
        if(i === 0){
            span.className = 'slider_index_icon current';
        }else {
            span.className = 'slider_index_icon';
            span.className = 'slider_index_icon';
        }
        span.innerText = i + 1;
        slider_index.appendChild(span);
    }

    //滚动元素归位
    var scroll_w = parseInt(getStyle(slider,'width'));
    console.log(scroll_w );
    for(j = 1; j < allBox.length; j++){
        allBox[j].style.left = scroll_w + 'px';
    }

    //监听下一个按钮事件
    next.onclick = function () {
        autoPlay();
    };

    autoPlay = function(){
        startMove(allBox[iNow],{'left':-scroll_w});
        iNow ++;
        if(iNow >= allBox.length){
            iNow = 0;
        }
        allBox[iNow].style.left = scroll_w + 'px';
        startMove(allBox[iNow],{'left': 0});
        changeIndex();
    };

    //上一个按钮事件
    prev.onclick = function () {
        startMove(allBox[iNow],{'left':scroll_w})
        iNow --;
        if(iNow < 0){
            iNow = allBox.length -1;
        }
        allBox[iNow].style.left = -scroll_w + 'px';
        startMove(allBox[iNow],{'left':0})
        changeIndex();
    };

    //遍历索引 添加事件
    var  slider_index_icons = slider_index.children;
    for(var i = 0; i < slider_index_icons.length; i++){
        slider_index_icons[i].onmousedown = function () {
            //获取当前点击的索引
            var index = parseInt(this.innerText) -1;

            //当前点击的索引与当前的iNow比较
            if(index > iNow){
                startMove(allBox[iNow],{'left':-scroll_w});
                allBox[index].style.left = scroll_w + 'px';
            }else if(index < iNow){
                startMove(allBox[iNow],{'left':scroll_w});
                allBox[index].style.left = -scroll_w + 'px';
            }
            iNow = index;
            startMove(allBox[iNow],{'left':0});
            changeIndex();
        }
    }
    var time = null;
    // 定时轮播
    time = setInterval(function () {
        autoPlay();
    },3000);


    // 悬浮解除定时器 停止轮播
    slider.onmousemove = function () {
        clearInterval(time);
    };
    // //恢复定时器
    slider.onmouseout = function () {
        time = setInterval(autoPlay,3000);
    };
    //控制索引
    function changeIndex() {
        for(var i = 0; i < slider_index_icons.length; i++){
            slider_index_icons[i].className = 'slider_index_icon';
        }
        slider_index_icons[iNow].className = 'slider_index_icon current';
    }
};