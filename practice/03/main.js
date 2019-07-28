class Car {
  constructor({ maxSpeed = 0 }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
  }

  turnOn() {
    this.running = true;
  }

  turnOff() {
    this.running = false;
  }

  accelerate(spd) {
    if (this.maxSpeed < spd) return;
    this.speed = spd;
  }

  decelerate(spd) {
    if (spd < 0 || this.maxSpeed < spd) return;
    this.speed = spd;
  }

  drive(hours) {
    if (this.running === false) return;
    this.distance = hours * this.speed;
  }
}


const car = new Car({ maxSpeed: 100 });
car.turnOn();
console.log(car.running);
car.turnOff();
console.log(car.running);
car.turnOn();
console.log(car.running);
car.accelerate(150);
console.log(car.speed);
car.accelerate(90);
console.log(car.speed);
car.decelerate(90);
console.log(car.speed);
car.decelerate(-10);
console.log(car.speed);
car.decelerate(120);
console.log(car.speed);
car.decelerate(80);
console.log(car.speed);
car.drive(5);
console.log(car.distance);
