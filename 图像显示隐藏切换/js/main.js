window.onload=function(){
    //获取事件源
    var obtn = document.getElementById('btn');
    var oimg = document.getElementsByTagName('img')[0];

    //控制显示或者隐藏变量
    var isShow = true;

    obtn.onclick=function(){
        if(isShow){
            oimg.style.display='none';
            obtn.innerHTML='显示';
            isShow = false;
        }else{
            oimg.style.display='block';
            obtn.innerHTML='隐藏';
            isShow = true;
        }
    }
}