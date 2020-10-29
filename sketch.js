var car
var wall
var ran
function setup() {
  createCanvas(1200,1200);
  car=createSprite(200, 300, 35, 35);
  wall=createSprite(1000,300,35,100)
  ran=Math.round(random(7,10))
}

function draw() {
  background(0); 
  car.velocityX=ran 
  if(car.velocityX<8&&car.x-wall.x<car.width/2+wall.width/2
    && wall.x-car.x<car.width/2+wall.width/2
    && car.y-wall.y<car.height/2+wall.height/2
    && wall.y-car.y<car.height/2+wall.height/2)
  {
    car.shapeColor="green"
    car.velocityX=0;
  }
  if(car.velocityX<9&&car.velocityX>7&&car.x-wall.x<car.width/2+wall.width/2
    && wall.x-car.x<car.width/2+wall.width/2
    && car.y-wall.y<car.height/2+wall.height/2
    && wall.y-car.y<car.height/2+wall.height/2)
  {
    car.shapeColor="yellow"
    car.velocityX=0;
  }
  if(car.velocityX<10&&car.velocityX>8&&car.x-wall.x<car.width/2+wall.width/2
    && wall.x-car.x<car.width/2+wall.width/2
    && car.y-wall.y<car.height/2+wall.height/2
    && wall.y-car.y<car.height/2+wall.height/2)
  {
    car.shapeColor="orange"
    car.velocityX=0;
  }
  if(car.velocityX<11&&car.velocityX>9&&car.x-wall.x<car.width/2+wall.width/2
    && wall.x-car.x<car.width/2+wall.width/2
    && car.y-wall.y<car.height/2+wall.height/2
    && wall.y-car.y<car.height/2+wall.height/2)
  {
    car.shapeColor="red"
    car.velocityX=0;
  }
  
  drawSprites();
}