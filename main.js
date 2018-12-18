// No javascript will run until the html code has run
$(function(){

  var $character = $(".character");
  var $container = $(".container");
  var $obstacle1 = $(".obstacle1");

  setUpEvents();

// This is going to be so the character can jump
  function setUpEvents() {
    $(document.documentElement).keydown(function(event) {
      if (event.keyCode == 32) {
        jump();
      }
    });
  }

  // function Instructions() {
  //   alert("1. Use the space key to jump, 2.Avoid the obstacles to increase score, 3. If you hit an obstacle then you lose.")
  // }

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
    });
// Sets the time interval between jumps or keystrokes
    setTimeout(setUpEvents, 500);
  }

  getPosition();


  //  setInterval(moveObstacle,1000);

    // setTimeout(remove, 3400);
setInterval(moveObstacleUsingCSS,10);


})

function getPosition(){
  var box1 = document.getElementsByClassName('obstacle1')[0]
  var boundingRectangle = box1.getBoundingClientRect()
}

function trackObstacle(){
  var box1 = document.getElementsByClassName('obstacle1')[0]
  var boundingRectangle = box1.getBoundingClientRect()
  console.log(boundingRectangle.top + ' ' + boundingRectangle.right + ' ' + boundingRectangle.bottom + ' ' + boundingRectangle.left);
}

// function moveObstacle() {
//   $('.obstacle1').animate({
//     'left' : '0px'
//   }, 2000);
//   console.log('arrived!!!!')
//   trackObstacle();
// }

// This sets the position of the obstacle1 and moves it along the x-axis by -5 every 10 milliseconds
var xPosition = 625;
function moveObstacleUsingCSS(){
  xPosition = xPosition -5;
  xPositionAsString = xPosition + 'px';
  $('.obstacle1').css('left',xPositionAsString);
}

function remove() {
  $(".obstacle1").remove();
}

// This is incrementing the score by 10 the longer you survive
