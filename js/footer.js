$(document).ready(function() {
//Preloader
$(window).on("load", function() {
preloaderFadeOutTime = 500;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
});

  var showText = function (target, message, index, interval) {    
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}
    
$(function () { 
 
  showText("#msg", "HI I'M", 0, 200);   
  showText("#msg1", "Arvin", 0, 300);   
  showText("#msg2", "PROGRAMMER", 0, 250);   
  showText("#msg3", "WEB DESIGNER / DEVELOPER / ENGINEER", 0, 50);   
    
 
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $myBar = $(".progress-bar");
    $myBar.toggleClass('scrolled', $(this).scrollTop() > $myBar.height());
  });
});

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }
  });
});

function cycleBackgrounds() {
        var index = 0;

        $imageEls = $('.backimage .slide'); // Get the images to be cycled.

        setInterval(function () {
            // Get the next index.  If at end, restart to the beginning.
            index = index + 1 < $imageEls.length ? index + 1 : 0;
            // Show the next image.
            $imageEls.eq(index).addClass('show');
            // Hide the previous image.
            $imageEls.eq(index - 1).removeClass('show');

        }, 5000);
    };

    // Document Ready.
    $(function () {
        cycleBackgrounds();
    });
