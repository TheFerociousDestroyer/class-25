const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var towerImg, tower
var backgroundImg
var topCannon, angle 
var ball
var balls = []
var boats = []

function preload() {
 backgroundImg = loadImage("./assets/background.gif");
 towerImg = loadImage("./assets/tower.png");
 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 angleMode(DEGREES)
angle = 15
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 
 tower = Bodies.rectangle(160,350,160,310,options)
 World.add(world,tower);

 topCannon = new Cannon(180,110,130,100,angle)

ball = new CannonBall(topCannon.x,topCannon.y)


 
}

function draw() {
  image(backgroundImg,0,0,1200,600);

  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
  push();
  imageMode(CENTER)
  image(towerImg,tower.position.x, tower.position.y,160,310);
  pop();

   topCannon.show()
   
   //Matter.Body.setVelocity(boat.body, {x:-0.7,y:0})
   //ball.show()
   for(var i = 0; i<balls.length; i++)
   {
    showCannonBalls(balls[i])
   }
   createBoat()
}

function keyReleased()
{
  if(keyCode === 32)
  {
    balls[balls.length -1].shoot()
  }
}

function keyPressed()
{
  if(keyCode === 32)
  {
    var cannonBall = new CannonBall(topCannon.x,topCannon.y)
    cannonBall.trajectory=[]
    //Matter.Body.setAngle(cannonBall.body,cannonBall.angle)
    balls.push(cannonBall);
    
  }
  
}

function showCannonBalls(ball)
{
  if(ball)
  {
    ball.show()
  }
}

function createBoat()
{
if(boats.length>0)
{
  if(boats[boats.length-1] === undefined || boats[boats.length-1].body.position.x<width-300)
  {
var positions = [-40,-60,-70,-20]
var p = random(positions)
var boat = new Boat(width,height-100,170,170,p)
boats.push(boat)
  }
  for(var b = 0; b> boats.length; b++)
  {
    if(boats[b])
    {
      Matter.Body.setVelocity(boats[b].body, {x:-0.7,y:0})
      boats[b].show()
    }

    }

  
} 

  else
  {
    boat = new Boat(width - 90, height - 100,170,170,-80 )
    boats.push(boat)
  }

}
