// Predefined Offset Values
x = 10; y = 10;
xinc = 20;

// enter your chart points here
let chartLine = [0, 10, 20, 50, 0, 14, 66, 02, 55, 59, 47, 150, 200, 55, 20];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245, 242, 242);
  
   // heading start.
  textSize(25);
  fill(0);
  text('Histogram using DDA', 550, 50);
  
  // heading end.
  // Translate the canvas.
  translate(width / 3, height / 2.5);

  // Axis marking start.
  fill(0);
  noStroke();
  textSize(16);
  text('0', -20, 0);
  text('50', -25, 50);
  text('100', -35, 100);
  text('150', -35, 150);
  text('200', -35, 200);
  text('250', -35, 250);
  // Axis marking end.

  // graph label start.
  textSize(14);
  text('x-axis', 400, 280);
  text('y-axis', -100, -100);
  // graph label end.
  stroke(253, 189, 194);
  // Lines for the axes
  line(0, 250, 0, -150);
  line(0, 250, 500, 250);

  stroke(219, 93, 120);
  // Generate line chart using above chartLine input.
  for(let k = 1; k < chartLine.length; k++) {
    DDA((x + (k * xinc)), chartLine[k - 1], (x + ((k + 1) * xinc)), chartLine[k]);
  }  
}

function DDA(x0, y0, x1, y1) {
  if(y0 >= y1){
    let dx, dy;
    let stepSize;
    let x = x0, y = y0;
    dx = x1 - x0;
    dy = y0 - y1;
    if(abs(dx) > abs(dy)) {
      stepSize = dx;
    }else {
      stepSize = dy;
    }
    xInc = (dx / stepSize);
    yInc = (dy / stepSize);
    while(x1 >= x && y1 <= y) {
      x += xInc;
      y -= yInc;
      ellipse(x, y, .5);
    }
  }else if(y0 < y1) {
    let dx, dy;
    let stepSize;
    let x = x0, y = y0;
    dx = x1 - x0;
    dy = y1 - y0;
    if(abs(dx) > abs(dy)) {
      stepSize = dx;
    }else {
      stepSize = dy;
    }
    xInc = (dx / stepSize);
    yInc = (dy / stepSize);

    while(x1 >= x && y1 >= y) {
      x += xInc;
      y += yInc;
      ellipse(x, y, .5);
    }    
  }
}
