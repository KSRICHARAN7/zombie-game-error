var zombie_img,bg_img,bg;
var shooter1_img,shooter2_img,shooter3_img;
var heart1_img,heart2_img,heart3_img;
var explosion_sound,lose_sound,win_sound;

function preload(){
  var zombie_img = loadImage("assets/zombie.png");
  var bg_img = loadImage("assets/bg.jpeg");
  var heart1_img = loadImage("assets/heart_1.png");
  var heart2_img = loadImage("assets/heart_2.png");
  var heart3_img = loadImage("assets/heart_3.png");
  var shooter1_img = loadImage("assets/shooter_1.png");
  var shooter2_img = loadImage("assets/shooter_2.png");
  var shooter3_img = loadImage("assets/shooter_3.png");
  var explosion_sound = loadSound("assets/explosion.mp3");
  var lose_sound = loadSound("assets/lose.mp3");
  var win_sound = loadSound("assets/win.mp3");
}

function setup(){
createCanvas(windowWidth,windowHeight);

bg = createSprite(100,100,60,60);
bg.addImage("background1",bg_img);
}

function draw(){
  background("black");
 drawSprites();
}