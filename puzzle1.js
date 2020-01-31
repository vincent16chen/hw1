var x;
var y;
var radius;

function setup() {
  createCanvas(400, 400);
  x = random(width);
  y = random(height);
  radius = 70;
}

function draw() {
  background(300);
  
  if (dist(mouseX,mouseY, x, y) > radius) {
    if (mouseIsPressed) {
      radius = 20
      x = mouseX;
      y = mouseY;
    }
    fill(300, 300, 100, 200);
  }
  else {
    fill(000, 100, 300, 100);
  }
  
  ellipse(x, y, radius * 2);
  x += random(-3, 3);
  y += random(-3, 3);
}
