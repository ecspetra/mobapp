$(document).ready(function () {
  $(".reviews-slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    arrows: false,
    speed: 300,
    fade: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 768,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  });
});
