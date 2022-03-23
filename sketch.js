var barco
var oceano 
var barcoimg
var oceanoimg
function preload(){
barcoimg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
oceanoimg = loadAnimation("sea.png");
}

function setup(){
  createCanvas(400,400);
  oceano = createSprite(100, 200);
  barco = createSprite(200, 200);
  barco.addAnimation("navegando", barcoimg)
  oceano.addAnimation("Mar", oceanoimg) 
  barco.scale = 0.3
  oceano.scale = 0.3
}

function draw() {
  background("blue");
    drawSprites();

 
}
