window.onload = function(){
    function $(id){
        return typeof id ==='string'?document.getElementById(id):null;
    }
    // input 失去焦点
    $('score').onblur = function(){
        var value = parseFloat(this.value);
        //isNaN 判断数据类型
        if(isNaN(value)){
            $('prompt').innerHTML = '输入值非法！'
            $('prompt').style.color='red';
            // $('score').style.borderColor='red';
            this.style.borderColor='red';
        }else if(value >= 0 && value <= 100){
            $('prompt').innerHTML = '输入成绩合法'
            $('prompt').style.color='green';
        }else{
            $('prompt').innerHTML = '输入值范围非法！'
            $('prompt').style.color='red';
            this.style.borderColor='red';
        }
    }

    // input 获取焦点 状态恢复
    $('score').onfocus = function(){
        $('prompt').innerHTML = '请输入分数'
        $('prompt').style.color = 'darkgray'
        this.style.borderColor='darkgray';

    }
}