const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = []
var plinkos = []
var divisions = []

function preload(){

}

function setup() {
  createCanvas(480,600);
    engine = Engine.create();
    world = engine.world;

  ground1 = new Ground(240,600,480,20);

  for(var k = 0;k <=width; k = k + 80){
    division.push(new Division(k, height - 30/2,10,30));
  }
}

function draw() {
  background("pink");  
  Engine.update(engine);

  ground1.display();

  for (var k = 0 ;k < division.length,k++) {
    divisions[k].display()
  }
  
}