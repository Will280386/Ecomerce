/**Primeiro Slide */

$(".slider-one")
    .not(".slick-intialized")
    .slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: ".site-slider .slider-btn .prev",
        nextArrow: ".site-slider .slider-btn .next"
    });


/**Segundo slide */

$(".slider-two")
    .not(".slick-intialized")
    .slick({
        prevArrow: ".site-slider-two .prev",
        nextArrow: ".site-slider-two .next",
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 3000
    });

/**Terceiro slide */

$(".slider-three")
    .not(".slick-intialized")
    .slick({
        prevArrow: ".site-slider-three .prev",
        nextArrow: ".site-slider-three .next",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        Infinite: false
    });

/** Quarto Slide*/
$(".slider-four")
    .not(".slick-intialized")
    .slick({
        prevArrow: ".site-slider-four .prev",
        nextArrow: ".site-slider-four .next",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        Infinite: false
    });

/**Quinto Slide */

$(".slider-five")
    .not(".slick-intialized")
    .slick({
        prevArrow: ".slider-brand .prev",
        nextArrow: ".slider-brand .next",
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        Infinite: true
    });

/**Sexto Slide*/

$(".slider-six")
    .not(".slick-intialized")
    .slick({
        prevArrow: "",
        nextArrow: "",
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        dots: true
    });