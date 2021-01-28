const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope,cannon,bg;

function preload()
{
bg=loadImage("pexels-photo-1363876.jpeg");
}
function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1500, 600, 3000, 20);

  box1 = new Box(950, 100, 70, 70);
  box2 = new Box(950 ,100, 70, 70);
  /*box3 = new Box(950, 100, 70, 70);
  box4 = new Box(950, 100, 70, 70);
  box5 = new Box(950, 100, 70, 70);
  box6 = new Box(950, 100, 70, 70);*/



  /*box7 = new Box(900, 100, 70, 70);
  box8 = new Box(900, 100, 70, 70);
  box9 = new Box(900, 100, 70, 70);
  box10 = new Box(900, 100, 70, 70);
  box11 = new Box(900, 100, 70, 70);
  box12 = new Box(900, 100, 70, 70);
 //box13 = new Box(850, 100, 70, 70);
  //box14 = new Box(850, 100, 70, 70);*/



  box15 = new Box(850, 100, 70, 70);
  box16 = new Box(850, 100, 240, 20);
  box17 = new Box(850, 100, 70, 70);
  box18 = new Box(850, 100, 240, 20);
  box19 = new Box(850, 100, 70, 70);
  box20 = new Box(850, 100, 240, 20);

  ball = new Ball(200, 200, 40, 40);
 
  cannon=new Cannon(100,530);
  
  rope = new Rope(ball.body, { x: 120, y: 520 });

 
  
 

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
 /* box3.display();
  box4.display()
  box5.display()
  box6.display()
 box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
 // box13.display()
 // box14.display()*/
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  
  cannon.display();
  ball.display();
  rope.display();
 
fill("white")
textSize(30)
text("Drag Mouse to Strech the Ball",120,220);
text("Press Space for second Chanse",120,250)

}


function mouseDragged() 
{
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
function mouseReleased()
{
  rope.fly();

}
function keyPressed()
{
  if (keyCode === 32)
  {
    
   rope.attach(ball.body);
    
  }
}
