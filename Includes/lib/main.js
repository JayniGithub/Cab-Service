$('.slick-card-slider').slick({
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<span class="prev-arrow"><i class="fa fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fa fa-angle-right"></i></span>',
    responsive: [
    {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
    },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // make slick carousel cards same height
let cards = $('.eq-height');
let maxHeight = 0;

for (let i = 0; i < cards.length; i++) {
  if (maxHeight < $(cards[i]).outerHeight()) {
    maxHeight = $(cards[i]).outerHeight();
  }
}

for (let i = 0; i < cards.length; i++) {
  $(cards[i]).height(maxHeight);
}

function setDatepicker(_this) {
  
  /* Get the parent class name so we 
      can show date picker */
  let className = $(_this).parent().attr('class');

  // Remove space and add '.'
  let removeSpace = className.replace(' ', '.');

  // jQuery class selector
  $("." + removeSpace).datepicker({
      format: "dd/mm/yyyy",

      // Positioning where the calendar is placed
      orientation: "bottom auto",
      // Calendar closes when cursor is 
      // clicked outside the calendar
      autoclose: true,
      showOnFocus: "false"
  });
}