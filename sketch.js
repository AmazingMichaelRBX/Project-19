var bananaImage;
var obstacleImage;
var obstaclesGroup;
var backgr;
var player;
var score = 0;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running =
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  

bananaImage = loadImage("Banana.png");
obstacle_img = loadImage("stone.png");
}

function setup() {
createCanvas(800,400);
backgr = createSprite(0,0,800,400);
backgr.addImage("jungle",backImage);
backgr.visible = false;

player =  createSprite(50,300,20,40)
player.addAnimation("running",player_running);

ground = createSprite(400,350,800,10);
ground.velocityX = -4;
ground.x = ground.width/2
ground.visible = false;

obstaclesGroup =  new Group();
foodGroup = new Group();
}

function draw() {
  background(220);
if (backgr.x < 100){
  backgr.x = backgr.width/2;
}
if (ground.x < 0){
 ground.x = ground.width/2;
}

if (foodGroup.isTouching(player)){
  score = score+2;
  foodGroup.destroyEach();
}
  


switch(score){
  case 10: player.scale=0.12;
          break;
  case 20: player.scale=0.14;
          break;
  case 30: player.scale=0.16;
          break;
  case 40: player.scale=0.18;
          break;
          default: break;
}

if (keyDown("space")){
 player.velocityY = -12;
}
player.velocityY = player.velocityY +0.8;
player.collide(ground);
if (obstaclesGroup.isTouching(player)){
  player.scale=0.2;
}
spawnfood();
spawnStones();
drawSprites();
  

stroke("white");
textSize(20);
fill("white");
text("Score: "+  score, 500,50);

  

}

function spawnfood() {
  if(frameCount % 80 === 0){
    var banana = createSprite(600,250,40,10);
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.06;
    banana.lifetime = 300;
    foodGroup.add(banana);
  }
}
 
function spawnStones(){
  if(frameCount % 300 == 0){
    var stone = createSprite(800,350,10,40);
    stone.addImage(obstacle_img);
    stone.velocityX = -5;
    stone.scale = 0.06;
    stone.lifetime = 300;
    obstaclesGroup.add(stone);
  }
}
  


