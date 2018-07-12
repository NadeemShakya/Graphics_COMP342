let transformationMatrix = [];
let transformationMatrix_row = 3;
let transformationMatrix_cols = 3;
let initialMatrix = [];
let initialMatrix_row = 3;
let initialMatrix_cols = 1;
let x1 = 0,
  y1 = 0,
  x2 = 200,
  y2 = 0,
  x3 = 100,
  y3 = 120;

// for rotation purpose.
let xr = yr = 0;

function rotationCall() {
  let rotationAngle = parseFloat(document.getElementById('rotationAngle').value);
  // CREATING TRANSFORMATION MATRIX
  createTransformationMatrix();
  xr = x1 - 0;
  yr = y1 - 0;
  // UPDATING CONTENTS OF TRANSFORMATION MATRIX
  transformationMatrix[0][0] = cos(rotationAngle);
  transformationMatrix[0][1] = -sin(rotationAngle);
  transformationMatrix[1][0] = sin(rotationAngle);
  transformationMatrix[1][1] = cos(rotationAngle);
  transformationMatrix[0][2] = xr;
  transformationMatrix[1][2] = yr;
  calculation(x1, y1, 'point1');
  calculation(x2, y2, 'point2');
  calculation(x3, y3, 'point3');

}

function translation() {
  let tx = parseFloat(document.getElementById('xTranslation').value);
  let ty = parseFloat(document.getElementById('yTranslation').value);
  // CREATING TRANSFORMATION MATRIX
  createTransformationMatrix();
  // UPDATING CONTETNS OF TRANSFORMATION MATRIX
  transformationMatrix[0][2] = tx;
  transformationMatrix[1][2] = ty;
  calculation(x1, y1, 'point1');
  calculation(x2, y2, 'point2');
  calculation(x3, y3, 'point3');

}

function scalingCall() {
  let sx = parseFloat(document.getElementById('xScaling').value);
  let sy = parseFloat(document.getElementById('yScaling').value);
  createTransformationMatrix();

  transformationMatrix[0][0] = sx;
  transformationMatrix[1][1] = sy;

  calculation(x1, y1, 'point1');
  calculation(x2, y2, 'point2');
  calculation(x3, y3, 'point3');
}

function shearingCall() {
  let shx = parseFloat(document.getElementById('xShearing').value);
  let shy = parseFloat(document.getElementById('yShearing').value);
  createTransformationMatrix();
  transformationMatrix[0][1] = shx;
  transformationMatrix[1][0] = shy;
  calculation(x1, y1, 'point1');
  calculation(x2, y2, 'point2');
  calculation(x3, y3, 'point3');
}

function createTransformationMatrix() {
  for (j = 0; j < transformationMatrix_row; j++) {
    transformationMatrix[j] = [];
    for (i = 0; i < transformationMatrix_cols; i++) {
      if (i === j) {
        transformationMatrix[j][i] = 1;
      } else {
        transformationMatrix[j][i] = 0;
      }
    }
  }
}

function setup() {
  createCanvas(1200, 550);
  background(255, 247, 250);
  angleMode(DEGREES);
}

function draw() {
  noFill();
  translate(500, 350);
  textSize(15);
  text('A', x1 - 20, -y1);
  text('B', x2 + 10, -y2);
  text('C', x3, -y3 - 10);
  stroke(240, 26, 48);
  strokeWeight(1);
  beginShape();
  vertex(x1, -y1);
  vertex(x2, -y2);
  vertex(x3, -y3);
  vertex(x1, -y1);
  endShape();
}

function calculation(x, y, pointIdentifier) {

  for (j = 0; j < initialMatrix_row; j++) {
    initialMatrix[j] = [];
    for (i = 0; i < initialMatrix_cols; i++) {
      if (j === 0) {
        initialMatrix[j][i] = x - xr;
      } else if (j === 1) {
        initialMatrix[j][i] = y - yr;
      } else {
        initialMatrix[j][i] = 1;
      }
    }
  }

  for (j = 0; j < transformationMatrix_row; j++) {
    let temp1 = temp2 = temp3 = 0;
    for (i = 0; i < transformationMatrix_cols; i++) {
      if (j === 0) {
        temp1 = temp1 + (transformationMatrix[j][i] * initialMatrix[i][0]);
      } else if (j === 1) {
        temp2 = temp2 + (transformationMatrix[j][i] * initialMatrix[i][0]);
      } else {
        temp3 = temp3 + (transformationMatrix[j][i] * initialMatrix[i][0]);
      }
    }
    if (pointIdentifier === 'point1') {
      if (j === 0) {
        x1 = temp1;
      } else if (j === 1) {
        y1 = temp2;
      }
    } else if (pointIdentifier === 'point2') {
      if (j === 0) {
        x2 = temp1;
      } else if (j === 1) {
        y2 = temp2;

      }
    } else if (pointIdentifier === 'point3') {
      if (j === 0) {
        x3 = temp1;
      } else if (j === 1) {
        y3 = temp2;
      }
    }
  }
}