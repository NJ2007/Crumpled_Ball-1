
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(200,450);

	ground = new Ground(800,670,1600,20);

	dustbin = new Dustbin(1200,650);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGreen");
  
  drawSprites();

  dustbin.display()
  ball.display();
  ground.display();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}