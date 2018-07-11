// Predefined offset values.
x = 200, y = 349 , xinc = 20;

// Input your data here for the graph result.
  let barValue = [220, 35, 50, 100, 66, 58, 10, 68, 22, 133];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245, 242, 242);
  angleMode(DEGREES);

  // heading start.
  textSize(25);
  fill(0);
  text('LineChart using DDA', 550, 50);
  // heading end.

  // Translate the canvas.
  translate(width / 6, height / 4);

  // graph label start.
  textSize(14);
  text('x-axis', 800, 400);
  text('y-axis', 100, 0);
  // graph label end.

  j = 0;
  stroke(253, 189, 194);
  // drawing axes start.
  DDA(180, 350, 900, 350);
  DDA(180, 350, 180, 0);
  // drawing axes end.

  stroke(219, 93, 120);
  for(let i = 1; i <= (barValue.length * 2); i += 2) {
    DDA((x + (i * xinc)), y, (x + (i * xinc)), y - barValue[j]);
    DDA((x + ((i + 1) * xinc)), y, (x + ((i + 1) * xinc)), (y - barValue[j]));
    DDA((x + i * xinc), (y - barValue[j]), (x + ((i + 1) * xinc )), (y - barValue[j]));   
    j++;
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
