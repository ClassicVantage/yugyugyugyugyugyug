const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var width = randomNumber(10,50)
var height = randomNumber(10,50)

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  if(mousePressed()){
    wall=new Wall(mouseX,mouseY,width,height)
  }
  
  ground=new Ground(200,400,400,10)
}

function draw() {
  background(0);  
  Engine.update(engine)
 wall.display()
  ground.display()
  mousePressed();
  randomNumber();
  drawSprites();
}