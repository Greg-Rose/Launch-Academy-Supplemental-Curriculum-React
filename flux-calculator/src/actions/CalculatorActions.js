import appDispatcher from '../dispatcher/appDispatcher';

const CalculatorActions = {
  pressClear() {
    let action = {
      type: 'PRESS_CLEAR'
    };
    appDispatcher.dispatch(action);
  },

  pressNumber(number) {
    let action = {
      type: 'PRESS_NUMBER',
      number
    };
    appDispatcher.dispatch(action);
  },

  pressOperator(operator) {
    let action = {
      type: 'PRESS_OPERATOR',
      operator
    };
    appDispatcher.dispatch(action);
  }
};

export default CalculatorActions;
