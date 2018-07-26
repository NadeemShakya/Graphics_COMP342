let r = 120;
let x0 = 0, y0 = r;
p = [];
p[0] = (1 - r);
let i = 0;
let x = x0; let y = y0;
let center = 300;
function setup() {
  createCanvas(1200, 600);
  background(0);
}

function draw() {
  fill(255, 0, 0);
  if(x <= y) {
    if(p[i] < 0) {
      console.log(x + 1, y);
      ellipse(x + center, y - 1 + center, 4);
      ellipse(y - 1 + center, x + center, 4);
      ellipse(center - x, center + (y - 1), 4);
      ellipse(center - x, center - (y - 1), 4);
      ellipse(center + (y - 1), center - x, 4);
      ellipse((center + x), center - (y - 1), 4);
      ellipse(center - (y - 1), center - x, 4);
      ellipse(center - (y - 1), center + x, 4);

      p[i + 1] = p[i] + 2*(x + 1) + 1;
      x = x + 1;
    }else if(p[i] >= 0) {
      console.log(x + 1 , y - 1);
      ellipse(x + 1 + center, y - 1 + center, 4);
      ellipse(y - 1 + center, x + 1 + center, 4);
      ellipse(center - (x + 1), center + (y - 1), 4);
      ellipse(center - (x + 1), center - (y - 1), 4);
      ellipse(center + (y - 1), center - (x + 1), 4);
      ellipse((center + (x + 1)), center - (y - 1), 4);
      ellipse(center - (y - 1), center - (x + 1), 4);
      ellipse(center - (y - 1), center + x, 4);

      p[i + 1] = p[i] - 2*(y - 1) + 1 + 2*(x + 1);
      x = x + 1;
      y = y - 1;
    }
    i++;
  }
}