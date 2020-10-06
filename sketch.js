var fixedRect, movingRect;
var obj1,obj2,obj3;
var object1,object2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(200,100,50,50);
  obj1.shapeColor = "green";
  obj2 = createSprite(200,180,50,50);
  obj2.shapeColor = "green";
  obj3 = createSprite(200,240,50,50);
  obj3.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
 

  if(isTouching(movingRect,obj3))
  {
    movingRect.shapeColor = "blue";
    obj3.shapeColor = "blue";
  }
  else if(isTouching(movingRect,obj2))
  {
    movingRect.shapeColor = "yellow";
    obj2.shapeColor = "yellow";
  }
  else if(isTouching(movingRect,obj1))
  {
    movingRect.shapeColor = "teal";
    obj1.shapeColor = "teal";
  }
  else
  {
    movingRect.shapeColor = "green";
    obj3.shapeColor = "green"; 
    obj2.shapeColor = "green"; 
    obj1.shapeColor = "green"; 
  }
  
  
  drawSprites();
}
