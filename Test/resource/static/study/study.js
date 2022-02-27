let divCounts = $(".fs");
console.log(divCounts);
let index = 0;
$("li").hover(function () {
        // over
        $(".divOne").css("display", "block");
        divCounts[index] = $(this).lenth();
        console.log(divCounts);
    }, function () {
        // out
        $(".divOne").css("display", "none");
    }
);
