import React, { Component } from 'react';
import Button from './Button';

const CalculatorButtons = props => {
  let buttons = [
    { type: 'number', symbol: '7' },
    { type: 'number', symbol: '8' },
    { type: 'number', symbol: '9' },
    { type: 'operator', symbol: '÷' },
    { type: 'number', symbol: '4' },
    { type: 'number', symbol: '5' },
    { type: 'number', symbol: '6' },
    { type: 'operator', symbol: '×' },
    { type: 'number', symbol: '1' },
    { type: 'number', symbol: '2' },
    { type: 'number', symbol: '3' },
    { type: 'operator', symbol: '-' },
    { type: 'number', symbol: '0' },
    { type: 'clear', symbol: 'C' },
    { type: 'operator', symbol: '=' },
    { type: 'operator', symbol: '+' }
  ];

  let buttonComponentElements = buttons.map(button => {
    const { type, size, symbol } = button;
    let onClick;
    if (type === 'number') {
      onClick = () => props.onNumberClick(symbol);
    } else if (type === 'operator') {
      onClick = () => props.onOperatorClick(symbol);
    } else {
      onClick = props.onClearClick;
    }

    return (
      <Button
        key={symbol}
        type={type}
        size={size}
        symbol={symbol}
        onClick={onClick}
      />
    );
  });

  return (
    <div className="row calculator-buttons">
      {buttonComponentElements}
    </div>
  );
};

export default CalculatorButtons;
