export class Car {
  speed = 0;

  constructor(make, body) {
    this.make = make;
    this.body = body;
  }

  getInfo() {
    return `This car is made by ${this.make} with ${this.body} body type. It is driving with ${this.speed} right now.`;
  }

  start() {
    this.speed = 1;
  }

  accelerate() {
    this.speed = this.multiplySpeed();
    console.log(`Speed accelerated to: ${this.speed}`);
  }

  multiplySpeed() {
    return 1.5 * this.speed;
  }

  break() {
    this.speed = 0;
    console.log('Stopped');
  }
}
