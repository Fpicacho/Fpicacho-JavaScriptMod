window.onload = function(){
    function $(id){
        return typeof id ==='string'?document.getElementById(id):null;
    }
    
    console.log(getElementLeft($('box4')));
    console.log(getElementTop($('box4')));
    function getElementLeft(obj){
        //1.获取当前元素左偏移量
        var actuaiLeft = obj.offsetLeft;
        // return actuaiLeft;
        //2.求出定位父级
        var parent = obj.offsetParent; //返回目标元素最近的定位父级
        //3.循环
        while(parent != null){
            //求出当前左方偏移量
            actuaiLeft = actuaiLeft + parent.clientLeft + parent.offsetLeft;
            //2更新定位父级
            console.log(parent);
            parent = parent.offsetParent;
        }

        return actuaiLeft + 'px';
    }

    function getElementTop(obj){
        var actuaiTop = obj.offsetTop;
        var parent = obj.offsetParent; //返回目标元素最近的定位父级
        //3.循环
        while(parent != null){
            //求出当前左方偏移量
            actuaiLeft = actuaiTop + parent.clientTop + parent.offsetTop;
            //2更新定位父级
            console.log(parent);
            parent = parent.offsetParent;
        }

        return actuaiTop + 'px';
    }
}