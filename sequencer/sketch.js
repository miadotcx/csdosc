import * as env from './environment.js';
import { Square } from './object.js';

export const squares = [];

for (i = 0; i < env.amount; i++) {
  map[i] = new Square();
}

function setup() {

  createCanvas(env.canvasWidth,env.canvasHeight);
  background(color(env.backgroundColor));

}

function draw() {
  


}


// actually assign functions to active p5 functions
window.setup  = setup;
window.draw   = draw;