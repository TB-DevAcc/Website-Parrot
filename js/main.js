window.addEventListener('scroll', function(e) {
    // Fade Out
    if (window.pageYOffset > 10) {
        $(document.getElementsByClassName('hide')).fadeOut("slow");
      }
    else {
        $(document.getElementsByClassName('hide')).fadeIn("slow");
    }

    // Parallax
    const target = document.querySelectorAll('.scroll');

    var index = 0, length = target.length;
    for (index; index < length; index++) {
     
        var pos = window.pageYOffset * target[index].dataset.rate;

        if(target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
        } else {
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;
            
            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
        }
    }
});

//Smooth Scrolling
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("#scroll").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top-100
        }, 3000, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash-100;
        });
      } // End if
    });
});

// credit card
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})
