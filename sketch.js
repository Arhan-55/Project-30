const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var polygonImg,polygon;
var slingShot;
var ground,stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(1050,400);
    rectMode(CENTER);
   
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(250,200,20);
    World.add(world,polygon);

    slingShot = new slingshot(this.polygon,{x:250,y:200});

    ground = new Ground(550,395,1200,10);

    stand1 = new Ground(540,300,260,10);
    stand2 = new Ground(850,200,200,10)

    //level one
    block1 = new Block(450,275,30,40);
    block2 = new Block(480,275,30,40);
    block3 = new Block(510,275,30,40);
    block4 = new Block(540,275,30,40);
    block5 = new Block(570,275,30,40);
    block6 = new Block(600,275,30,40);
    block7 = new Block(630,275,30,40);
    //level two
    block8 = new Block(480,235,30,40);
    block9 = new Block(510,235,30,40);
    block10 = new Block(540,235,30,40);
    block11 = new Block(570,235,30,40);
    block12 = new Block(600,235,30,40);
    //level three
    block13 = new Block(510,195,30,40);
    block14 = new Block(540,195,30,40);
    block15 = new Block(570,195,30,40);
    //top
    block16 = new Block(540,155,30,40);
    
    //level one
    block17 = new Block(790,175,30,40);
    block18 = new Block(820,175,30,40);
    block19 = new Block(850,175,30,40);
    block20 = new Block(880,175,30,40);
    block21 = new Block(910,175,30,40);
    //level two
    block22 = new Block(820,135,30,40);
    block23 = new Block(850,135,30,40);
    block24 = new Block(880,135,30,40);
    //top
    block25 = new Block(850,95,30,40);

    Engine.run(engine);
}

function draw(){
  background("#3C2E2E");
  
  strokeWeight(1.2);
  stroke("white");
  noFill();
  textSize(20);
  text("Drag the Hexagonal stone and release it,to launch it towards the blocks",150,20);

  slingShot.display();
  
  fill("brown");
  ground.display();

  fill(200,30,150);
  stand1.display();
  stand2.display();

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

   fill("darkturquoise");
   block13.display();
   block14.display();
   block15.display();

   fill("#848285");
   block16.display();
  
   fill("skyblue");
   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();

   fill("darkturquoise");
   block22.display();
   block23.display();
   block24.display();

   fill("pink");
   block25.display();

   imageMode(CENTER);
   image(polygonImg,polygon.position.x,polygon.position.y,40,40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
        Matter.Body.setPosition(this.polygon,{x:250,y:200})
    }
}