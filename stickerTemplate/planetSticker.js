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
let satX = [];
let satY = [];

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

  image(marsButton, marsButtonX, marsButtonY, 50,50);
  image(saturnButton, saturnButtonX, saturnButtonY, 60, 50);
}

function distance(){
  if(dist(mouseX, mouseY, marsButtonX, marsButtonY) < 25){
    marsBool = true;
    saturnBool = false;
  }
  if(dist(mouseX, mouseY, saturnButtonX, saturnButtonY) < 25){
    marsBool = false;
    saturnBool = true;
  }
  if(marsBool == true){
    if(mouseX > 200 || mouseY > 200){
      msX.push(mouseX);
      msY.push(mouseY);
    }
  }
  if(saturnBool == true){
    if(mouseX > 200 || mouseY > 200){
      satX.push(mouseX);
      satY.push(mouseY);
    }
  }

}


function keyTyped(){
  if(key === 'd' && debugMode == false){
    debugMode = true;
  }
  else if(key === 'd' && debugMode == true){
    debugMode = false;
  }
}


function mousePressed(){


}


function windowResized(){
  createCanvas(windowWidth, windowHeight);
}
