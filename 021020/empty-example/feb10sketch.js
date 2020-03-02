let pBool = false;
let fBool = false;


function preload(){

}



function setup() {
  // put setup code herecr'
  createCanvas(windowWidth,windowHeight);
  background(255);
}

function draw() {
  // put drawing code here

  pencil();
}

function mouseDragged(){
  if(pBool){
    stroke(10);
    fill(0);
    line(mouseX,mouseY, pmouseX, pmouseY);
  }
}

function pencil(){
  stroke(78, 100, 28);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyTyped(){
  if(key === 'q'){
    pBool = true;
    fBool = false;
  }
  if(key === 'w'){
    pBool = false;
    fBool = true;
  }
}

function windowResized(){
  canvas(awindowWidth, windowHeight);
}
