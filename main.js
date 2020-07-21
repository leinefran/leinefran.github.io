$(document).ready(function () {
  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-link').on('click', function () {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

  /* scrolling */
  /* 1st line: select all the internal links */
  /* 2nd line: select html and body, and animated it. */
  $('nav a[href*="#"]').on('click', function () {
    $('html, body').animate([
      /* keyframes */
      { scrollTop: $($(this).attr('href')).offset().top - 100 }
    ], {
      /* timing options */
      duration: 2000,
      iterations: Infinity });
  }); 

  /* animate html and body */
  $('#up').on('click', function () {
    $('html, body').animate([
    /* keyframes */
    { scrollTop: 0 }
  ], {
    /* timing options */
    duration: 2000,
    iterations: Infinity });
  });

  /* AOS animate on scroll library */
  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true,
  });
});