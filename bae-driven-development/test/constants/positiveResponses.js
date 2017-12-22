// WRITE TEST HERE
import positiveResponses from 'constants/positiveResponses';

describe('positiveResponses', () => {
  it('should be an Array', () => {
    expect(positiveResponses).toEqual(jasmine.any(Array));
  });

  it('should include the following positive responses', () => {
    expect(positiveResponses).toContain("that's great to hear!");
    expect(positiveResponses).toContain("you sound so positive! that makes me happy =)");
  });
});
