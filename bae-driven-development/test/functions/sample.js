// WRITE TEST HERE
import sample from 'functions/sample';

describe('sample', () => {
  let givenArray, randomElements;

  beforeAll(() => {
    givenArray = ["hi", "bye", "what?", "lol"];
    randomElements = [];
    while (randomElements.length < 10) {
      randomElements.push(sample(givenArray));
    }
  });

  it('should return a random element in the given array', () => {
    for (let element of randomElements) {
      expect(givenArray).toContain(element);
    }
  });
});
