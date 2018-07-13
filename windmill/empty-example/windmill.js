let x1 = 120, y1 = 43;
let x2 = 120 , y2 = -43;
let x3, y3 = 43;
let x4 = 120 , y4 = -43;
let x5 = 43, y5 = y6 = 120;
let x6 = -43
let x7 = 43, y7;
let  x8 = -43, y8;
let xR1, yR1, xR2, yR2, xR3, yR3, xR4, yR4;
let speed = .5;
function setup() {
	// frameRate(23);
	createCanvas(1235, 605);
	angleMode(DEGREES);
	x3 = ((120 * cos(180)) - (43 * sin(180)));
	x4 = ((120 * cos(180)) - (-43 * sin(180)));
	y7 = ((43 * sin(180)) + (120 * cos(180)));
	y8 = ((-43 * sin(180)) + (120 * cos(180)));

}
function draw() {
	background(255);
	noStroke();
	fill(30, 144, 255, 230);
	rect(0, 0, width, 400);
	fill(124, 252, 0);
	rect(0, 400, width, height);
	translate(600, 200);
	stroke(0);
	//Pole Start
	strokeWeight(2);
	fill(255, 0, 0, 100);
	ellipse(0, 0, 40);
	fill(0);	
	quad(-20, 0, 20, 0, 55, 300, -55, 300);
	fill(255);
	//window
	fill(30, 144, 255);
	rect(-17.5, 100, 35, 50);
	//basement
	fill(0);
	rect(-95, 300, 190, 20);
	//Pole End
	//First Pankha Start
	xR1 = (x1*cos(speed)) - (y1 * sin(speed));
	yR1 = (x1 * sin(speed)) + (y1 * cos(speed));
	x1 = xR1;
	y1 = yR1;

	xR2 = (x2*cos(speed)) - (y2 * sin(speed));
	yR2 = (x2 * sin(speed)) + (y2 * cos(speed));
	x2 = xR2;
	y2 = yR2;

	fill(100, 120, 130, 150);
	quad(0, 0, 0, 0, xR1, yR1, xR2, yR2);
	
	// Second Pankha Start
	xR3 = (x3*cos(speed)) - (y3 * sin(speed));
	yR3 = (x3 * sin(speed)) + (y3 * cos(speed));
	x3 = xR3;
	y3 = yR3;

	xR4 = (x4*cos(speed)) - (y4 * sin(speed));
	yR4 = (x4 * sin(speed)) + (y4 * cos(speed));
	x4 = xR4;
	y4 = yR4;
	quad(0, 0, 0, 0, xR3, yR3, xR4, yR4);
	
	//Second Pankha Stop

	// Third Pankha start
	//SE line
	xR5 = (x5*cos(speed)) - (y5 * sin(speed));
	yR5 = (x5 * sin(speed)) + (y5 * cos(speed));
	x5 = xR5;
	y5 = yR5;

	xR6 = (x6*cos(speed)) - (y6 * sin(speed));
	yR6 = (x6 * sin(speed)) + (y6 * cos(speed));
	x6 = xR6;
	y6 = yR6;
	quad(0, 0, 0, 0, xR5, yR5, xR6, yR6);
	
	// Third Pankha Stop
	//Fourth Pankha Start
	xR7 = (x7*cos(speed)) - (y7 * sin(speed));
	yR7 = (x7 * sin(speed)) + (y7 * cos(speed));
	x7 = xR7;
	y7 = yR7;

	xR8 = (x8*cos(speed)) - (y8 * sin(speed));
	yR8 = (x8 * sin(speed)) + (y8 * cos(speed));
	x8 = xR8;
	y8 = yR8;
	quad(0, 0, 0, 0, xR7, yR7, xR8, yR8);
	//Fourth Pankha Stop

}