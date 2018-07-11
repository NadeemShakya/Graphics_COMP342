
let x1, y1, x2, y2;
let delx;
let dely;
let p = []; // decision variable
let x = []; // stores x - coordinates
let y = []; // stores y - coordinates
let slope; // slope of the line
i = 0;
let BLASL1start = false;
let BLASG1start = false;
let BLASE1start = false;
let xCriteria = false;
let yCriteria = false;

//HTML DOM ELEMENTS
var x1Value = document.getElementById('x1Value');
var y1Value = document.getElementById('y1Value');
var x2Value = document.getElementById('x2Value');
var y2Value = document.getElementById('y2Value');

x2Value.addEventListener('blur', () => {

  if(parseInt(x2Value.value) < parseInt(x1Value.value)) {
    alert("X2 must be greater than X1");
  }else {
    xCriteria = true;
  }
});

y2Value.addEventListener('blur', () => {
  if(parseInt(y2Value.value) < parseInt(y1Value.value)) {
    alert("Y2 must be greater than Y1");
  }else {
    yCriteria = true;
  }
});

//sets the initial values and chooses the BLA Algo.
function setCoodrinate() {

  if(xCriteria && yCriteria) {
    document.getElementById('buttonID').style.display = 'none';
    document.getElementById('refreshButton').style.display = 'inline';
    x1 = parseInt(x1Value.value);
    y1 = parseInt(y1Value.value);
    x2 = parseInt(x2Value.value);
    y2 = parseInt(y2Value.value);
    delx = abs(x2 - x1);
    dely = abs(y2 - y1);
    slope = dely /  delx;
    if(slope < 1){
        BLASL1start = true;
    }else if(slope > 1) {
        BLASG1start = true;

    }else if(slope == 1) {
        BLASE1start = true;
    }
  }else if(!xCriteria) {
    alert("X2 must be greater than X1");
  }else if(!yCriteria) {
    alert("Y2 must be greater than Y1");

  }
}

//p5 Setup function
function setup() {
  var myCanvas = createCanvas(innerWidth ,innerHeight);
  myCanvas.parent('canvas');
  background(0);
}

//p5 Draw function
function draw() {

  if(BLASL1start){
    BresenhamSL1();
  }else if(BLASG1start){
    BresenhamSG1();
  }else if(BLASE1start){
    BresenhamSE1();
  }
}

//Bresenham for slope less than 1
function BresenhamSL1() {
    noStroke();
    fill(255);
    ellipse(x1, y1, 5);
    textSize(25);
    text('(' + x1 + ',' + y1 + ')', x1 + 40, y1 + 05);
    p[0] = 2 * (dely) - (delx);
    x[0] = x1;
    y[0] = y1;
    point(x1, y1);                                                                                                                                         
    if(p[i] <= 0) {
      x[i + 1] = x[i] + 1;
      y[i + 1] = y[i];
      p[i + 1] = p[i] + 2 * (dely); 
    }else if(p[i] > 0) {
      x[i + 1] = x[i] + 1;
      y[i + 1] = y[i] + 1;
      p[i + 1] = p[i] + 2 * (dely) - 2 * (delx);
    }  
    fill(2,184,117);
    rect(x[i + 1], y[i + 1], 1, 1); 
    if(x[i + 1] < x2) {
      i++;
    }else {
      fill(255);
      text('(' + x[i + 1] + ',' + y[i + 1] + ')', x[i + 1] + 20, y[i + 1]);
      ellipse(x[i + 1], y[i + 1], 5);
    }
}

//Bresenham for slope greater than 1.
function BresenhamSG1() {
    noStroke();
    fill(255);
    ellipse(x1, y1, 5);
    textSize(25);
    text('(' + x1 + ',' + y1 + ')', x1 + 40, y1 + 05);
    p[0] = 2 * (delx) - (dely);
    x[0] = x1;
    y[0] = y1;
    point(x1, y1);                                                                                                                                                 
    if(p[i] < 0) {
      x[i + 1] = x[i];
      y[i + 1] = y[i] + 1;
       p[i + 1] = p[i] + 2 * (delx);
    }else if(p[i] >= 0) {
      x[i + 1] = x[i] + 1;
      y[i + 1] = y[i] + 1;
      p[i + 1] = p[i] + 2 * (delx) - 2 * (dely);
    }  
    fill(2,184,117); // cream
    rect(x[i + 1], y[i + 1], 1, 1); 
    if(y[i + 1] < y2) {
      i++;
    }else {
      fill(255);
      text('(' + x[i + 1] + ',' + y[i + 1] + ')', x[i + 1] + 20, y[i + 1]);
      ellipse(x[i + 1], y[i + 1], 5);
    }

 
}

//Bresenham for slope equal to 1.
function BresenhamSE1() {
    noStroke();
    fill(255);
    ellipse(x1, y1, 5);
    textSize(25);
    x[0] = x1;
    y[0] = y1;
    text('(' + x1 + ',' + y1 + ')', x1 + 40, y1 + 05);
    x[i + 1] = x[i] + 1;
    y[i + 1] = y[i] + 1;
    fill(2,184,117); // sky blue
    rect(x[i + 1], y[i + 1], 1, 1); 
    if(y[i + 1] < y2) {
      i++;
    }else {
      fill(255);
      text('(' + x[i + 1] + ',' + y[i + 1] + ')', x[i + 1] + 20, y[i + 1]);
      ellipse(x[i + 1], y[i + 1], 5);
    }
}
