//Author: Boris Pisabaj
//For ART 151
//Game simulates Oregon Trail but in space with interactions with
//different alien races

//variables for images
  let starArray = [];

function preload(){
  sceneArray.push(loadImage("images/8bit_earth1.png"));
  ship = loadImage("images/ship1.png");

  hyperspaceButton = createButton("Jump to FTL");
  hyperspaceButton.mousePressed(toggleHyperspace);

}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.background(sceneArray[sceneIndex]);
}

function draw(){
  if(inHyperspace == false){
    image(ship, 200, 200, 50, 50);
  }
  else{
    hyperspace();
  }
}

function hyperspaceMode(){
  if(hsSetUpDone = false){
    //print("Setting up. ONLY RUN ONCE!!!");
    hyperSpaceSetUp();
    hsSetUpDone = true;
  }
  else{
    canvas.background(9,9,9);
    hyperspace();
  }
}

function hyperSpaceSetUp(){
  for(let j = 0; j < 15; j++)
  {
    starArray.push(new star(random(windowWidth/2, windowWidth-50), random(windowHeight/2, windowHeight - 50), 300, 10, 70, 4);
    starArray[j].star();
  }
}


function hyperspace(){
  image(ship, width/2, height/2, 50, 50);
  for(let i = 0; i < 15; i++){
    starArray[i].movethis();
    starArray[i].star();
  }

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


function toggleHyperspace(){
  if(inHyperspace == false){
    inHyperspace = true;
  }
}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
  canvas.background(sceneArray[sceneIndex]);
}
