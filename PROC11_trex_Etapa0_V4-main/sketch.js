
var trex ,trex_running;
var ground, invisible_Ground, ground_image;
var cloud, cloudImg;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_image=loadAnimation("ground2.png");
  cloudImg=loadAnimation("cloud.png");
 
}

function setup(){
  createCanvas(600,200)
  var num=Math.round(random(1,10));

 trex=createSprite(30,150,20,20);
 trex.scale=0.5;
 trex.addAnimation("dinosaurio_corriendo",trex_running);
 ground=createSprite(10,180,1000,20);
 ground.addAnimation("tierra", ground_image);
 invisible_Ground=createSprite(10,190,1000,20);
 invisible_Ground.visible=false;

}

function draw(){
  background("white")
  
  console.log("frameCount");
  console.log(frameCount);  

  if (keyDown("space") && trex.y>=100){
    trex.velocityY=-5;
  }
  trex.velocityY=trex.velocityY+0.8;
  trex.collide(invisible_Ground);
  ground.velocityX=-5;
  console.log(ground.x);
  if(ground.x<-560){
  ground.x=300;
  }
  console.log(trex.y);
  console.log("numero aleatorio");

  spawnClouds();
  drawSprites();
}

function spawnClouds(){ 
  if(frameCount%75==0){
  cloud=createSprite(600,100,40,10);
  cloud.y=Math.round(random(20,120));
  cloud.velocityX=-3;
  cloud.addAnimation("nube", cloudImg);
  }
}