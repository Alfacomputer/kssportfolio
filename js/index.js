$(function() {
    $('.slider-blog__inner').slick({
        dots: true,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    arrows: false
                }
            },
        ]
    });
});