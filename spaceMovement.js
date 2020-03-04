//Author: Boris Pisabaj
//For ART 151
//Game simulates Oregon Trail but in space with interactions with
//different alien races

//variables for images
let ship;
let planet;
let canvas;
let sceneIndex;
let sceneArray = [];
let hyperspaceButton;
let debugMode = false;
let inHyperspace = false;
let starX = [];
let starY = [];
let xMove = 10;
let yMove = 0;
let starXPos;
let starYPos;
let hsSetUpDone = false;
let timeoutLimit;

function preload(){
  sceneArray.push(loadImage("images/8bit_earth1.png"));
  ship = loadImage("images/ship1.png");

  hyperspaceButton = createButton("Jump to FTL");
  hyperspaceButton.mousePressed(toggleHyperspace);

}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  sceneIndex = 0;
  canvas.background(sceneArray[sceneIndex]);

  //testing movement
  starXPos = 200;
  starYPos = 100;

  timeoutLimit = 0;

}

function toggleHyperspace(){
  if(inHyperspace == false){
    inHyperspace = true;
  }
}

function draw(){
  if(inHyperspace == false){
    image(ship, 200, 200, 50, 50);
  }
  else{
    //print("initiating hyperspace");
    canvas.background(66, 28, 82);
    //canvas.background(sceneArray[sceneIndex]);

    //starXPos = starXPos + xMove;
    //star(starXPos, starYPos, 10, 70, 4);
    hyperspaceMode();
  }
  timeoutLimit++;
  if(timeoutLimit === 10000){
    print("Ending this...");
    inHyperspace = false;
  }
  //print("are we in hyperspace?" + inHyperspace);


}

function hyperspaceMode(){
  if(hsSetUpDone = false){
    //print("Setting up. ONLY RUN ONCE!!!");
    hyperSpaceSetUp();
    hsSetUpDone = true;
  }
  else{
    hyperspace();
  }
}

//generates 15 stars with their x and y coordinates
function hyperSpaceSetUp(){
  for(let j = 0; j < 15; j++)
  {
    starX.push(windowWidth-50);
    starY.push(random(windowHeight - 50));
    print("Value of X array and Y at " + j +":" + starX[j] +"," + starY[j]);

  }
}


function hyperspace(){
  //will create random stars
  //print("Should be in hyperspace now....")

  image(ship, width/2, height/2, 50, 50);
  //moving all the stars
  for(let j = 0; j < 15; j++)
  {
    starX[j] = starX[j] - xMove;
    //print("Coordinates of star " + j + " Should be: " + starX[j] + "," + starY[j]);
    star(starX[j], starY[j], 10, 70, 4);
  }

}


function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function keyTyped(){
  if(key === 'd'){
    if(debugMode == false)
    {
      debugMode = true;
    }
    else
    {
      debugMode = false;
    }
  }
}


function windowResized(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.background(sceneArray[sceneIndex]);

}
