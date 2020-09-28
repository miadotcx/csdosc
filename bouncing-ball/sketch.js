import * as env from './environment.js';
import * as object from './object.js';

export let bg;

// === LOGIC ===

// create new balls
let ballA = new object.Ball("Ball A", env.g);
let ballB = new object.Ball("Ball B", env.g);

function setup() {
  
  bg = color(40, 40, 40);

  // create canvas
  // createCanvas(env.canvasWidth, env.canvasHeight);
  createCanvas(env.canvasWidth, env.canvasHeight);
  // set framerate
  frameRate(env.framerate);

}

function draw() {

  //draw the background
  background(bg);
  ballA.render();
  ballB.render();
  collide(ballA);
  collide(ballB);

} 

// =============

function collide(obj, target) {

  // canvas border collision
  if (target == undefined) { 
    if (obj.x+obj.d/2 >= env.canvasWidth-1 || obj.x-obj.d/2 <= 1) {
      console.log(obj.name + " collided with a wall on the x-axis.");
      obj.vX = -1 * (env.b * obj.vX);
      console.log(obj.vX);
    }
    if (obj.y+obj.d/2 >= env.canvasHeight-1 || obj.y-obj.d/2 <= 1) {
      console.log(obj.name + " collided with a wall on the y-axis.");
      obj.vY = -1 * (env.b * obj.vY);
      console.log(obj.vY);
    }
  }

  // // object collision
  // if (dist(obj.x, obj.y, objB.x, objB.y) < (obj.d/2 + objB.d/2)) {
  //   return true;
  // }
  // return false;
}

window.draw = draw;
window.setup = setup;