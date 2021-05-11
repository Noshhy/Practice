const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function preload(){
  
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  ground=new Ground(400,400,800,10)
  box1=new Box(400,200,50,50)
  box2=new Box(400,200,50,50)
  box3=new Box(400,200,50,50)
  box4=new Box(400,200,50,50)
  ball=new Ball(150,200,30)
  slingshot=new Slingshot(ball.body,{x:300,y:200})
  
  
}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  ball.display()
  slingshot.display()

  function keyPressed(){
    if (keyCode===32)  {
      Matter.Body.setPosition(boxObj.body, {x:235,y:420})
      launcherObject.attach(ballObj.body);
    }
  }