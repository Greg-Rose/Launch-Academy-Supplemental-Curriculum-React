import random from 'functions/random';

describe('random', () => {
  let givenNumber, randomNumber, randomNumbers;

  beforeAll(() => {
    givenNumber = 2;
    randomNumber = random(givenNumber);
    randomNumbers = [];
    while (randomNumbers.length < 10) {
      randomNumbers.push(random(givenNumber));
    }
  });

  it('should return a Number', () => {
    expect(randomNumber).toEqual(jasmine.any(Number));
  });

  it('should return a whole number', () => {
    expect(randomNumber % 1).toBe(0);
  });

  it('should return a random number greater than or equal to zero and less than the given number', () => {
    for (let number of randomNumbers) {
      expect(number).not.toBeLessThan(0);
      expect(number).not.toBeGreaterThan(givenNumber - 1);
    }
  });
});
