$(document).ready(function () {
  jQuery(function ($) {
    const section = $(".section"),
      nav = $(".navbar"),
      navHeight = nav.outerHeight(); // получаем высоту навигации

    // поворот экрана
    window.addEventListener(
      "orientationchange",
      function () {
        navHeight = nav.outerHeight();
      },
      false
    );

    $(window).on("scroll", function () {
      const position = $(this).scrollTop();

      section.each(function () {
        const top = $(this).offset().top - navHeight - 5,
          bottom = top + $(this).outerHeight();

        if (position >= top && position <= bottom) {
          nav.find("a").removeClass("active");
          section.removeClass("active");

          $(this).addClass("active");
          nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
        }
      });
    });

    nav.find("a").on("click", function () {
      click.preventDefault();
      const id = $(this).attr("href");

      $("html, body").animate(
        {
          scrollTop: $(id).offset().top - navHeight,
        },
        487
      );

      return false;
    });
  });
});
