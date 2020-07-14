$(document).ready(function() {
  const owl = $('.owl-carousel');

  owl.owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2,
        autoWidth: true,
      }
    }
  });

  $('.slider-control-next').click(function(e) {
    e.preventDefault();
    owl.trigger('next.owl.carousel');
  });

  $('.slider-control-prev').click(function(e) {
    e.preventDefault();
    owl.trigger('prev.owl.carousel');
  });

  $('.slider-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
  });
});