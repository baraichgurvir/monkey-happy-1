
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var Road, R;
var GameState = 1;
var Score = 0;
var T = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  R = new Group();
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
  monkey = createSprite(50, 375, 5, 5);
  monkey.addAnimation("run", monkey_running);
  monkey.scale = 0.1;
  // monkey.debug = true;
  monkey.depth = 3;
  
  ground = createSprite(300, 400, 1000);
  // ground.debug = true;
  ground.setCollider("rectangle", 0, 0, 600, 50);
  ground.depth = 0;
  
  Road = createSprite(0, 375, 75, 15)
  Road.shapeColor = "white";
  Road.velocityX = -5;
  Road.depth = 1;
  Road.lifetime = 120;
  R.add(Road);
  
  Road = createSprite(100, 375, 75, 15)
  Road.shapeColor = "white";
  Road.velocityX = -5;
  Road.depth = 1;
  Road.lifetime = 120;
  R.add(Road);
  
  Road = createSprite(200, 375, 75, 15)
  Road.shapeColor = "white";
  Road.velocityX = -5;
  Road.depth = 1;
  Road.lifetime = 120;
  R.add(Road);
  
  Road = createSprite(300, 375, 75, 15)
  Road.shapeColor = "white";
  Road.velocityX = -5;
  Road.depth = 1;
  Road.lifetime = 120;
  R.add(Road);
  
  Road = createSprite(400, 375, 75, 15)
  Road.shapeColor = "white";
  Road.velocityX = -5;
  Road.depth = 1;
  Road.lifetime = 120;
  R.add(Road);
  
  Road = createSprite(500, 375, 75, 15)
  Road.shapeColor = "white";
  Road.velocityX = -5;
  Road.depth = 1;
  Road.lifetime = 120;
  R.add(Road);
  
  obstacle = createSprite(450, 350, 5, 5);
  // obstacle.debug = true;
  obstacle.setCollider("circle", 25, 20, 200)
  obstacle.addImage(obstacleImage)
  obstacle.scale = 0.2
  obstacle.velocityX = -5
  obstacle.depth = 2.5;
  obstacle.lifetime = 95;
  obstacleGroup.add(obstacle);
}


function draw() {
  background("white");
  monkey.collide(ground);
  fill("black")
  textSize(18)  

  text("Score: " + Score, 300, 50)
  
  
  
  
  monkey.velocityY +=  0.5;
  
  if (monkey.isTouching(obstacleGroup)) {
    GameState = 0;
  }
  
  if (GameState === 1) {
    if (frameCount % 20 === 0){
      Road = createSprite(500, 375, 75, 15)
      Road.shapeColor = "white";
      Road.velocityX = -5;
      Road.depth = 1;
      Road.lifetime = 120;
      R.add(Road);
    } 

    if (frameCount % 110 === 0) {
      obstacle = createSprite(450, 350, 5, 5);
      // obstacle.debug = true;
      obstacle.setCollider("circle", 25, 20, 200)
      obstacle.addImage(obstacleImage)
      obstacle.scale = 0.2
      obstacle.velocityX = -5
      obstacle.depth = 2.5;
      obstacle.lifetime = 95;
      obstacleGroup.add(obstacle);
    }
    
    if (frameCount % 60 === 0) {
      banana = createSprite(450, 200)
      banana.addImage(bananaImage);
      banana.scale = 0.1
      banana.velocityX = -5;
      bananaGroup.add(banana);
    }
    
    if (bananaGroup.bounceOff(monkey)) {
      Score++;
    }
    
    T = Math.ceil(frameCount/60);   
    if (keyDown("space") && monkey.y === 344.3) {
    monkey.velocityY = -13; 
  }
  }
  
  if (GameState === 0) {
    obstacleGroup.destroyEach();
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    R.setVelocityXEach(0);
    R.setLifetimeEach(40);
    bananaGroup.destroyEach();
    bananaGroup.setVelocityXEach(0);
    bananaGroup.setLifetimeEach(-1);
    text("R to Restart", monkey.x - 40, monkey.y - 75);
    
    if (keyDown("r") || keyDown("R")) {
      GameState = 1;
      Score = 0;
      T = 1;
      javascript:location.reload(true)
    }
  }
  
  
      text("Survival Time: " + T + "s", 135, 100);   
  drawSprites();
  
}






