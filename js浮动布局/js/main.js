window.onload = function(){
    var btns = document.getElementsByTagName('button');
    var items = document.getElementsByClassName('item');
    btns[0].onclick = function(){
        M_flex(3)
    }
    btns[1].onclick = function(){
        M_flex(4)
    }
    btns[2].onclick = function(){
        M_flex(5)
    }
    function M_flex(colsNum){
        for(i = 0; i<items.length; i++){
            //利用父级元素宽度控制浮动列数 offsetWidth获取对象元素宽度
            items[i].parentNode.style.width = (colsNum*items[i].offsetWidth)+'px';
            items[i].style.float = 'left';
        }
    }
}