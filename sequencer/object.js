import { squares } from './sketch.js';

export class Square {

  constructor({a = 'default a value', b = 'default b value', c = 'default c value'} = {a:'default option a', b:'default option b', c:'default option c'}) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}