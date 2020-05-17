var food;
var foodGroup = [];
var snake;
var gameState = "play";
var score = 0;

var edges;

function setup(){
  snake = createSprite(200, 200, 20, 20);
  snake.velocityX = 2;
  snake.shapeColor = "black";
  foodGroup.push(snake);
  food = createSprite(random(30,100),random(30,100),20,20);
  food.shapeColor = "red";
}

function draw() {
  background(255);
  edges = createEdgeSprites();
  
  if (gameState === "play") {
      touch();
      move();
      fill("grey");
      textSize(20);
      text("SCORE:  " +score,10,30);
      text("Press the arrow keys to move the snake!", 20,380);
  }
  
  if(gameState === "end"){
    background("red");
    textSize(40);
    fill(255);
    text("GAME OVER",80,200);
    snake.destroy();
    foodGroup = [];
    food.destroy();
    fill("white");
    textSize(20);
    text("FINAL SCORE:  " +score,120,230);
  }
    
  drawSprites();
}

function move(){
      if (keyDown("UP_ARROW")) {
         snake.setSpeedAndDirection(4, -90);
      }
      if (keyDown("DOWN_ARROW")) {
         snake.setSpeedAndDirection(4, 90);
      }
      if (keyDown("LEFT_ARROW")) {
         snake.setSpeedAndDirection(4, 180);
      }
      if (keyDown("RIGHT_ARROW")) {
         snake.setSpeedAndDirection(4, 0);
      }
  }

function touch(){  
  if(snake.isTouching(food)){
      food.x = Math.round((random(20,350)));
      food.y = Math.round((random(40,350)));
      snake.width = snake.width + 20;
      score = score + 1;
  }

  if (edges[0].isTouching(snake) || edges[1].isTouching(snake) || edges[2].isTouching(snake) || edges[3].isTouching(snake)){  //||  endGame())  {
    gameState = "end";
    snake.setSpeedAndDirection(0,0);
  }
  
  // for (var i = foodGroup.length - 1; i > 0; i--) {
  //   foodGroup[i].x = foodGroup[i-1].x;
  //   foodGroup[i].y = foodGroup[i-1].y;
  // }
}
