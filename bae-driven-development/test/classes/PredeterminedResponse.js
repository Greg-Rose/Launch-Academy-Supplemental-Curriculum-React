// WRITE TEST HERE
import Bot from 'classes/Bot';
import PredeterminedResponse from 'classes/PredeterminedResponse';
import User from 'classes/User';

describe('PredeterminedResponse', () => {
  let name, user, bot, phrase, response, predeterminedResponse;

  beforeEach(() => {
    name = 'Alessa';
    user = new User('Pablo', 'Ledesma');
    bot = new Bot(name, user);
    phrase = 'Ember is dead! React is the future';
    response = 'I totally agree!';
    predeterminedResponse = new PredeterminedResponse(phrase, response, bot);
  });

  describe('constructor', () => {
    it('should create a PredeterminedResponse object', () => {
      expect(predeterminedResponse).toEqual(jasmine.any(PredeterminedResponse));
    });

    it('should create an object with a phrase', () => {
      expect(predeterminedResponse.phrase).toEqual(phrase);
    });

    it('should create an object with a response', () => {
      expect(predeterminedResponse.response).toBe(response);
    });

    it('should create an object with bot', () => {
      expect(predeterminedResponse.bot).toEqual(jasmine.any(Bot));
    });
  });
});
