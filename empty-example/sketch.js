import * as env from './environment.js';

function setup() {

  createCanvas(env.canvasWidth,env.canvasHeight);
  background(color(env.backgroundColor));

}

function draw() {
  


}


// actually assign functions to active p5 functions
window.setup  = setup;
window.draw   = draw;