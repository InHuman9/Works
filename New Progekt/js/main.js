$(document).ready(function(){
  $('.sl').slick({
    infinite:false,
  	arrows:true,
  	slidesToShow:4,
  	responsive: [
  		{
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {

	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	        dots:true,
	      }
	    },
	    {
	      breakpoint: 567,
	      settings: {
	        slidesToShow: 1,
	        arrows:false,
	        dots:true,
	      }
	    },
    ]
	   
  });
});
$(document).ready(function(){
  $('.sl_cl').slick({
    slidesToScroll: 5,
  	arrows:false,
  	dots:true,
    slidesToShow:5,
  	responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {

        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
});

$(document).ready(function() {
  $(".social_icon").mouseover(function() {
    $(this).prev().find(".lroro").css('opacity','0.5') 
  });
});
$(document).ready(function() {
  $(".social_icon").mouseout(function() {
    $(this).prev().find(".lroro").css('opacity','0.999')
  });
});
$(document).ready(function() {
  $(".social_icon").mouseover(function() {
    $(this).css('opacity','0.999') 
  });
});
$(document).ready(function() {
  $(".social_icon").mouseout(function() {
    $(this).css('opacity','0') 
  });
});
$(document).ready(function() {
  $(".photo_galery").mouseover(function() {
    $(this).find(".text_in_photo").css('opacity','0.999') 
  });
});
$(document).ready(function() {
  $(".photo_galery").mouseout(function() {
    $(this).find(".text_in_photo").css('opacity','0') 
  });
});
$(document).ready(function() {
  $(".photo_galery").mouseover(function() {
    $(this).find(".photo_flg").css('opacity','0.3') 
  });
});
$(document).ready(function() {
  $(".photo_galery").mouseout(function() {
    $(this).find(".photo_flg").css('opacity','0.99999') 
  });
});



$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 500 ) {     
      $('nav ul');
     }
  });//end resize
});//end ready
$(document).ready(function() {
  $('.menu-trigger').mouseout(function() {
    $(this).css('outline','none');
  });//end slide toggle
});
$(document).ready(function() {
  $(".sl_cl") 
    .find(".slick-dots").css('top','320px') ;
  if (  $(window).width() < 751 ) {     
     $(".sl_cl") 
      .find(".slick-dots").css('top','360px') ;
     }
});

$(document).ready(function() {
   $.validator.addMethod('customphone', function (value, element) {
        return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
    }, "Please enter a valid phone number");
    $.validator.addMethod("lettersonly", function(value, element) {
      return this.optional(element) || /^[\p{L} ]+$/u.test(value);
    }, "Letters only please");

    $("#myform").validate({ 
          submitHandler: function(form) {
                  $.ajax({
                      url: "mail.php",
                      type: "POST",
                      data: $(form).serialize(),
                      success: function(response) {
                          $(this).find("input").val("");
                  alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
                  $("#myform").trigger("reset");
                  }            
                  });
              },
          rules: {
            // simple rule, converted to {required:true}
            name: {
              required:true,
              minlength:2,
              lettersonly:true

            },
            Cname: {
              required:true,
              minlength:3,
              lettersonly:true
              
            },
            subject: {
              required:true,
              minlength:3
              
            },
            message: {
              required:true,
              
              
            },

            email: {
              required: true,
              email: true
            }
          }
        });
});

(function(){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });
    $('.menu__links-item').on('click', function() {
      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
});
