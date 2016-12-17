/**
 * Created by Administrator on 2016/9/29 0029.
 */

function $id(id) {
    return document.getElementById(id)
};
function getScroll() {
    if (window.pageXOffset != null) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.documentMode == "CSS1Compat") {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
function cs(obj) {
    return console.log(obj);
}
function blockShow(obj) {
    obj.style.display = "block";
}
function noneShow(obj) {
    obj.style.display = "none";
}
function client() {
    if (window.innerHTML != null) {
        return {
            width: window.innerWidth,
            height: window.innerWidth
        }
    }
    else if (document.documentMode == "CSS1Compat"){
         return{
             width: document.documentElement.clientWidth,
             height: document.documentElement.clientHeight
         }
    }
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function aniMy(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            //返回当前属性值
            var currnets = 0;
            var step = 0;
            if (attr == "opacity") {
                currnets = Math.round(parseInt(getAttr(obj, attr) * 10)) || 0;
                step = (parseInt(json[attr] * 10) - currnets) / 10;
            }
            else {
                currnets = parseInt(getAttr(obj, attr));
                step = (json[attr] - currnets) / 10;
            }
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (attr == "opacity") {
                //高版本
                if ("opacity" in obj.style) {
                    // obj.style.opacity = json[attr];
                    obj.style.opacity = (currnets + step) / 10;
                }
                else {
                    // obj.style.filter = "alpha(opacity = " + json[attr] * 100 + ")";
                    obj.style.filter = "alpha(opacity = " + currnets + step + ")";
                }
            }
            else if (attr == "zIndex") {
                obj.style.zIndex = json[attr];
            }
            else {
                obj.style[attr] = currnets + step + "px";
            }
            if (attr == "opacity") {
                currnets = currnets / 10;
            }
            if (currnets != json[attr]) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 30);
}
function getAttr(obj, attr) {
    if (obj.currentStyle) {
        // ie 等
        return obj.currentStyle[attr];
    } else {
        // w3c 浏览器
        return window.getComputedStyle(obj,null)[attr];
        //return window.getComputedStyle(obj,null)[attr];
    }
}
