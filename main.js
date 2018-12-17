// Nothing
$(function(){

  var $character = $(".character");
  var $container = $(".container");

  setUpEvents();

// This is going to be so the character can jump
  function setUpEvents() {
    $(document.documentElement).keydown(function(event) {
      if (event.keyCode == 32) {
        jump();
      }
    });
  }

// This function handles the behaviour associated when jumping
  function jump() {

// Ensures no other keys can be pressed during the animation and keys can't be stacked
    $(document.documentElement).off("keydown")

// This calls the div character and animates it
    console.log("JUMP")
    $character.animate({
      'top': "175px"
    }, "fast");
// This makes the character Div go down to 275px from the top then back up to 400px
    $character.animate({
      'top': "350px"
    }, "fast");
// Sets the time interval between jumps or keystrokes
    setTimeout(setUpEvents, 500);
  }
})
