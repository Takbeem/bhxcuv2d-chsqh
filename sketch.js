
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var groundObject,leftSide,rightSide;




function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options = {
	isStatic: false,
	restitution:0.3,
	friction:0,
	density:1.2

}
ball = Bodies.circle(400,200,30,ball_options)
World.add(world,ball)
  groundObject = new Ground(width/2,670,width,20)
 leftSide = new Ground(1000,600,20,120)
 rightSide = new Ground(1100,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
groundObject.display()
	leftSide.display()
		rightSide.display()
	ellipse(ball.position.x,ball.position.y,30,30);


  function keyPressed() {
	  if(keyCode === UP_ARROW) {
		  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	  }
  }
 drawSprites()
}



