
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
bobDiameter = 40;
roof = new Roof(450,100,300,20)
	//Create the Bodies Here.
   bob1 = new Bob(350,400,20 );
   bob2 = new Bob(400,400,20);
   bob3 = new Bob(450,400,20);
   bob4 = new Bob(500,400,20);
   bob5 = new Bob(550,400,20);
  chain1=new Chain(bob1.body,roof.body,-bobDiameter*2,0);
  chain2=new Chain(bob2.body,roof.body,-bobDiameter*1,0)
  chain3=new Chain(bob3.body,roof.body,0,0);
  chain4=new Chain(bob4.body,roof.body,bobDiameter*1,0);
  chain5=new Chain(bob5.body,roof.body,bobDiameter*2,0);
   
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   chain1.display();
   chain2.display();
   chain3.display();
   chain4.display();
   chain5.display();
   roof.display();
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:155});
	}
}


