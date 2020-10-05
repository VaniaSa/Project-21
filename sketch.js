var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  //create the car sprite and give it a velocity
  bullet=createSprite(50,200,30,10);
  bullet.velocityX = speed;
  bullet.shapeColor= "white";
  
  //create the wall for the car to crash on
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background('#222222');
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    if(damage>10)
    {
        wall.shapeColor=color(255,0,0);

    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
    bulletRightEdge=lbullet.x +lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
       return true  
    }
    return false;
}