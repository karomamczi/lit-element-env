import { Car } from './api';

describe('api', () => {
  it('should be instance of Car', () => {
    const car = new Car();
    expect(car).to.be.instanceOf(Car);
  });

  describe('getInfo', () => {
    it('should return info', () => {
      const car = new Car('Honda', 'coupe');
      expect(car.getInfo()).to.equal(
        `This car is made by ${car.make} with ${car.body} body type. It is driving with ${car.speed} right now.`
      );
    });
  });

  describe('start', () => {
    it('should start and receive new speed value', () => {
      const car = new Car('Honda', 'sedan');
      car.start();
      expect(car.speed).to.equal(1);
    });
  });

  describe('accelerate', () => {
    let multiplySpeedStub;

    beforeEach(() => {
      multiplySpeedStub = sinon.stub(Car.prototype, 'multiplySpeed');
    });

    afterEach(() => {
      multiplySpeedStub.restore();
    });

    it('should call multiplySpeed once', () => {
      const car = new Car('Honda', 'hatchback');
      car.accelerate();
      assert(multiplySpeedStub.calledOnce);
    });

    it('should accelerate speed', () => {
      multiplySpeedStub.returns(1.5);
      const car = new Car('Honda', 'hatchback');
      car.accelerate();
      expect(car.speed).to.equal(1.5);
    });
  });

  describe('multiplySpeed', () => {
    it('should return multiplied value', () => {
      const car = new Car('Honda', 'SUV');
      car.start();
      expect(car.multiplySpeed()).to.equal(1.5);
    });
  });

  describe('break', () => {
    it('should set speed to 0', () => {
      const car = new Car('Honda', 'VAN');
      expect(car.speed).to.equal(0);
    });
  });
});
