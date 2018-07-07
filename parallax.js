var $parallaxElement = $('.parallax-scroll');
var elementHeight = $parallaxElement.outerHeight();

function parallax() {
 
  var scrollPos = $(window).scrollTop();
  var transformValue = scrollPos/100;
  var opacityValue =  1 - ( scrollPos / 3000);
  var blurValue = Math.min(scrollPos / 100, 3);
  
  if ( scrollPos < elementHeight ) {
  
    $parallaxElement.css({
      'transform': 'translate3d(0, -' + transformValue + '%, 0)',
      'opacity': opacityValue,
      '-webkit-filter' : 'blur('+blurValue+'px)'
    });
    
  }
  
}

$(window).scroll(function() {
  parallax();
});