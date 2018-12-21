// No javascript will run until the html code has run
$(function(){
  var $character = $(".character");
  var $container = $(".container");
  var $obstacle1 = $("#obstacle1");
  var score = 0;

  setUpEvents();

// This is going to be so the character can jump
  function setUpEvents() {
    $(document.documentElement).keydown(function(event) {
      if (event.keyCode == 32) {
        jump();
        var jumpSound = new Audio("Audio/Mario Jump Sound.mp3");
        jumpSound.play();
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
// This makes the character Div go down to 175px from the top then back up to 350px
    $character.animate({
      'top': "350px"
    });
// Sets the time interval between jumps or keystrokes
    setTimeout(setUpEvents, 500);
  }

  getPosition();

// This creates an object every 2 seconds
  var objectCreation = setInterval(createObject, 2000);

//
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

// This moves or animates the obstacle left until it reaches 0px over 2 seconds
// Then it calles the remove function to remove the obstacle
  function moveObstacle(obstacle) {
    obstacle.animate({
      'left' : '0px'
    }, 2000);
    setTimeout(function(){
      obstacle.remove();
    }, 1950);
  }

// This is the remove obstacle function
  function remove() {
    $("#obstacle1").remove();
  }

  setInterval(checkForCollision, 10);
  setInterval(incrementScore, 1000);

// Increases the score by 10 the longer you survive
  function incrementScore() {
    score += 10;
    $(".scoreboard").html(score);
  }

// This checks if the character and the obstacle are colliding, if they do, stops making obstacles printing game over and your score
  function checkForCollision(obstacle) {
    if($character.collision(obstacle).length > 0) {
      clearInterval(objectCreation);
      $(".finalScore").html("score: " + score);
      $(".gameOver").css("display", "block");
    }
  }

// This refresh's the page when you click try again so you can play again
  var reset = document.getElementById("refresh")
  reset.addEventListener("click", refresh);

  function refresh() {
    location.reload();
  }
});
