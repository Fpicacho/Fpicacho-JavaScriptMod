window.onload = function(){
    var file = document.getElementById('file');
    // onchange事件 内容发生改变时
    file.onchange = function(){
        //获取上传图片路径
        var path = this.value;
        //获取 . 在路径中的位置
        var loc = path.lastIndexOf('.');
        //截取文件后缀名
        var suffix = path.substr(loc);
        //统一转换小写
        var lower_suffix = suffix.toLowerCase();
        //判断
        if(lower_suffix === '.jpg' || lower_suffix === '.png'){
            alert('上传图片格式合法');
        }else{
            alert('上传图片格式非法！');
        }
    }
}