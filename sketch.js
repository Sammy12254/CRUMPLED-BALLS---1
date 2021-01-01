//creatng the variables 
var dustbinObj, paperObject,groundObject	
var world;

//creating the const variables 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

//creating the function setup
function setup() {

	//creating the Canvas
	createCanvas(1600, 700);

	//creating the engine
	engine = Engine.create();
	world = engine.world;

	//creating the dustbinObj
	dustbinObj = new Box(1200,650);

	//creating the paperObject
	paperObject = new Crumbledpaper(200,450,40);

	//creating the groundObject
	groundObject = new Ground(width/2,670,width,20);

	//creating the render 
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
});

    //running the engine
	Engine.run(engine);
}

//creating te function draw
function draw() {

  //creating the background
  background(0);

  //givig the rectMode as CENTER
  rectMode(CENTER);

  //displaying the game objects 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
}

//creatin the function keyPrssed
function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x: 85, y: -85});
  }
} 
