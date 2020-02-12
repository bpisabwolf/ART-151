let nums = [4,9,16,25,36,49, 64,81, 100]
let modifier = 1;

let inc = true;
function setup() {
  createCanvas(windowWidth, windowHeight);

  print(nums[2]);
  print(nums.length);
  ellipse(windowWidth/2, windowHeight/2, nums[2], nums[2]);
}

function draw() {
  var i;
  for(i = 0; i < nums.length; i++){
    stroke(10);
    ellipse(random(windowWidth), random(windowHeight), random(nums[i]) * modifier, random(nums[i]) * modifier);
  }
  modifier = modifier * 1.01;
  // put drawing code here
}
