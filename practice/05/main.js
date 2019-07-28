class Car {
  constructor({ maxSpeed = 0, price }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    this.price = price;
  }

  get value() {
    return this.price;
  }

  set value(newPrice) {
    this.price = newPrice;
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

  static getSpecs(objInfo) {
    console.log(`maxSpeed: ${objInfo.maxSpeed}, speed: ${objInfo.speed}, running: ${objInfo.running}, distance: ${objInfo.distance}`);
  }
}


// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
const car = new Car({ maxSpeed: 50, price: 2000 });
console.log(car.value); // 2000

car.value = 4000;
console.log(car.value); // 4000
