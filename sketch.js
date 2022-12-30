const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground,right,left,topwall;

var ball;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  //creating object 
  //object=new Classname(parameters)
  ground=new Ground(600,600,1200,15)

  leftSide = new Ground(900, 540, 20, 120)
  rightSide = new Ground(1100, 540, 20, 120)

  leftWall = new Ground(10, 295, 20, 595)
  rightWall = new Ground(1190, 295, 20, 595)
  topWall = new Ground(600, 10, 1195, 20)

  ballOptions = {
    restitution: 1.2,
    friction: 1.2,
    density: 3
  }

  ball = Bodies.circle(200, 50, 20, ballOptions)
  World.add(world, ball)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display();

  leftSide.display();
  rightSide.display();

  leftWall.display();
  rightWall.display();
  topWall.display();

  ellipse(ball.position.x, ball.position.y, 20)

  keyPressed1();

  keyPressed2();

  keyPressed3();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:0,y:-85})
  }
}


function keyPressed1() {
  if (keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:5,y:0})
  }
}


function keyPressed2() {
  if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:-1,y:0})
  }
}


function keyPressed3() {
  if (keyCode === DOWN_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:0,y:5})
  }
}

