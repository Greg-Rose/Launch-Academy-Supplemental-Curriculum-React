import positiveWords from 'constants/positiveWords';

describe('positiveWords', () => {
  it('should be an Array', () => {
    expect(positiveWords).toEqual(jasmine.any(Array));
  });

  it('should include the following positive words', () => {
    expect(positiveWords).toContain('awesome');
    expect(positiveWords).toContain('best');
    expect(positiveWords).toContain('ballin');
    expect(positiveWords).toContain('cool');
    expect(positiveWords).toContain('entretaining');
    expect(positiveWords).toContain('good');
    expect(positiveWords).toContain('happy');
    expect(positiveWords).toContain('love');
  });
});
