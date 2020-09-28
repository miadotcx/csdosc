import * as env from './environment.js';

// classify Ball
export class Ball {
  constructor(name, g, d, x, y, vX, vY, m) {

    // set name of ball
    if (name == undefined) {
      this.name = String(Math.random);
    }
    else {
      this.name = name;
    }

    // pass gravitational constant of ball
    if (g == undefined) {
      this.g = 0;
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

  translate() {
    let newX = this.x + this.vX;
    if ((newX+this.d/2) >= env.canvasWidth) {
      console.log("newX exceeds canvas bounds, resetting to inside canvas");
      newX = env.canvasWidth-1-this.d/2;
    }
    if ((newX-this.d/2) <= 0) {
      newX = 1+this.d/2;
    }
    this.x = newX;

    let newY = this.y + this.vY;
    if ((newY+this.d/2) >= env.canvasHeight) {
      console.log("newY exceeds canvas bounds, resetting to inside canvas");
      newY = env.canvasHeight-1-this.d/2;
    }
    if ((newY-this.d/2) <= 0) {
      newY = 1+this.d/2;
    }
    this.y = newY;
  }

  gravity() {
    this.vY = this.vY + this.m * (this.g / env.framerate);
  }

  render() {
    fill(255,100,100);
    strokeWeight(0);
    stroke(255);
    ellipse(this.x, this.y, this.d);
    this.translate();
    if (this.g > 0) {
      this.gravity();
    }
  }
}