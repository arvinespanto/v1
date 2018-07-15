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