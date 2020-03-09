//Author: Boris Pisabaj
//For ART 151
//Game simulates Oregon Trail but in space with interactions with
//different alien races

//variables for images
  let starArray = [];

function preload(){
  sceneArray.push(loadImage("images/8bit_earth1.png"));
  ship = loadImage("images/bitShip1.png");


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
    rotate(PI);
    image(ship, 200, 200, 50, 50);
  }
  else{
  //  let someStar = new SpaceStar(100, 100, )
    canvas.background(9,9,9);
    hyperspaceMode();
  }
}

function hyperspaceMode(){
  if(hsSetUpDone == false){
    //print("Setting up. ONLY RUN ONCE!!!");
    hyperSpaceSetUp();
    print("Should get here");
    hsSetUpDone = true;
  }
  else{

    hyperspace();
  }
}

function hyperSpaceSetUp(){
  for(let j = 0; j < 15; j++)
  {
    starArray.push(new SpaceStar(random(windowWidth/2, windowWidth-50), random(windowHeight - 50), 10, 30, 4));
    starArray[j].star();
  }
}


function hyperspace(){
  image(ship, width/2, height/2, 50, 50);
  for(let i = 0; i < 15; i++){
    starArray[i].movethis(-10);
    starArray[i].star();
  }

}

function keyTyped(){
  if(key === 'd'){
    if(debugging == false)
    {
      debugging = true;
    }
    else
    {
      debugging = false;
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
