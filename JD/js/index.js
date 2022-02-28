$(".shortLeft").hover(function () {
        // over
        $(".shortMapDiv").css("display", "block");
    }, function () {
        // out
        $(".shortMapDiv").css("display", "none");
    }
);


/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------    nav - 主轮播图   ----------------------------- */
/* ------------------------------------------------------------------------------------------ */

$(function () {
    var index = 0;
    // 自动轮播
    var timer;
    reTimer();
    function reTimer() {
        timer = setInterval(function () {
            if (index == $(".img-items").length - 1) {
                index = 0;
                $(".img-items").css("opacity", "0");
                $(".img-items").eq(index).css("opacity", "1");
                $(".buttonList").css({ "background-color": "rgba(255, 255, 255, 0.4)", "width": "8px" })
                $(".buttonList").eq(index).css({ "background-color": "#fff", "width": "8px" })
            } else {
                index++;
                $(".img-items").css("opacity", "0");
                $(".img-items").eq(index).css("opacity", "1");
                $(".buttonList").css({ "background-color": "rgba(255, 255, 255, 0.4)", "width": "8px" })
                $(".buttonList").eq(index).css({ "background-color": "#fff", "width": "8px" })
            }
        }, 5000)
    }
    // 左按钮：上一张
    $(".buttonLeft").click(function () {
        clearInterval(timer);
        if (index == 0) {
            index = $(".img-items").length - 1;
            $(".img-items").css("opacity", "0");
            $(".img-items").eq(index).css("opacity", "1");
            $(".buttonList").css({ "background-color": "rgba(255, 255, 255, 0.4)", "width": "8px" })
            $(".buttonList").eq(index).css({ "background-color": "#fff", "width": "8px" })
            reTimer();
        } else {
            index--;
            $(".img-items").css("opacity", "0");
            $(".img-items").eq(index).css("opacity", "1");
            $(".buttonList").css({ "background-color": "rgba(255, 255, 255, 0.4)", "width": "8px" })
            $(".buttonList").eq(index).css({ "background-color": "#fff", "width": "8px" })
            reTimer();
        }

    })
    // 右按钮：下一张
    $(".buttonRight").click(function () {
        clearInterval(timer);
        if (index == $(".img-items").length - 1) {
            index = 0;
            $(".img-items").css("opacity", "0");
            $(".img-items").eq(index).css("opacity", "1");
            $(".buttonList").css({ "background-color": "rgba(255, 255, 255, 0.4)", "width": "8px" })
            $(".buttonList").eq(index).css({ "background-color": "#fff", "width": "8px" })
            reTimer();
        } else {
            index++;
            $(".img-items").css("opacity", "0");
            $(".img-items").eq(index).css("opacity", "1");
            $(".buttonList").css({ "background-color": "rgba(255, 255, 255, 0.4)", "width": "8px" })
            $(".buttonList").eq(index).css({ "background-color": "#fff", "width": "8px" })
            reTimer();
        }
    })
    // 切换按钮
    $(".buttonList").click(function () {
        clearInterval(timer);
        var chooseButton = $(this).index();
        index = chooseButton;
        $(".img-items").css("opacity", "0");
        $(".img-items").eq(index).css("opacity", "1");
        // 点击按钮变色
        $(".buttonList").css({ "background-color": "rgba(255, 255, 255, 0.4)", "width": "8px" })
        $(".buttonList").eq(index).css({ "background-color": "#fff", "width": "8px" })
        reTimer();
    })
})

/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------    nav - 副轮播图   ----------------------------- */
/* ------------------------------------------------------------------------------------------ */
$(".n-content-right").hover(function () {
        // over
        $(".c-r-l-button").css("opacity", "1");
        $(".c-r-r-button").css("opacity", "1");
    }, function () {
        // out
        $(".c-r-l-button").css("opacity", "0");
        $(".c-r-r-button").css("opacity", "0");
    }
);


$(function () {
    let indexList = 0;
    $(".n-r-userService > div").hover(function () {
            // over
            indexList = $(this).index();
            $(".jq-img-1").eq(indexList).css("opacity", "0");
            $(".jq-img-2").eq(indexList).css("opacity", "1");
        }, function () {
            // out
            indexList = $(this).index();
            $(".jq-img-1").eq(indexList).css("opacity", "1");
            $(".jq-img-2").eq(indexList).css("opacity", "0");
        }
    );
})
// $(".n-r-userService > div").hover(function () {
//         // over
//         $(".jq-img-1").css("opacity", "0");
//         $(".jq-img-2").css("opacity", "1");
//     }, function () {
//         // out
//         $(".jq-img-1").css("opacity", "1");
//         $(".jq-img-2").css("opacity", "0");
//     }
// );
// console.log($(".n-r-userService > div"));