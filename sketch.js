var sea, seaimg;
var ship, shipimg;
function preload(){
 
  seaimg = loadImage("sea.png");
  shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,400);
 
  sea = createSprite(200,200,400,400);
  ship = createSprite(200,200,200,200);

  sea.addImage(seaimg);
  ship.addAnimation("moving",shipimg);
ship.scale = 0.5;

}

function draw() {
  background("blue");

  //sea.debug = true;

sea.velocityX = 2;

if(sea.x<0){
  sea.x = sea.width/2;
}
 drawSprites();
}