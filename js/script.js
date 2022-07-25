// custom mobile menu start 
let mobile_menu = document.getElementById("mobile-menu");
let bars = document.querySelector(".bars");
let line_one = document.querySelector(".line-one");
let line_two = document.querySelector(".line-two");
let line_three = document.querySelector(".line-three");


bars.addEventListener("click",function(){
    mobile_menu.classList.toggle("slide-menu");
    line_one.classList.toggle("close-line1");
    line_two.classList.toggle("close-line2");
    line_three.classList.toggle("close-line3");
})
// custom mobile menu end
$(function(){
    $(window).scroll(function () {
        // sticky menu start
        //this is for sticky menu
        var sticky = $(this).scrollTop()
        if (sticky > 50) {
            $(".menu-bar").addClass("sticky-menu")
        } else {
            $(".menu-bar").removeClass("sticky-menu")
        }
        //this is for sticky menu padding
        if (sticky > 50) {
            $(".navbar-brand").addClass("scroll-logo")
        } else {
            $(".navbar-brand").removeClass("scroll-logo")
        }
        // sticky menu end


        // back to top start
        //back to to button animation
        if (sticky > 50) {
            $(".back-to-top").fadeIn(300)
        } else {
            $(".back-to-top").fadeOut(300)
        }
    })
    //back to top button click
    $(".back-to-top").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 2000)
    })
    // back to top end

     //smooth scroll start
     var html_body = $('html, body');
     $('.nav-item a').on('click', function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 html_body.animate({
                     scrollTop: target.offset().top - 95
                 }, 1500);
                 return false;
             }
         }
     });
     //smooth scroll end

     // service slide js start
    $('.service-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: false,
        initialSlide: 1,
        responsive: [
            // for medium device
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            // // for small device
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            // for xtra small device
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
          ]
    });
    // service slide js end

     // journal slide js start
    $('.journal-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: false,
        initialSlide: 1,
        responsive: [
            // for medium device
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            // for small device
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            // for xtra small device
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
          ]
    });
    // journal slide js end
})