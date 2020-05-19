const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gong,supporter;


function setup() {
  createCanvas(800,600);
  
  engine=Engine.create();
  world=engine.world;

  gong=new Gong(300,350,100);
  console.log(gong);
  supporter=new Support(300,100,200,30);

  chain=new Chain(supporter.body,gong.body);
}

function draw() {
  background(0);
  Engine.update(engine);  
  gong.display();
  supporter.display();
  chain.display();

  if(keyCode===32){
    gong.body.position.x=mouseX;
    gong.body.position.y=mouseY;
  }

  if(keyCode===8){
    gong.body.position.x=300;
    gong.body.position.y=350;
  }
}
