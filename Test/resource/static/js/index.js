/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------    nav - 轮播图   ----------------------------------- */
/* ------------------------------------------------------------------------------------------ */
$(function () {
    var index = 0;
    // 自动轮播
    var timer;
    reTimer();
    function reTimer() {
        timer = setInterval(function () {
            if (index == $(".box-img").length - 1) {
                index = 0;
                $(".box-img").css("opacity", "0");
                $(".box-img").eq(index).css("opacity", "1");
                $(".buttonList").css({ "background-color": "rgba(0, 0, 0, 0.3)", "width": "10px" })
                $(".buttonList").eq(index).css({ "background-color": "#fff", "width": "15px" })
            } else {
                index++;
                $(".box-img").css("opacity", "0");
                $(".box-img").eq(index).css("opacity", "1");
                $(".buttonList").css({ "background-color": "rgba(0, 0, 0, 0.3)", "width": "10px" })
                $(".buttonList").eq(index).css({ "background-color": "#fff", "width": "15px" })
            }
        }, 5000)
    }
    // 左按钮：上一张
    $(".box-left").click(function () {
        clearInterval(timer);
        if (index == 0) {
            index = $(".box-img").length - 1;
            $(".box-img").css("opacity", "0");
            $(".box-img").eq(index).css("opacity", "1");
            $(".buttonList").css({ "background-color": "rgba(0, 0, 0, 0.3)", "width": "10px" })
            $(".buttonList").eq(index).css({ "background-color": "#fff", "width": "15px" })
            reTimer();
        } else {
            index--;
            $(".box-img").css("opacity", "0");
            $(".box-img").eq(index).css("opacity", "1");
            $(".buttonList").css({ "background-color": "rgba(0, 0, 0, 0.3)", "width": "10px" })
            $(".buttonList").eq(index).css({ "background-color": "#fff", "width": "15px" })
            reTimer();
        }

    })
    // 右按钮：下一张
    $(".box-right").click(function () {
        clearInterval(timer);
        if (index == $(".box-img").length - 1) {
            index = 0;
            $(".box-img").css("opacity", "0");
            $(".box-img").eq(index).css("opacity", "1");
            $(".buttonList").css({ "background-color": "rgba(0, 0, 0, 0.3)", "width": "10px" })
            $(".buttonList").eq(index).css({ "background-color": "#fff", "width": "15px" })
            reTimer();
        } else {
            index++;
            $(".box-img").css("opacity", "0");
            $(".box-img").eq(index).css("opacity", "1");
            $(".buttonList").css({ "background-color": "rgba(0, 0, 0, 0.3)", "width": "10px" })
            $(".buttonList").eq(index).css({ "background-color": "#fff", "width": "15px" })
            reTimer();
        }
    })
    // 切换按钮
    $(".buttonList").click(function () {
        clearInterval(timer);
        var chooseButton = $(this).index();
        index = chooseButton;
        $(".box-img").css("opacity", "0");
        $(".box-img").eq(index).css("opacity", "1");
        // 点击按钮变色
        $(".buttonList").css({ "background-color": "rgba(0, 0, 0, 0.3)", "width": "10px" })
        $(".buttonList").eq(index).css({ "background-color": "#fff", "width": "15px" })
        reTimer();
    })
})


/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------    main - 限购倒计时   ----------------------------------- */
/* ------------------------------------------------------------------------------------------ */
let oCount = document.getElementById("m-count");
let spans = oCount.getElementsByTagName("span");

let m_timer = null;
clearInterval(m_timer);
m_timer = setInterval(countTime, 1000);

function countTime() {
    let endTime = new Date("2022/3/3 00:00:00");
    let nowTime = new Date();
    let lastTime = parseInt((endTime - nowTime) / 1000);
    if(lastTime >= 0){
        spans[0].innerHTML = parseInt(lastTime / 60 / 60 / 24);
    spans[1].innerHTML = parseInt(lastTime / 60 / 60 % 24);
    spans[2].innerHTML = parseInt(lastTime / 60 % 60);
    spans[3].innerHTML = parseInt(lastTime % 60);
    }else{
        clearInterval(m_timer);
    }
    
}

