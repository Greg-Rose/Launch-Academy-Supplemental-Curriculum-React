import negativeResponses from 'constants/negativeResponses';
import negativeWords from 'constants/negativeWords';
import positiveResponses from 'constants/positiveResponses';
import positiveWords from 'constants/positiveWords';
import Bot from 'classes/Bot';
import PredeterminedResponse from 'classes/PredeterminedResponse';
import User from 'classes/User';

describe('Bot', () => {
  let name, user, bot, phrase, response, initialGreeting;

  beforeEach(() => {
    name = 'Alessa';
    user = new User('Pablo', 'Ledesma');
    bot = new Bot(name, user);
    phrase = 'Ember is dead! React is the future';
    response = 'I totally agree!';
    initialGreeting = "Hi Pablo Ledesma! I am your new BAE, Alessa. Can't wait to talk!";
  });

  describe('constructor', () => {
    it('should create a Bot object', () => {
      expect(bot).toEqual(jasmine.any(Bot));
    });

    it('should create an object with a name', () => {
      expect(bot.name).toEqual(name);
    });

    it('should create an object with a user', () => {
      expect(bot.user).toBe(user);
    });

    it('should create an object with predetermined responses', () => {
      expect(bot.predeterminedResponses).toEqual(jasmine.any(Array));
    });
  });

  describe('initialGreeting', () => {
    it('should greet the user', () => {
      expect(bot.initialGreeting()).toBe(initialGreeting);
    });
  });

  describe('registerPredeterminedResponse', () => {
    it('should add a predeterminedResponse object to the predetermined responses', () => {
      bot.registerPredeterminedResponse(phrase, response);
      let firstPredeterminedResponse = bot.predeterminedResponses[0];
      expect(firstPredeterminedResponse).toEqual(jasmine.any(PredeterminedResponse));
      expect(firstPredeterminedResponse.phrase).toBe(phrase);
      expect(firstPredeterminedResponse.response).toBe(response);
      expect(firstPredeterminedResponse.bot).toBe(bot);
    });
  });

  describe('respondToMessage', () => {
    let overallPositiveMessage,
        overallNegativeMessage,
        overallNeutralMessage,
        messageContainingPhrase;

    beforeAll(() => {
      let [firstPositiveWord, secondPositiveWord] = positiveWords;
      let [firstNegativeWord, secondNegativeWord] = negativeWords;
      overallPositiveMessage = [firstPositiveWord, secondPositiveWord, firstNegativeWord].join(' ');
      overallNegativeMessage = [firstNegativeWord, secondNegativeWord, firstPositiveWord].join(' ');
      overallNeutralMessage = [firstNegativeWord, firstPositiveWord].join(' ');
      messageContainingPhrase = [firstNegativeWord, phrase, firstPositiveWord].join(' ');
    });

    beforeEach(() => {
      bot.registerPredeterminedResponse(phrase, response);
    });

    it('should respond with a random negative response for a message containing mostly negative words', () => {
      let botResponse = bot.respondToMessage(overallNegativeMessage);
      expect(negativeResponses).toContain(botResponse);
    });

    it('should respond with a random positive response for a message containing mostly positive words', () => {
      let botResponse = bot.respondToMessage(overallPositiveMessage);
      expect(positiveResponses).toContain(botResponse);
    });

    it('should respond with a random positive response for a neutral message', () => {
      let botResponse = bot.respondToMessage(overallNeutralMessage);
      expect(positiveResponses).toContain(botResponse);
    });

    it('should respond with a predetermined response for a message containing a phrase from a registered predeterminedResponse object', () => {
      let botResponse = bot.respondToMessage(messageContainingPhrase);
      expect(botResponse).toBe(response);
    });
  });
});
