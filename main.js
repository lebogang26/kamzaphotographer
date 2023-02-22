// set lightbox img max height

let index = 0;
const NumWorkItems = $(".work_item").length;

// Preloader
$(window).on("load", function(){
    $(".preloader").addClass("loaded");
})


$(document).ready(function () {

    // Nav toggle
    $(".nav_toggle").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
        if($(window).width() < 768 ){
            $(".header .nav").slideToggle();
        }
    })

    // fixed header 
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
          $(".header").addClass("fixed");
        }
        else{
          $(".header").removeClass("fixed");
        }
      })

    // This code is from WWW3 Web School, JQuery
    // Add smooth scrolling to all links
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
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

    const wHeight = $(window).height();
    $(".lightbox_img").css("max-height", wHeight + "px");

    // lightbox 
    $(".work_item_inner").click(function(){
      index = $(this).parent(".work_item").index();
      $(".lightbox").addClass("open");
      lightboxSlideShow();
    })

    // slide pictures (prev and next)
    $(".lightbox .prev").click(function(){
        if(index == 0) {
            index = NumWorkItems-1;
        } else {
            index--;
        }
        lightboxSlideShow();
    })

    $(".lightbox .next").click(function(){
        if(index == NumWorkItems-1){

        } else {
            index++;
        }
        lightboxSlideShow();
    })

    // close lightbox
    $(".lightbox_close").click(function(){
        $(".lightbox").removeClass("open");
    })

    // close imege when clicked outside the image box
    $(".lightbox").click(function(event){
       if($(event.target).hasClass("lightbox")) {
           $(this).removeClass("open")
       }
    })
})

// 
function lightboxSlideShow() {
    const imgSrc = $(".work_item").eq(index).find("img").attr("data-large");
    // console.log(imgSrc)
    const category = $(".work_item").eq(index).find("h4").html();
    $(".lightbox_img").attr("src", imgSrc);
    // show the category of the picture
    $(".lightbox_category").html(category)
    // show the number of the picture
    $(".lightbox_counter").html(NumWorkItems + "/" + (index+1));
}