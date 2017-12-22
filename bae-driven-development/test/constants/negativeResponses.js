import negativeResponses from 'constants/negativeResponses';

describe('negativeResponses', () => {
  it('should be an Array', () => {
    expect(negativeResponses).toEqual(jasmine.any(Array));
  });

  it('should include the following negative responses', () => {
    expect(negativeResponses).toContain("ugh that sounds like THE WORST");
    expect(negativeResponses).toContain("I'm sorry to hear that");
  });
});
