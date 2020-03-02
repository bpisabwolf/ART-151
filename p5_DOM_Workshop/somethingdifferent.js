let capture;
let x = 0;
function setup(){
  createCanvas(800, 240);
  capture = createCapture(VIDEO);
  pixelDensity(1);
  capture.size(320, 240);
  capture.hide();
}

function draw(){
  capture.loadPixels();
  let w = capture.width;
  let h = capture.height;

  copy(capture, w/2, 0, 1, h,x,0,1,h);
}
