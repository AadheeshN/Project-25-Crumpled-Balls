
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;

var paperBall, ground, binImage;

var basket1, basket2, basket3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 655);


	engine = Engine.create();
	world = engine.world;


	paperBall = new paper(100, 500, 70);

	ground = new Ground(700, 600, 1550, 20);

	basket1 = new Bin(925, 425, 320, 10);
	basket2 = new Bucket(800, 420, 20, 340);
	basket3 = new Bucket(1050, 420, 20, 340);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);

  Engine.update(engine);

  paperBall.display();
  ground.display();

  basket1.display();
  basket2.display();
  basket3.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x: 4000, y: -4800});
	}
}