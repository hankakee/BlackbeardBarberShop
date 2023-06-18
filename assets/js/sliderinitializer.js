
if (window.matchMedia('(min-width: 75em)').matches) {
    // $("h1").css("color", "orange");

    $('.carousel-team').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        touchMove: true,
        focuOnSelect: true
    });

    $('.js-filter').on('click', function () {
        $('.filtering').slick('slickFilter', ':even');
    });
}
else if (window.matchMedia('(min-width: 63em)').matches) {
    // $("h1").css("color", "yellow");

    $('.carousel-team').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        swipeToSlide: true,
        touchMove: true,
        focuOnSelect: true
    });

    $('.js-filter').on('click', function () {
        $('.filtering').slick('slickFilter', ':even');
    });

}
else if (window.matchMedia('(min-width: 48em)').matches) {
    // $("h1").css("color", "cyan");

    $('.carousel-team').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        touchMove: true,
        focuOnSelect: true
    });

    $('.js-filter').on('click', function () {
        $('.filtering').slick('slickFilter', ':even');
    });

}

else if (window.matchMedia('(min-width: 20em)').matches) {
    // $("h1").css("color", "purple");

    $('.carousel-team').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        touchMove: true,
        focuOnSelect: true
    });

    $('.js-filter').on('click', function () {
        $('.filtering').slick('slickFilter', ':even');
    });
}
