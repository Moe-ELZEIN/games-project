// No javascript will run until the html code has run
$(function(){
  var $character = $(".character");
  var $container = $(".container");
  var $obstacle1 = $("#obstacle1");

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

  setInterval(createObject, 1000);

  function createObject() {
    var obstacle = $("<div id=obstacle1></div>");
    obstacle.css("visibility", "visible");
    $(".container").append(obstacle);
    setInterval(moveObstacle(obstacle),1000);
    setInterval(function(){
      checkForCollision(obstacle);
    });
  }

  function getPosition(){
    var box1 = document.getElementById('obstacle1')
    var boundingRectangle = box1.getBoundingClientRect()
  }

  function moveObstacle(obstacle) {
    obstacle.animate({
      'left' : '0px'
    }, 2000);
    setTimeout(function(){
      obstacle.remove();
    }, 1950);
  }

  function remove() {
    $("#obstacle1").remove();
  }

  setInterval(checkForCollision, 10);

  function checkForCollision(obstacle) {
    // console.log(obstacle);
    if($character.collision(obstacle).length > 0) {
      console.log("COLLISION");
    }
  }

  // console.log($obstacle1[0])


});
