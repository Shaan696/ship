var sea, seaimg;
var ship, shipimg;
function preload(){
 
  seaimg = loadImage("sea.png");
  shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(1000,1000);
 
  sea = createSprite(20,20,500,500);
  ship = createSprite(20,20,500,500);

  sea.addImage(seaimg);
  ship.addAnimation(shipimg);

}

function draw() {
  background("blue");

  sea.debug = true;

sea.velocityX = 2;

if(sea.x<0){
  sea.x = sea.width/2;

  drawSprites();
}
}