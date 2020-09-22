
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, roof, ground;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   bob1 = new Bob(100, 400, 50);
   bob2 = new Bob(152, 400, 50);
   bob3 = new Bob(202, 400, 50);
   bob4 = new Bob(252, 400, 50);
   bob5 = new Bob(302, 400, 50);

   

   ground = new Ground(400, 660, 800, 20);

   roof = new Ground(400, 110, 800, 20);

   rope1 = new Rope(bob1.body, ground.body, 60, -280);
   rope2 = new Rope(bob2.body, ground.body, 100, -280);
   rope3 = new Rope(bob3.body, ground.body, 140, -280);
   rope4 = new Rope(bob4.body, ground.body, 180, -280);
   rope5 = new Rope(bob5.body, ground.body, 220, -280);

  Engine.run(engine);
  
  keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(170);
  
   
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();

   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();

   ground.display();

   roof.display();


  drawSprites();
 
}


  function keyPressed() {

    if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-400,y:-200})
   }
  
}


