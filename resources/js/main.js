// use window onload beacuse before data comes out as soon as frame pop up i want preloader to appear
$(window).on("load", function(){
    $(".status").fadeOut(1000);
    $(".preloader").delay(1100).fadeOut(1000);
});

//------------------------Team section owl carousel
$(document).ready(function(){
    $('.team-members').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:2
            }
        }
    
    });
});

//------------------------Progress bar
$(document).ready(function(){
    $("#progress-elements").waypoint(function(){
        $(".progress-bar").each(function (){
            // this refer .progress bar
              $(this).animate(
                 {
                     width: $(this).attr("aria-valuenow") + "%",
                 }, 3000
            );
         });
        //destory means waypoint work just one time and 'this' one refer #progress-elements 
        this.destroy();
    }, {
        offset: "bottom-in-view",
    });
});

//------------------------Responsive Tab Service section
$(document).ready(function(){
    $(".services-tab").responsiveTabs({
        animation: 'slide',
    });
});

//------------------------Portfolio isotope
$(window).on("load", function (){
// init Isotope
    $('.isotope-container').isotope({
        // options
      });
// filter items on button click
  $('.isotope-filters').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $('.isotope-container').isotope({ filter: filterValue });
    //ACTIVE BUTTON
    $('#isotope-filters').find(".active").removeClass("active");
    $(this).addClass("active"); // this means to the button that have been clicked
  });

});

//------------------------Magnific Popup
$(document).ready(function (){
    $('.isotope-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // GALLERY
        gallery: {
            enabled:true
          },
        // ANIMATION
        // Delay in milliseconds before popup is removed
        removalDelay: 300,

        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
      });
});

//------------------------testimonials owl carousel
$(document).ready(function(){
    $('.testimonial-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:0
            },
            1000:{
                items:1
            }
        }
    
    });
});
//------------------------happy client section
$(document).ready(function(){
    $('.client-list').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            600: {
                items: 3,
            },
            1000:{
                items: 5,
            }
        }
    
    });
});

//----------------------------white navbar
$(document).ready(function(){
    $(window).scroll(function(){
        // For show
        if($(window).scrollTop() > 50){
            $('nav').addClass("white-nav-top");
            $(".navbar-brand img").attr('src', "./solo-images/logo/logo-dark.png");
            $(".goTop").fadeIn();
        } else {
            // For hide
            $('nav').removeClass("white-nav-top");
            $(".navbar-brand img").attr('src', "./solo-images/logo/logo.png");
            $(".goTop").fadeOut();
        }
    })
});
//----------------------------Scroll effect / jquery easing
$(document).ready(function (){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault(); // delete the default button event
        var select__id = $(this).attr('href'); // this === a.smooth-scroll
        $("html,body").animate(
            {
            scrollTop: $(select__id).offset().top - 64,

            }, 1000,
            "easeInOutExpo"
        );
    })
});
