/** @format */

$(document).ready(function () {
  $(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc > 50) {
      $(".navbar").addClass("small");
    } else {
      $(".navbar").removeClass("small");
      $(".mobile-menu-items").removeClass("active");
    }
  });

  //Highlight current nav page
  // let loc = $(location).attr('href');

  // if(loc = "/"){
  //     $('.home').css({
  //         'borderBottom':
  //         '2px solid red'
  //     })
  // }else if(loc = "reserve"){
  //     $('.reserve').css({
  //         'borderBottom':
  //         '2px solid red'
  //     })
  // }else if(loc = "menu"){
  //     $('.menu').css({
  //         'borderBottom':
  //         '2px solid red'
  //     })
  // }else if(loc = "contact"){
  //     $('.contact').css({
  //         'borderBottom':
  //         '2px solid red'
  //     })
  // }

  //browser width
  console.log($(window).width());

  $(document).on("scroll", function () {
    if ($(this).scrollTop() >= $("#top-sec").position().top) {
      $(".home").addClass("link-active");
      $(".menu, .review").removeClass("link-active");
    }
    if ($(this).scrollTop() >= $("#menu-sec").position().top) {
      $(".menu").addClass("link-active");
      $(".home, .review").removeClass("link-active");
    }
    if ($(this).scrollTop() >= $("#review-sec").position().top) {
      $(".review").addClass("link-active");
      $(".menu").removeClass("link-active");
    }
  });

  $(".nav-items-btn").click(() => {
    $(".mobile-menu-items").toggleClass("active");
  });
});
