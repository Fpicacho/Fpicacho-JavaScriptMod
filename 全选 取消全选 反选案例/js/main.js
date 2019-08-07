window.onload=function(){
    //封装id选择 增加类型判断
    function $(id){
        return typeof id==='string'?document.getElementById(id):null;
    }
    var inputs = document.getElementsByTagName('input');
    
    //全选
    $('allSelect').onclick=function(){
        for(var i = 0;i<inputs.length;i++){
            inputs[i].checked = true;
        }
    }
    //取消选择
    $('cancelSelect').onclick=function(){
        for(var i = 0;i<inputs.length;i++){
            inputs[i].checked = false;
        }
    }
    //反选 这里利用了取反运算符简化代码
    $('revereSelect').onclick=function(){
        for(var i = 0;i<inputs.length;i++){
            inputs[i].checked = !inputs[i].checked;
        //     if(inputs[i].checked)
        //         inputs[i].checked = false;
        //         else
        //         inputs[i].checked = true;
        }
    }
}