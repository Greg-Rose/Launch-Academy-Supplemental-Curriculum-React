import negativeWords from 'constants/negativeWords';

describe('negativeWords', () => {
  it('should be an Array', () => {
    expect(negativeWords).toEqual(jasmine.any(Array));
  });

  it('should include the following negative words', () => {
    expect(negativeWords).toContain('angry');
    expect(negativeWords).toContain('annoying');
    expect(negativeWords).toContain('awful');
    expect(negativeWords).toContain('bad');
    expect(negativeWords).toContain('evil');
    expect(negativeWords).toContain('worst');
  });
});
