window.onload = function(){
    function $(id){
        return typeof id === 'string'?document.getElementById(id):null;
    }

    var i = 0;

    $('btn').onclick = function(){

        setInterval(function(){
            i++;
            $('box').style.transform = `translate(${i}px,${i}px)`
        },10);
        
    }
}