var speed = 0;
/**
 * @param {Object} ele 当前元素
 * @param {Object} json 当前元素数值键值对 json数据
 * @param {Object} fn 当前回调函数
 */
function startMove(ele, json, fn) {
    //1.先关闭定时器 再开启定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function() {
        // 做个标杆，如果为true，证明所有的属性已到达终点值
        var flag = true;
        for (var attr in json) {
            // console.log(attr,json[attr]);
            // 1.1 获取样式属性
            var cur = 0;
            switch (attr) {
                case 'opacity':
                    cur = Math.round(parseFloat(getStyle(ele, attr)) * 100);
                    break;
                case 'scrollTop':
                    cur = ele[attr];
                    break;
                default:
                    cur = parseInt(getStyle(ele, attr));
                    break;
            }
            // if (attr === 'opacity') {
            //     cur = Math.round(parseFloat(getStyle(ele, attr)) * 100);
            // } else {
            //     cur = parseInt(getStyle(ele, attr));
            // }

            // 1.2.求出步长
            speed = (json[attr] - cur) / 5;
            // 1.3 判断speed的正负
            speed = json[attr] > cur ? Math.ceil(speed) : Math.floor(speed);
            // 1.4 如果所有的属性没到达终点值。继续执行下面的代码
            if(cur !== json[attr]){
                flag = false;
            }
            //1.5 处理属性名为opacity
            switch (attr) {
                case 'opacity':
                    ele.style[attr] = 'alpha(opacity:' + (cur + speed) + ')';
                    ele.style[attr] = (cur + speed) / 100;
                    break;
                case 'scrollTop':
                    ele.scrollTop = cur +speed;
                    break;
                default:
                    ele.style[attr] = cur + speed + 'px';
                    break;

            }
            // if (attr === 'opacity') {
            //     //1.5.1 兼容IE
            //     ele.style[attr] = 'alpha(opacity:' + (cur + speed) + ')';
            //     //1.5.2 主流浏览器
            //     ele.style[attr] = (cur + speed) / 100;
            // } else {
            //     // 1.6 走起来~
            //     ele.style[attr] = cur + speed + 'px';
            // }
        }
        // 1.6 如果flag是成立的，证明所有的属性都到达终点，此时清除定时器，执行回调函数
        if (flag) {
            clearInterval(ele.timer);
            if (fn) {
                fn();
            }
        }
    }, 30)
}
//取样式属性 避免和差
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        // 针对IE浏览器
        return obj.currentStyle[attr];
    } else {
        // 针对于Firefox浏览器
        return getComputedStyle(obj, null)[attr];
    }
}