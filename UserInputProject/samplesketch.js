let modem;
let mic;
let miclvl;
let audioPlaying = false;
let t2Img;
let t1000;
let t2Button;
let t2Playing = false;

let fun;
let funButton;
let feelingIt = false;

let videoSlider;

function preload(){
  modem = loadSound("audio/ModemSound.mp3");
  t2Img = loadImage("images/t2robot.jpg");
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0,0);
  //mic = new p5.AudioIn();
  //mic.start();

  soundButton = createButton("Play Modem");
  soundButton.mousePressed(toggleModem);

  t1000 = createVideo(['videos/T1000Reforming.mp4']);
  t1000.position(200,200);

  t2Button = createButton("Play T2 Vid");
  t2Button.mousePressed(toggleT2Button);

  //fun = createVideo(['videos/NarutoMountAndBlade.mp4']);
  //fun.position(200, 400);

  //funButton = createButton("Play some weeb shit");
  //funButton.mousePressed(toggleFunButton);

  videoSlider = createSlider(1,4,1);
}

function toggleModem(){
  if(audioPlaying){
    modem.pause();
    soundButton.html('Play Sound');
  }
  else{
    modem.loop();
    soundButton.html('Stop Modem');
  }
  audioPlaying = !audioPlaying;
}

function toggleT2Button(){
  if(t2Playing){
    t1000.pause();
    t2Button.html('Play Terminator');
  }
  else{
    t1000.loop();
    t2Button.html('Stop Terminator');
  }
  t2Playing = !t2Playing;
}



function toggleFunButton(){
  if(feelingIt){
    fun.pause();
    funButton.html('Weeb out');
  }
  else{
    fun.loop();
    funButton.html('Stop the Cringe');
  }
  feelingIt = !feelingIt;
}

function draw(){
  background(120,100,55);
  t1000.speed(videoSlider.value());
  //miclvl = mic.getLevel();
  //print(miclvl);
  //let mapSound = map(mouseX, 0, windowWidth, -2, 4);
  //modem.rate(mapSound);
}
