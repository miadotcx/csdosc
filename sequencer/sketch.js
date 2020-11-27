import * as env from './environment.js';

function setup() {

  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(env.frameRate);

}

function draw() {
  
  background(color(env.backgroundColor));
  
  rectMode(RADIUS);
  
  square(40,40,400);
  rect(width/2, height/2, 155, 55);

}

function mousePressed() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// actually assign functions to active p5 functions
window.setup  = setup;
window.draw   = draw;
window.mousePressed = mousePressed;
window.windowResized = windowResized;