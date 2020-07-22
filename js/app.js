$(document).ready(function(){

  const owl = $('.owl-carousel');

  owl.owlCarousel({
    loop: true,
    margin: 20,
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

  $('.owl-prev').click(function(e) {
    e.preventDefault();
    owl.trigger('prev.owl.carousel');
  });

  $('.owl-next').click(function(e) {
    e.preventDefault();
    owl.trigger('next.owl.carousel');
  });

});
