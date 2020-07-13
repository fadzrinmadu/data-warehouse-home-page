$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
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
});