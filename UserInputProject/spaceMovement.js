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

function preload(){
  sceneArray.push(loadImage("images/8bit_earth1.png"));
  ship = loadImage("images/ship1.png");
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.background(sceneArray[0]);
}

function draw(){
  image(ship, 200, 200, 50, 50);
  hyperspace();

}


function hyperspace(){
  let starX = [];
  let starY = [];

  for(let j = 0; j < 15; j++)
  {
    starX.push(random(windowWidth - 50));
    star(random(windowWidth - 50), random(windowHeight - 50), 10, 70, 4);
  }

  for(let i = 0; i < 100; i++)
  {


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

function windowResized(){
  createCanvas(windowWidth, windowHeight);
}
