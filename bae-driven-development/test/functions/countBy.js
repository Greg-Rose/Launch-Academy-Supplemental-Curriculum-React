import countBy from 'functions/countBy';

describe('countBy', () => {
  let wordsArray, count;

  beforeAll(() => {
    wordsArray = ['I', 'really', 'really', 'really', 'love', 'nachos'];
    count = countBy(wordsArray);
  });

  it('should return an Object', () => {
    expect(count).toEqual(jasmine.any(Object));
  });

  it('should return return an object with words and word counts as name-value pairs', () => {
    expect(count).toEqual({ I: 1, really: 3, love: 1, nachos: 1 });
  });
});
