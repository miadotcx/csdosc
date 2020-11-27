export class Button {
  constructor(options) {
    let defaultOptions = {
      x: window.innerWidth/2,
      y: window.innerWidth/2,
      w: 40
    }
    this.options = Object.assign(defaultOptions,options);
  }

  draw() {

    rectMode(RADIUS);

    rect(this.options.x, this.options.y, this.options.w);
    
    rectMode(CORNER);
    
  }
}