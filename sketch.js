var fondo, bg;
var player;
var perros;
var borde;
var arbol1, arbol;
var perro;
function preload(){
  fondo=loadImage("images/fondo.jpg");
  arbol1=loadImage("images/arbol.png")
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  bg=createSprite(displayWidth/2-50 , displayHeight/2-80,20,20);
  bg.addImage(fondo);
  bg.scale=0.7
  player=createSprite(100, height-80, 50,100);
  borde=createSprite(width/2, height-50, width-50, 10);
  borde.visible=false;
  perros= new Group();
  arbol=createSprite(width/2, height-150);
  arbol.addImage(arbol1);
  //arbol.scale=0.5;
  perro=createSprite(width/2, height-150, 50,100);
  perro.depth= arbol.depth;
  arbol.depth=arbol.depth+2;
  
  
}

function draw() {
  background("black");

  if(keyDown("LEFT_ARROW")){
    player.x = player.x -5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 5;
  }
 

  if(keyDown("SPACE") && player.y >200  ){
    
    player.velocityY = -20   ;
  }
    player.velocityY=player.velocityY+ 0.5;     
    player.collide(borde);
    perro.velocityX=-5;
    perro.velocityY=perro.velocityY+0.5;
    perro.collide(borde);
    muchosPerros();
  drawSprites();
        
}


function muchosPerros(){
    var x=Math.round(random(width/2, width))
    
}