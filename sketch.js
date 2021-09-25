
function preload(){
 shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaImage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
 
  sea=createSprite(400,200);
  sea.addImage(seaImage);
  sea.scale=0.3;
  ship=createSprite(100,300,50,50);
  ship.addAnimation("shipMoving",shipImage);
  ship.scale=0.2;

}

function draw() {
  background("blue");
 drawSprites()
 sea.velocityX=-3;
 if(sea.x<0){
   sea.x=width/8;
 }
}