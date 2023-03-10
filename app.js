

$( document ).ready(function() {

  $('.flickfeed').on('init', function(){
  	var currentfirst = $(this).find('.slick-active').first();
  	$(currentfirst).addClass('firster');
  	var currentlast = $(this).find('.slick-active').last();
  	$(currentlast).addClass('laster');
  });

  $('.flickfeed').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 6.17,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 2

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $( ".slick-slide" ).mouseenter(function() {

  	if ($(this).hasClass("firster")) {
  		var hoverslide = $(this);
  		$(hoverslide).nextAll().addClass('furthernextslides');
  	}else if ($(this).hasClass("laster")){
  		var hoverslide = $(this);
  		$(hoverslide).prevAll().addClass('furtherprevslides');
  	}else{
  		var hoverslide = $(this);
  		$(hoverslide).nextAll().addClass('nextslides');
  		$(hoverslide).prevAll().addClass('prevslides');
  	}


  });

  $( ".slick-slide" ).mouseleave(function() {
  	$(this).parent().find( ".slick-slide" ).removeClass('nextslides');
  	$(this).parent().find( ".slick-slide" ).removeClass('prevslides');
  	$(this).parent().find( ".slick-slide" ).removeClass('furthernextslides');
  	$(this).parent().find( ".slick-slide" ).removeClass('furtherprevslides');
  });

  //on slide change, find the new first slide-active
  $('.flickfeed').on('afterChange', function(event, slick, currentSlide, nextSlide){
  	var currentfirst = $(this).find('.slick-active').first();
  	$(this).find( ".slick-slide" ).removeClass('firster');
  	$(currentfirst).addClass('firster');
  	var currentlast = $(this).find('.slick-active').last();
  	$(this).find( ".slick-slide" ).removeClass('laster');
  	$(currentlast).addClass('laster');
  });



});
