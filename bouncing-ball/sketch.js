// import environment variables from environment.js and all defined object classed from object.js (Ball)
import * as env from './environment.js';
import * as object from './object.js';

// create usable variable for the background color
export let bg;

// create new balls
let ballA = new object.Ball("Ball A", env.g);
let ballB = new object.Ball("Ball B", env.g);

function mousePressed() {
  document.location.reload();
}

window.mousePressed = mousePressed;

// === LOGIC ===

function setup() {
  
  // actually define the background color variable
  bg = color(40, 40, 40, 120);
  
  // create canvas
  createCanvas(env.canvasWidth, env.canvasHeight);
  background(40, 40, 40);
  
  // set framerate
  frameRate(env.framerate);
}

function draw() {

  // draw the background with color bg
  background(bg);

  // render the balls using Ball#render() from object.js
  ballA.render();
  ballB.render();

  // test for wall collision
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

  // TODO object collision
  // if (dist(obj.x, obj.y, objB.x, objB.y) < (obj.d/2 + objB.d/2)) {
  //   return true;
  // }
  // return false;
}

window.draw = draw;
window.setup = setup;