import { Car } from './api';

describe('api', () => {
  it('should be instance of Car', () => {
    const car = new Car();
    expect(car).to.be.instanceOf(Car);
  });
});
