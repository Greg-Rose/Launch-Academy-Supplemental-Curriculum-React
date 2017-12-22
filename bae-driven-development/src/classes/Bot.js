import PredeterminedResponse from 'classes/PredeterminedResponse';
import words from 'functions/words';
import countBy from 'functions/countBy';
import sample from 'functions/sample';
import negativeWords from 'constants/negativeWords';
import positiveWords from 'constants/positiveWords';
import negativeResponses from 'constants/negativeResponses';
import positiveResponses from 'constants/positiveResponses';

class Bot {
  constructor(name, user) {
    this.name = name;
    this.user = user;
    this.predeterminedResponses = [];
  }

  initialGreeting() {
    return `Hi ${this.user.fullName()}! I am your new BAE, ${this.name}. Can't wait to talk!`;
  }

  registerPredeterminedResponse(phrase, response) {
    let newPredeterminedResponse = new PredeterminedResponse(phrase, response, this);
    this.predeterminedResponses.push(newPredeterminedResponse);
  }

  respondToMessage(message) {
    let predetermined;
    this.predeterminedResponses.forEach((predeterminedResponse) => {
      if(message.includes(predeterminedResponse.phrase)) {
        predetermined = predeterminedResponse;
      }
    });
    if (predetermined != undefined) {
      return predetermined.response;
    } else {
      let wordsArr = words(message);
      let count = countBy(wordsArr);
      let negativeWordsCount = 0;
      let positiveWordsCount = 0;
      for (let key in count) {
        if (negativeWords.includes(key)) {
          negativeWordsCount++;
        } else if (positiveWords.includes(key)) {
          positiveWordsCount++;
        }
      }

      if(negativeWordsCount > positiveWordsCount) {
        return sample(negativeResponses);
      } else {
        return sample(positiveResponses);
      }
    }
  }
}
export default Bot;
