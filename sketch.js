const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var pl;

function setup() {
  createCanvas(360,600);
  
  engine=Engine.create();
  world=engine.world;

  ground1=new Ground(180,0,365,20);
  ground2=new Ground(180,600,365,20);

  se1=new Seperation(0,300,10,600);
  se2=new Seperation(60,550,10,150);
  se3=new Seperation(120,550,10,150);
  se4=new Seperation(180,550,10,150);
  se5=new Seperation(240,550,10,150);
  se6=new Seperation(300,550,10,150);
  se7=new Seperation(360,300,10,600);

  par1=new Particle(30,150,20);
  par2=new Particle(80,150,20);
  par3=new Particle(130,150,20);
  par4=new Particle(180,150,20);
  par5=new Particle(230,150,20);
  par6=new Particle(280,150,20);
  par7=new Particle(330,150,20);
  
  par8=new Particle(55,225,20);
  par9=new Particle(105,225,20);
  par10=new Particle(155,225,20);
  par11=new Particle(205,225,20);
  par12=new Particle(255,225,20);
  par13=new Particle(305,225,20);
  
  par14=new Particle(30,300,20);
  par15=new Particle(80,300,20);
  par16=new Particle(130,300,20);
  par17=new Particle(180,300,20);
  par18=new Particle(230,300,20);
  par19=new Particle(280,300,20);
  par20=new Particle(330,300,20);
  
  par21=new Particle(55,375,20);
  par22=new Particle(105,375,20);
  par23=new Particle(155,375,20);
  par24=new Particle(205,375,20);
  par25=new Particle(255,375,20);
  par26=new Particle(305,375,20);

  par27=new Particle(15,225,20);
  par28=new Particle(345,225,20);
  par29=new Particle(15,375,20);
  par30=new Particle(345,375,20);
  par31=new Particle(15,145,20);
  par32=new Particle(345,145,20);
  par33=new Particle(15,295,20);
  par34=new Particle(345,295,20);

  pl1=new plinko(random(5,355),10,20);
  pl2=new plinko(random(5,355),10,20);
  pl3=new plinko(random(5,355),10,20);
}

function draw() {
  background("green");  

  Engine.update(engine);

  par1.display();
  par2.display();
  par3.display();
  par4.display();
  par5.display();
  par6.display();
  par7.display();
  
  par8.display();
  par9.display();
  par10.display();
  par11.display();
  par12.display();
  par13.display();
  
  par14.display();
  par15.display();
  par16.display();
  par17.display();
  par18.display();
  par19.display();
  par20.display();
  
  par21.display();
  par22.display();
  par23.display();
  par24.display();
  par25.display();
  par26.display();

  par27.display();
  par28.display();
  par29.display();
  par30.display();
  par31.display();
  par32.display();
  par33.display();
  par34.display();

  pl1.display();
  pl2.display();
  pl3.display();

  se1.display();
  se2.display();
  se3.display();
  se4.display();
  se5.display();
  se6.display();
  se7.display();

  ground1.display();
  ground2.display();

  drawSprites();
}

function keyPressed(){
  if(keyCode==49){
    Matter.Body.setPosition(pl1.body,{x:random(10,110),y:10});
    Matter.Body.setPosition(pl2.body,{x:random(10,110),y:10});
    Matter.Body.setPosition(pl3.body,{x:random(10,110),y:10});
  }
  if(keyCode==50){
    Matter.Body.setPosition(pl1.body,{x:random(130,230),y:10});
    Matter.Body.setPosition(pl2.body,{x:random(130,230),y:10});
    Matter.Body.setPosition(pl3.body,{x:random(130,230),y:10});
  }
  if(keyCode==51){
    Matter.Body.setPosition(pl1.body,{x:random(250,350),y:10});
    Matter.Body.setPosition(pl2.body,{x:random(230,350),y:10});
    Matter.Body.setPosition(pl3.body,{x:random(230,350),y:10});
  }
}