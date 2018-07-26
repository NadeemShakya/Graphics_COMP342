let rx = 100 , ry = 280;
let x0 = 0, y0 = ry;
let x = x0, y = y0;
let p1 = [], p2 = [];
ry2 = ((ry) * (ry));
rx2 = ((rx) * (rx))
p1[0] = ry2 - (rx2 * ry) + ((1/4) * (rx2));
let i = 0;
let j = 0;

let xCenter = 500;
let yCenter = 300;

function setup() {
  createCanvas(900, 600);
  background(0);
}

function draw() {
  if((2 * ry2 * x) <= (2 * rx2 * y)){
    console.log(p1[i]);
    if(p1[i] < 0) {
      fill(255);
      ellipse((x + 1) + xCenter, y + yCenter, 5);
      ellipse((x + 1) + xCenter, yCenter - y, 5);
      ellipse(xCenter - (x + 1) , - y + yCenter, 5);
      ellipse(xCenter - (x + 1) , y + yCenter, 5);
      console.log(x + 1, y);
      p1[i + 1] = p1[i] + (2*(ry2 * (x + 1))) + (ry2);
      x = x + 1;
    }else if(p1[i] >= 0) {
      ellipse((x + 1) + xCenter, (y - 1) + yCenter, 5);
      ellipse((x + 1) + xCenter, yCenter - (y - 1), 5);
      ellipse(xCenter - (x + 1) , - (y - 1) + yCenter, 5);
      ellipse( xCenter - (x + 1), (y - 1) + yCenter, 5);
      p1[i + 1] = p1[i] + (2 * ry2 * (x + 1)) - (2 * (rx2) * (y - 1)) + (ry2);
      x = x + 1;
      y = y - 1;
    } 
  i++;
  }
  else if(y != 0){
    p2[j] = ry2*((x + (1/2)) * (x + (1/2))) + rx2 * ((y - 1) * (y - 1)) - (rx2 * ry2);
    if(p2[j] > 0) {
      ellipse(x + xCenter, (y - 1) + yCenter, 5);
      ellipse(xCenter - x, yCenter - (y - 1), 5);
      ellipse(x + xCenter, yCenter - (y - 1), 5);
      ellipse(xCenter - x, (y - 1) + yCenter, 5);
      p2[j + 1] = p2[j] - (2 * rx2 * (y - 1)) + rx2;
      y = y - 1;
    }else if(p2[j] < 0) {
      ellipse((x + 1) + xCenter, (y - 1) + yCenter, 5);
      ellipse(xCenter - (x + 1), yCenter - (y - 1), 5);
      ellipse((x + 1) + xCenter, yCenter - (y - 1), 5);
      ellipse(xCenter - (x + 1), (y - 1) + yCenter, 5);
      console.log(x + 1, y - 1);
      p2[j + 1] = p2[j] + (2 * ry2 * (x + 1)) - (2 * rx2 * (y - 1)) + rx2;
      x = x + 1;
      y = y - 1;
    }
    j ++;
  }
}