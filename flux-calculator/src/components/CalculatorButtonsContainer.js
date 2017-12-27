import React, { Component } from 'react';
import CalculatorButtons from './CalculatorButtons';
import CalculatorActions from '../actions/CalculatorActions';
import CalculatorStore from '../stores/CalculatorStore';

const CalculatorButtonsContainer = props => {
  return (
    <CalculatorButtons
      onClearClick={CalculatorActions.pressClear}
      onNumberClick={CalculatorActions.pressNumber}
      onOperatorClick={CalculatorActions.pressOperator}
    />
  );
};

export default CalculatorButtonsContainer;
