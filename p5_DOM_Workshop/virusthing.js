let canvas;
let selectMenu;
let checkBox;
let selectBotton;
let buttonX = 250;
let buttonXSpeed = 5;
let buttonY;
let nameText;

let ads1;
let ads2;
let virus;

let interactiveScene = false;
let checkBoxBrush;

let capture;
function prelpad(){
  ads1 = loadImage("images/adsOne.png");
  ads2 = loadImage("images/adsTwo.png");
  virus = loadImage("images/virus.gif");
}
function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index","-1");
  canvas.position(0,0);

  imageMode(CENTER);
  background(0);
  selectMenu = createSelect();
  selectMenu.style("z-index", "1");
  selectMenu.position(100,50);
  selectMenu.option('Hi...');
  selectMenu.option('Who are you??');
  selectBotton = createButton("Hello...");
  selectBotton.position(150, 200);
  checkBox = createCheckbox("Check here");
  checkBox.style("z-index","1");
  checkBox.position(300, 300);

  capture = createCapture(VIDEO);
  capture.size(320, 240);
}

function spam(){
  //nameText.hide();
  //let imputval = nameText.value();
  //let name = createP(inputval);
  let val = selectMenu.value();
  print("Something is happening..");
  if(val == 'Hi...' && checkBox.checked()){
    background(0);
    print("Hello option");
    image(ads1, width/2, heigh/2, width, height);
    interactiveScene = false;
  }
  else if(val == "Hi..."){
    background(0);
    print("Who option");
    image(ads2, width/2, height/2, width, height);
    interactiveScene = false;
  }
  if(val == "Who are you??" && checkBox.checked()){
    interactiveScene = true;
  }
  else if(val == "Who are you??"){
    background(120, 40, 100);
    interactiveScene = false;
  }
}

function checkBoxAnimate(){
  checkBoxBrush = createCheckbox("NOOO!");
  checkBoxBrush.position(mouseX, mouseY);
}

function draw(){
  image(capture, 0, 0, 320, 240);
  filter(INVERT);
  if(buttonX >= width - 500){
    buttonXSpeed = buttonX * -1;
  }
  if(buttonX <= 0){
    buttonXSpeed = buttonX * -1;
  }
  buttonX = buttonXSpeed + buttonX;
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
