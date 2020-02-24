//Author: Boris Pisabaj
//Purpose: for ART 151 Spring 2020
//Written using p5 library
//~(0-0)~

//global variables because fuck safety
let stars;
let mars;
let marsButton;
let saturn;
let saturnButton;

//some buttons positions
let marsButtonX = 50;
let marsButtonY = 50;
let saturnButtonX = 50;
let saturnButtonY = 110;

//planet booleans
let marsBool = false;
let saturnBool = false;

//some lists or arrays or however the fuck they're made in JavaScript
let mX = [];
let mY = [];
let sX = [];
let sY = [];

//my buttons
let debugMode = false;
//preloading
function preload(){
  mars = loadImage("images/mars.png");
  saturn = loadImage("images/saturn.png");
  marsButton = loadImage("images/marsButton.png");
  saturnButton = loadImage("images/saturnButton.png");
  stars = loadImage("images/stars.jpg");
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}


function draw(){
  push();
    imageMode(CORNERS);
    background(stars);
  pop();

  for(let i = 0; i < mX.length; i++){
    image(mars, mX[i], mY[i], 120, 100);
  }
  for(let i = 0; i < sX.length; i++){
    image(saturn, sX[i], sY[i], 140, 100);
  }
  image(marsButton, marsButtonX, marsButtonY, 50,50);
  image(saturnButton, saturnButtonX, saturnButtonY, 60, 50);
  if(debugMode){
    print("Current Mouse Pos: " + mouseX + ", " + mouseY);
  }
}

function mousePressed(){
  if(dist(mouseX, mouseY, marsButtonX, marsButtonY) < 25){
    marsBool = true;
    saturnBool = false;
    print(marsBool);
  }
  if(dist(mouseX, mouseY, saturnButtonX, saturnButtonY) < 25){
    marsBool = false;
    saturnBool = true;
    print(saturnBool);
  }
  if(marsBool == true){
    if(mouseX > 200 || mouseY > 200){
      mX.push(mouseX);
      mY.push(mouseY);
      if(debugMode){
        print(mX.length);
        print(mX[0]);
        print(mY[0]);
      }
    }
  }
  if(saturnBool == true){
    if(mouseX > 200 || mouseY > 200){
      sX.push(mouseX);
      sY.push(mouseY);
      if(debugMode){
        print(sX.length);
        print(sX[0]);
        print(sY[0]);
      }
    }
  }

}


function keyTyped(){
  if(key === 'd'){
    if(debugMode == false){
      debugMode = true;
    }
    else{
      debugMode = false;
    }
  }
  if(key == 'x'){
    mX.splice[0, mX.length];
    mY = [];
    sX = [];
    sY = [];
  }
}



function windowResized(){
  createCanvas(windowWidth, windowHeight);
}
