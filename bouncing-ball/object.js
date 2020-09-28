// import environment variables from environment.js
import * as env from './environment.js';

// classify Ball
export class Ball {
  // constructor so you can force the ball to look and act a certain way from instantiation
  constructor(name, g, d, x, y, vX, vY, m) {

    // set name of ball (this is not necessary for the assignment, but useful if you want to implement interaction with the balls on screen)
    if (name == undefined) { // this means the name wasn't defined in an instantiation of class Ball and we "have to" define the name by default.
      // here the name is generated by pseudo-random numbers. good enough in this case since we don't have to work with security conventions
      this.name = String(Math.random); 
    }
    else {
      /* 
      otherwise we can just use the name given in the instantiation.
      this.name   refers to the final property of this instance of Ball
      name        refers to the name given in the constructor above. 
      */
      this.name = name;
    }

    // define gravitational constant of this particular ball
    if (g == undefined) {
      this.g = env.g;
    }
    else {
      this.g = g;
    }

    // define diameter
    if (d == undefined) {
      this.d = 10 + 20 * Math.random();
      console.log("set ball diameter to " + this.d);
    }
    else {
      this.d = d;
    }

    // define x position
    if (x == undefined) {
      this.x = (env.canvasWidth - this.d) * Math.random() + this.d / 2;
    }
    else {
      this.x = x;
    }

    // define y position
    if (y == undefined) {
      this.y = (env.canvasHeight - this.d) * Math.random() + this.d / 2;
    }
    else {
      this.y = y;
    }

    // define x velocity
    if (vX == undefined) {
      this.vX = env.v * Math.random() - env.v/2;
    }
    else {
      this.vX = vX;
    }

    // define y velocity
    if (vY == undefined) {
      this.vY = env.v * Math.random() - env.v/2;
    }
    else {
      this.vY = vY;
    }

    // define mass 
    if (m == undefined) {
      this.m = this.d + this.d*Math.random();
    }
    else {
      this.m = m;
    }
  }

  /*
  translate function makes the ball move by 1 step, depending on the velocities
  use this function in render() so it is run every time the ball is rendered.
  */
  translate() {

    // store the new X position in a temporary variable so we can check if the ball won't be out of bounds (OOB)
    let newX = this.x + this.vX;

    // if the new x position is OOB, this will force-reset newX to inside the canvas. this makes sure that the ball doesn't glitch out and hang out on the edge of the canvas.
    if ((newX+this.d/2) >= env.canvasWidth) {
      // console.log("newX exceeds canvas bounds, resetting to inside canvas"); //debug
      newX = env.canvasWidth-1-this.d/2;
    }
    if ((newX-this.d/2) <= 0) {
      // console.log("newX exceeds canvas bounds, resetting to inside canvas"); //debug
      newX = 1+this.d/2;
    }

    // now we set the x position of the ball to the defined newX position.
    this.x = newX;


    // repeat for y
    let newY = this.y + this.vY;
    if ((newY+this.d/2) >= env.canvasHeight) {
      // console.log("newY exceeds canvas bounds, resetting to inside canvas"); //debug
      newY = env.canvasHeight-1-this.d/2;
    }
    if ((newY-this.d/2) <= 0) {
      newY = 1+this.d/2;
    }
    this.y = newY;
  }

  // simple gravity function that will add the gravitational acceleration to the vertical velocity every frame
  gravity() {
    // needs updating
    this.vY = this.vY + this.m * (this.g / env.framerate);
  }

  // render function will actuall draw the ball inside the canvas.
  // TODO needs work to randomize the colors and stroke etc.
  render() {
    // define how the ball appears
    fill(255,100,100);
    strokeWeight(0);
    stroke(255);

    // actually draw the ellipse with the properties of this instance of Ball
    ellipse(this.x, this.y, this.d);

    // translate this specific ball.
    this.translate();

    // apply gravity if gravity is more than 0
    if (this.g > 0) {
      this.gravity();
    }
  }
}