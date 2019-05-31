$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Count Down
    
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="header-countdown d-flex"><div class="single-countdown"><span class="count-number">%D</span><p class="count-text">Days</p></div><div class="single-countdown"><span class="count-number">%H</span><p class="count-text">Hours</p></div><div class="single-countdown"><span class="count-number">%M</span><p class="count-text">Minutes</p></div><div class="single-countdown"><span class="count-number">%S</span><p class="count-text">Seconds</p></div></div>'));
      });
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});