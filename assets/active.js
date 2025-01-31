;(function($){
	'use strict';
const swiper = new Swiper('.grass-top-text-play', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 6000,
    autoplay: {
      delay: 0,

    },


  });

$(document).ready( function(){
  $('#waypoint').waypoint(function() {
    // $('.grass-timer').addClass('timer');
    $('.grass-timer').countTo({

    onComplete: function (value) {
      return value.toLocaleString();
    },

        formatter: function (value, options) {
        // return value.toLocaleString();
        return value.toLocaleString("en-US", { maximumFractionDigits: 0 });
      },
    })
  }, { 
    offset: '100%',
    triggerOnce: false 
  });

  // $('.timer').countTo({
  //       formatter: function (value, options) {
  //       return value.toFixed(options.decimals);
  //     },
  // });

});

})(jQuery);
