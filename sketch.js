var alien,al1;
var fruit1,fruit2,fruit3,fruit4,fruit1img,fruit2img,fruit3img,fruit4img;
var gameoverimage ,gameoversound;
var swordsound,swordimage,sword ;
var PLAY=1;
var END =0;
var gameState=1;
var enemygroup,fruitgroup,score;
var score=0;

function preload(){
  al1 = loadAnimation("alien1.png", "alien2.png");
 
  
 fruit1img=loadImage("fruit1.png") ; 
 fruit2img=loadImage("fruit2.png") ; 
 fruit3img=loadImage("fruit3.png") ;
 fruit4img=loadImage("fruit4.png") ; 
  
 gameoverimg  =loadImage("gameover.png") ;
 gameoversound=loadSound("gameover.mp3") ;
  
 swordimg  =loadImage          ("sword.png") ;
 swordsound=loadSound("knifeSwooshSound.mp3");
 
  
}
function setup(){
  createCanvas(600,600);
  
  sword=createSprite(100,200,20,20);
  sword.addImage (swordimg);
  sword.scale=0.7;
  
  
  enemygroup=createGroup()
  fruitgroup=createGroup()
  
  score=0
}

function draw(){
 background("lightblue");
  
  if(gameState===PLAY){
    sword.y=World.mouseY;
    sword.x=World.mouseX;
      enemy();
      fruits();
    if(fruitgroup.isTouching(sword)){
      score=score+2
      fruitgroup.destroyEach();
      swordsound.play();
                                      }
     if(enemygroup.isTouching(sword)){
       gameState=END;
       enemygroup.destroyEach();
        gameoversound.play();
       fruitgroup.destroyEach();
  
     }
   
    
                       }
     
  if(gameState===END){
      sword.addImage(gameoverimg)
         
         sword.y=300;
         sword.x=300;
         
  }
  
  
 

  
  drawSprites();
  stroke=("white");
  
  text("score:",518,50)
  text(score,550,50)
}
function fruits(){
  if(World.frameCount%30===0)
   {
    fruit=createSprite(400,200,20,21)
   fruit.scale=0.2
    var position=Math.round(random(1,2));
  switch(position){
     case 1:fruit.x=400;
            fruit.velocityX=-(7+(score/4)) ; 
             break;     
     case 2: fruit.x=0 
            fruit.velocityX=(7+(score/4)) ; 
             break; 
             default: break;
                  }
     
     
     
     var rand=Math.round(random(1,4));
    switch(rand){
     
     case 1:fruit.addImage(fruit1img);
            break;
     case 2:fruit.addImage(fruit2img);
            break;
     case 3:fruit.addImage(fruit3img);
            break;
     case 4:fruit.addImage(fruit4img);
            break;
            
            default:break;      
    } 
     fruit.y=Math.round(random(20,530));
    // fruit.velocityX=-8;
     fruit.setLifetime=100;
     fruitgroup.add(fruit);
  } 
  
}
function enemy(){
  if(World.frameCount%120===0){
    alien=createSprite(400,200,20,20);
    alien.addAnimation("monster",al1);
    alien.y=Math.round(random(100,300));
    alien.velocityX=-(8+(score/10));
    alien.setLifetime=80;
    enemygroup.add(alien);

  }
  
}










