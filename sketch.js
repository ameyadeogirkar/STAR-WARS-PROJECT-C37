var spaceShip,destroy;
var spaceShipImg;
var ground,winningLine;
var backgroundImg;
var sun,sunImg;
var e,r;

function preload(){
  spaceShipImg=loadImage("images/X-wing.png");
  sunImg=loadImage("images/sun.jpg");
 // enemyImg = loadImage("images/Tie-Fighter.png")
  backgroundImg = loadImage("background.jpg");
  destroy = loadImage("images/blast.png");
}

function setup() {
  createCanvas(800,1200);

  spaceShip = createSprite(350,600);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.7;

  sun = createSprite (350, 1150, 20, 20);
  sun.addImage(sunImg);
  sun.scale = 5;

  ground = createSprite(350,1000,1000,20);
  ground.visible = false;
 
  winningLine = createSprite(395,200,805,20);
  winningLine.shapeColor = "crimson"

}

function draw() {
  background(0);  

  sun.x = camera.x - 70;
  spaceShip.x = camera.x - 95;

  if(keyDown("space")){
    spaceShip.velocityY = -11;
  }  

  if(spaceShip.isTouching(winningLine)){
    console.log("YOU WIN...")
    spaceShip.velocityY = 0;
    sun.destroy();
    ground.destroy();
    spaceShip.destroy();
    gameState = 1;
    winningLine.destroy()
    e.destroy();
    r.destroy();
  }

  if (spaceShip.isTouching(ground)){
    var d = createSprite(20,20,20,20);
    d.x = spaceShip.x;
    d.y = spaceShip.y;
    d.addImage(destroy);
    spaceShip.destroy();
    console.log(">>>>YOU LOSE")
    console.log(">>>>relode this page for another chance")
  }

  spaceShip.velocityY = spaceShip.velocityY + 0.8;

 // bckgrd.x = camera.x
    
  drawSprites();
  fill("cyan")
  textSize(50);
  e=text("open consol for result.....",140,100);
  r=text("touch the crimson line to win.........",30,300)
}
