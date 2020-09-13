  
var bullet,thickness;
var wall;
var speed, weight;

function setup()
{
 createCanvas(1600,400);
 //giving random values to variables SPEED and WEIGHT.
 speed=random(223,321)
 weight=random(30,52)
 thickness= random(22,83)

 //creating a sprite that ressembles a bullet
 bullet = createSprite(50,200,50,20);
 bullet.velocityX = speed; 
 bullet.shapeColor = "white";

 // creating a sprite that ressembles a wall
 wall = createSprite(1200,200,thickness, height/2);
 wall.shapeColor=(80,80,80);
}

function draw() 
{
  background("black"); 
 
  if (hasCollided(bullet,wall))
  {
   bullet.velocityX= 0;

   var damage= 0.5 * weight * speed * speed/ (thickness*thickness*thickness);

   if(damage > 10)
   {
   bullet.shapeColor= 'green';
   }
   if (damage < 10)
   {
   bullet.shapeColor= 'red';
   }

  }
  
  drawSprites();
}


function hasCollided (rbullet,rWall) 
{
 bulletRightEdge = rbullet.x + rbullet.width;
 wallLeftEdge = rWall.x;

 if (bulletRightEdge >= wallLeftEdge) 
 {
 return true; 
 } 
 else 
 {
  return false;
 }

}






















