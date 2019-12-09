$(document).ready(function(){

    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        if (sc > 50) {
            $(".navbar").addClass("small");
        } else {
            $(".navbar").removeClass("small");
        }
    });

});