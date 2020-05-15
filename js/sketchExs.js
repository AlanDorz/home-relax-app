let ball = {
  x: 100,
  y: 100,
  xspeed: 6,
  yspeed: 5
}

function setup() {
 let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("canvas");
  background('#977DFF');
}

function draw() {
  fill(151, 125, 265, 15);
  noStroke();
  rect(0, 0, windowWidth, windowHeight);

  display()
  move()
  bounce()
}

function display() {
  noStroke()
  fill(255, 0, 132, random(0, 255));
  ellipse(ball.x, ball.y, 150, 150);
}

function move() {
  ball.x = ball.x + ball.xspeed
  ball.y = ball.y + ball.yspeed
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



// 