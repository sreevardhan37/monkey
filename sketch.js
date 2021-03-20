var bananas,stone,bananaimg,stoneimg,score,monkey,monkeyimg,invisibleground,ground,bgimg,gameover,gameoverimg;

function preload(){
  
 monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimg=loadImage("banana.png");
  stoneimg=loadImage("stone.png");
  
 bgimg=loadImage("jungle.jpg");
 gameoverimg=loadImage("gameOver.png");

}

function setup() {
  createCanvas(800, 700);
  monkey=createSprite(50,350,10,10);
  monkey.addAnimation("monkey",monkeyimg);
  monkey.scale=0.1;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",bgimg);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  ground.depth=monkey.depth;
  monkey.depth=monkey.depth+1;
  
  gameover= createSprite(500,500,50,20);
  gameover.addImage("gameover",gameoverimg);
   
  invisibleground = createSprite(200,378,400,1);
  invisibleground.visible = false;
  
 score=0;
  
  bananas=new Group();

 stone=new Group();
  
}

function draw() {
  background("black");

 spawnbananas();
 spawnstone();
  
  monkey.collide(invisibleground);
  monkey.velocityY = monkey.velocityY +=( 0.8);
  
  if(keyDown("space")&&monkey.y>300){
    
   monkey.velocityY=-12; 
    
  }
  
  if(ground.x<0){
   
     ground.x=ground.width/2;
    
  }
  
  if(stone.isTouching(monkey)){
    
   monkey.scale=0.1; 
    
  }
  
    if(bananas.isTouching(monkey)){
    
   score=score+2; 
    bananas.destroyEach();
  }
  
  if(stone.isTouching(monkey)){
    
   score=0; 
   stone.destroyEach();
  }
   
  if(monkey.isTouching(obstacles)){
    stroke("black"); 
    text("YOU LOSE !!!!",200,200)
     
     
  }
  
 drawSprites();
  
  stroke("white");
  textSize(24);
  fill("white");
  text("score :"+score,300,50);
}

function spawnbananas() {
  if (frameCount % 60 === 0) {
    var banana = createSprite(460,120,40,10);
    banana.y = Math.round(random(200,260));
    banana.addImage(bananaimg);
    banana.scale = 0.08;
    banana.velocityX = -6;
    
    
    banana.lifetime = 134;
    
       
       
    bananas.add(banana);
  }
  
}

function spawnstone() {
  if(frameCount % 100 === 0) {
    var stone = createSprite(460,350,10,40);
    stone.velocityX = -6;
    
    stone.addImage(stoneimg)
    
      
    stone.scale = 0.19;
   stone.lifetime =  140;
    
    stone.add(stone);
  }
}

