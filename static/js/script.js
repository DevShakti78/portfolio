$(document).ready(function () {
    /* Add navbar background color when scrolled */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 56) {
            $(".navbar").addClass("bg-white");
        } else {
            $(".navbar").removeClass("bg-white");
        }
    });
    // If mobile, add background color when toggler is clicked
    $(".navbar-toggler").click(function () {
        if (!$(".navbar-collapse").hasClass("show")) {
            $(".navbar").addClass("bg-white");
        } else {
            if ($(window).scrollTop() < 56) {
                $(".navbar").removeClass("bg-white");
            } else {
            }
        }
    });
});
