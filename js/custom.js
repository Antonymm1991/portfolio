$( document ).ready(function() {

    $("a").on('click', function(event) {
      
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });


      $('.workCarousel').owlCarousel({
        items:1,
        loop: true,
        lazyLoad:true,
        // loop:true,
        
        nav: true,
        margin:40,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        smartSpeed: 2000,
        responsive:{
            575.98:{
                items:2,
            },
            767.98:{
                items:3,
            },
            991.98:{
                items:4,
            },
            1199.98:{
                items:4,
            }
        }
    });


    $('.instagram').owlCarousel({
        items:1,
        // loop: true,
        lazyLoad:true,
        // loop:true,
        margin:0,
        autoplay: false,
        smartSpeed: 1000,
        responsive:{
            575.98:{
                items:2,
            },
            767.98:{
                items:3,
            },
            991.98:{
                items:4,
            },
            1199.98:{
                items:4,
            }
        }
    });


    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });


});
