const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 620);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	circleball = new Ball(50, 550,70);
	ground = new Ground(20,605,1550,10);
	leftbin= new Dustbin(600,550,8,80);
	rightbin= new Dustbin(700,550,8,80);
  bottombin= new Dustbin(650,593,100,8);
  trashbin= new DustbinImg(592,504,20,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);
  ground.display();
  leftbin.display();
  rightbin.display();
  bottombin.display();
  trashbin.display();
  circleball.display();

  keyPressed();
  drawSprites();
}

function keyPressed(){
 if (keyCode === UP_ARROW)
{
 
  Matter.Body.applyForce(circleball.body,circleball.body.position,{x:0.0075,y:-0.0075});
	circleball.velocityY=-2;
  }	
}



