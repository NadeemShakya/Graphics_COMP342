// defining the clipping window boundary.
let xwmin = ywmin = 200;
let xwmax = 1100,
  ywmax = 500;

function setup() {
  createCanvas(1350, 650);
  background(255);
  stroke(172, 172, 172);
  // Enter all lines to be checked.
  line(40, 80, 70, 30);
  line(0, 0, 1200, 600);
  line(50, 60, 1100, 400);
  line(0, 200, 800, 0);
  line(1200, 20, 100, 500);
  line(500, 100, 150, 850);
  line(0, 300, 1300, 300);
  line(0, 10, 500, 600);
  line(500, 0, 500, 600);
  line(20, 300, 800, 600);
}

function draw() {
  fill(255);
  stroke(0);
  strokeWeight(2);
  // draw the clipping window.
  rect(xwmin, ywmin, (xwmax - xwmin), (ywmax - ywmin));
  strokeWeight(1);
  stroke(255, 0, 0);
  // call clipping function for all the lines
  clipping(40, 80, 70, 30);
  clipping(0, 0, 1200, 600);
  clipping(50, 60, 1100, 400);
  clipping(0, 200, 800, 0);
  clipping(1200, 20, 100, 500);
  clipping(500, 100, 150, 850);
  clipping(0, 10, 500, 600);
  clipping(0, 300, 1300, 300);
  clipping(500, 0, 500, 600);
  clipping(20, 300, 800, 600);

}

function clipping(x1, y1, x2, y2) {
  let p = [];
  let q = [];
  let u1 = [0];
  let u2 = [1];
  let u1F, u2F;
  let clip = true;

  p[0] = -(x2 - x1);
  p[1] = (x2 - x1);
  p[2] = -(y2 - y1);
  p[3] = (y2 - y1);

  q[0] = x1 - xwmin;
  q[1] = xwmax - x1;
  q[2] = y1 - ywmin;
  q[3] = ywmax - y1;

  for (i = 0; i < 4; i++) {
    if (p[i] === 0) {
      if (q[i] < 0)
        clip = false;
    }
  }

  if (clip) {
    for (i = 0; i < 4; i++) {
      if (p[i] < 0) {
        u1.push((q[i] / p[i]));
      } else if (p[i] > 0) {
        u2.push((q[i] / p[i]));
      }
    }

    u1F = max(u1);
    u2F = min(u2);

    if (u1F < u2F) {
      let xA = x1 + u1F * (x2 - x1);
      let yA = y1 + u1F * (y2 - y1);
      let xB = x1 + u2F * (x2 - x1);
      let yB = y1 + u2F * (y2 - y1);
      // indicate the clipped line.
      line(xA, yA, xB, yB);
    }

  }

}