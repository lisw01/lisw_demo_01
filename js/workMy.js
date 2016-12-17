/**
 * Created by Administrator on 2016/10/3 0003.
 */
window.onload = function () {

    var boxdf = $id("box_u");
    var bb = boxdf.parentNode;

    var dh = $id("box_u_d");
    var imgss = dh.children;
    var sf = $id("box_d");
    var sspan = sf.children;

    for (var i = 0; i < imgss.length; i++) {
        var span = document.createElement("span");
        span.className = "box-d-ctrl-d";
        span.innerHTML = imgss.length - i;
        sf.insertBefore(span, sspan[1]);
    }
    sspan[1].setAttribute("class", "box-d-ctrl-d current");

    var dhWidth = boxdf.offsetWidth;
    for (var i = 1; i < imgss.length; i++) {
        imgss[i].style.left = dhWidth + "px";
    }
    //点解右边或者左边下边
    var isN = 0;
    for (var k in sspan) {
        sspan[k].onclick = function () {
            if (this.className == "box-d-ctrl-r") {
                //点击右侧
               /* aniMy(imgss[isN], {left: -dhWidth});
                ++isN > imgss.length - 1 ? isN = 0 : isN;
                imgss[isN].style.left = dhWidth + "px";
                aniMy(imgss[isN], {left: 0});
                getSmollBox();*/
                atuoPlay();
            }
            else if (this.className == "box-d-ctrl-l") {
                aniMy(imgss[isN], {left: dhWidth});
                --isN < 0 ? isN = imgss.length - 1 : isN;
                imgss[isN].style.left = -dhWidth + "px";
                aniMy(imgss[isN], {left: 0});
                getSmollBox();
            }
            else {
                //点击下面的
                var that = this.innerHTML - 1;
                // cs(that)
                if (that > isN) {
                    aniMy(imgss[isN], {left: -dhWidth});
                    imgss[that].style.left = dhWidth + "px";
                    // aniMy(imgss[isN],{left: 0});
                }
                else if (that < isN) {
                    aniMy(imgss[isN], {left: dhWidth});
                    imgss[that].style.left = -dhWidth + "px";
                    // aniMy(imgss[isN],{left: 0});
                }
                isN = that;
                aniMy(imgss[isN], {left: 0});
                getSmollBox();
            }

        }
    }
    function getSmollBox() {
        for (var i = 1;i<sspan.length-1 ;i++) {
            sspan[i].className = "box-d-ctrl-d";
        }
        sspan[isN+1].className = "box-d-ctrl-d current";
    }
    //开启定时器
    var timer = null;
    timer = setInterval(atuoPlay,2000);
    function atuoPlay () {
        aniMy(imgss[isN], {left: -dhWidth});
        ++isN > imgss.length - 1 ? isN = 0 : isN;
        imgss[isN].style.left = dhWidth + "px";
        aniMy(imgss[isN], {left: 0});
        getSmollBox();
    }
    bb.onmouseover = function () {
        clearInterval(timer);
    }
    bb.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(atuoPlay,2000);
    }

}