import words from 'functions/words';

describe('words', () => {
  let message, arrayOfWords;

  beforeAll(() => {
    message = 'fred, barney, & pebbles';
    arrayOfWords = words(message);
  });

  it('should return an Array', () => {
    expect(arrayOfWords).toEqual(jasmine.any(Array));
  });

  it('should return an array of words', () => {
    expect(arrayOfWords).toEqual(['fred', 'barney', 'pebbles']);
  });
});
