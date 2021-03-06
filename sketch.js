var count=0;

function preload (){
bgimg=loadImage("backyard.jpg")
level1Img=loadImage("level1.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
 button1 = createButton('Level 1');
 button1.position(width/2-60,height-130)
 button1.size(100,100)
 button1.mousePressed(changeBg)

}

function draw() {
  
 background(255,255,255); 
 if(count===0){ 
  image(bgimg,0,0,windowWidth,windowHeight) 
}
 else if(count===1){
      background(level1Img)
      button1.hide()
    }
  
  drawSprites();
  
}
function changeBg(){
  count=1
}