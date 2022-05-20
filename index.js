$(window).scroll(function () {
  $('#hero').each(function () {
    var pos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (pos < topOfWindow + 400) {
      $(this).addClass('slideRight');
    }
  });
});

$(window).scroll(function () {
  $('.about-wrapper').each(function () {
    var pos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (pos < topOfWindow + 600) {
      $(this).addClass('fadeIn');
    }
  });
});

$(window).scroll(function () {
  $('.skill-item').each(function () {
    var pos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (pos < topOfWindow + 600) {
      $(this).addClass('fadeIn');
    }
  });
});

$(window).scroll(function () {
  $('.project-wrapper__text').each(function () {
    var pos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (pos < topOfWindow + 600) {
      $(this).addClass('slideRight');
    }
  });
});

$(window).scroll(function () {
  $('.project-wrapper__image').each(function () {
    var pos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (pos < topOfWindow + 600) {
      $(this).addClass('slideLeft');
    }
  });
});

$(window).scroll(function () {
  $('.contact-wrapper').each(function () {
    var pos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (pos < topOfWindow + 600) {
      $(this).addClass('fadeIn');
    }
  });
});
