var car,wall;
var speed,weight;
var df;
function setup() {
  createCanvas(1000,400);
  car = createSprite(100,200,20,20);
  wall = createSprite(900,200,20,200);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background(0);  
  if(car.isTouching(wall)){
    car.velocityX = 0;
    df = (0.5*speed*speed*weight)/22500;
  }
  if(df<100){
    car.shapeColor = "green";
  }
  if(df<180&&df>100){
    car.shapeColor = "yellow";
  }
  if(df>180){
    car.shapeColor = "red";
  }
  drawSprites();

}