import appDispatcher from '../dispatcher/appDispatcher';

let callbacks = [];
let displayedNumber = '0';
let operatorWasLastButtonPressed = false;
let previouslySelectedOperator;
let total = 0;

let handlePressNumber = number => {
  if (displayedNumber === '0' || operatorWasLastButtonPressed) {
    displayedNumber = number;
  } else {
    displayedNumber += number;
  }

  operatorWasLastButtonPressed = false;
};

let handlePressOperator = operator => {
  let number = parseFloat(displayedNumber);

  if (!operatorWasLastButtonPressed) {
    switch (previouslySelectedOperator) {
      case '+':
        total += number;
        break;
      case '-':
        total -= number;
        break;
      case '÷':
        total /= number;
        break;
      case '×':
        total *= number;
        break;
      default:
        total = number;
    }
  }

  displayedNumber = total.toString();
  operatorWasLastButtonPressed = true;
  previouslySelectedOperator = operator;
};

let handlePressClear = () => {
  displayedNumber = '0';
  total = 0;
  operatorWasLastButtonPressed = false;
};

let handleAction = action => {
  switch (action.type) {
    case 'PRESS_NUMBER':
      handlePressNumber(action.number);
      callbacks.forEach(callback => callback());
      break;

    case 'PRESS_OPERATOR':
      handlePressOperator(action.operator);
      callbacks.forEach(callback => callback());
      break;

    case 'PRESS_CLEAR':
      handlePressClear();
      callbacks.forEach(callback => callback());
      break;

    default:
  }
};

appDispatcher.register(handleAction);

const CalculatorStore = {
  addCallback(newCallback) {
    callbacks = [...callbacks, newCallback];
    let removeCallback = () => {
      callbacks = callbacks.filter(callback => callback === newCallback);
    };
    return removeCallback;
  },

  getDisplayedNumber() {
    return displayedNumber;
  }
};

export default CalculatorStore;
