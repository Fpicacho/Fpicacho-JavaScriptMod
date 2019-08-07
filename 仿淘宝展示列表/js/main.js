window.onload=function(){
    var bigImg = document.getElementById("bigImg");
    var smallImgs = document.getElementsByClassName("smallImg");

    // 遍历smallImgs取到每一个元素
    for(i = 0; i<smallImgs.length; i++){
        smallImgs[i].onmouseover = function(){
            // 为了防止事件激活后类无法清除 先把所有的标签类赋为空
            for(j = 0; j<smallImgs.length; j++){
                smallImgs[j].parentNode.parentNode.setAttribute('class','');
            }

            // 给鼠标悬浮的标签添加边框类
            this.parentNode.parentNode.setAttribute('class','active');

            // 获取小图src从而修改大图src
            var AsmallImgs = this.getAttribute('src');
            bigImg.setAttribute('src',AsmallImgs);
        }
    }
}
