window.onload = function(){
    var nowDate = document.getElementById('nowDate');
    setInterval(nowNumTime,10);

    function nowNumTime(){
        var now = new Date(); //实例化时间对象
        var hour = now.getHours(); //时
        var minute = now.getMinutes(); //分
        var second = now.getSeconds(); //秒

        var year = now.getFullYear(); //年
        var month = now.getMonth(); //月
        var d = now.getDate(); //日

        var week = now.getDate(); //星期 0~6
        var weeks = [' 星期天',' 星期一',' 星期二',' 星期三',' 星期四',' 星期五',' 星期六',]

        var temp= ''+(hour>12?hour-12:hour);
        if(hour === 0){
            temp = '12';
        }

        temp = temp+(minute<10?':0':':')+minute;
        temp = temp+(second<10?':0':':')+second;
        temp = temp+(hour>=12?' P.M.':' A.M.');
        temp = year+'年'+month+'月'+d+'日'+temp+weeks[week]
        nowDate.innerHTML = temp;
    }
}