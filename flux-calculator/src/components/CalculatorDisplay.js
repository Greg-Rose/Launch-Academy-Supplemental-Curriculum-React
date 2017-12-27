import React from 'react';

const CalculatorDisplay = props => {
  return (
    <div className="row calculator-display">
      <h1>{props.displayedNumber}</h1>
    </div>
  );
};

export default CalculatorDisplay;
