$(document).ready(function () {
    // Add navbar background color when scrolled 
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

$(document).ready(function () {
    $("#myCarousel").on("slide.bs.carousel", function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(".carousel-item").length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $(".carousel-item").eq(i).appendTo(".carousel-inner");
                } else {
                    $(".carousel-item")
                        .eq(0)
                        .appendTo($(this).find(".carousel-inner"));
                }
            }
        }
    });
});

// centers about para text for mobile screen
$(window).on('resize', function(){
    var win = $(this);
    if (win.width()< 540) { $('div').removeClass('text-left'); }
});

// makes iPad (only) size show two cards instead of three
$(window).on('resize', function(){
    var win = $(this);
    if (win.width()< 769) { $('.carousel-item').removeClass('col-md-4').addClass('col-md-6'); }
});

$(window).on('resize', function(){
    var win = $(this);
    if (win.width()> 770) { $('.carousel-item').removeClass('col-md-6').addClass('col-md-4'); }
});