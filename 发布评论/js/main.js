window.onload = function(){
    function $(id){
        return typeof id === 'string'?document.getElementById(id):null;
    }
    //监听按钮点击
    $('btn').onclick = function(){
        //获取用户输入的内容
        var content = $('comment').value
        //判断用户输入内容是否合法
        if(content.length === 0){
            alert('请输入内容');
            return;
        }
        //创建li标签往ul中向前插入
        var newLi = document.createElement('li');
        newLi.innerHTML = content+'<a href="javascript:void(0);">删除</a>'
        // $('comment_content').appendChild(newLi);
        $('comment_content').insertBefore(newLi,$('comment_content').children[0]);
        //清空输入框内容
        $('comment').value='';

        //删除评论方法
        var delBtns = document.getElementsByTagName('a');
        for(var i = 0;i < delBtns.length; i++){
            delBtns[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

//增删改查应用