window.onload = function () {
    var box = document.getElementById('box');

    // console.log(getComputedStyle(box,null)['height']);
    console.log(getStyle(box,'height'));
    console.log();
    function getStyle(ojb,attr) {
        return getComputedStyle(ojb,null)[attr];
    }
};