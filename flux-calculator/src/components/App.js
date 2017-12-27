import React from 'react';
import CalculatorDisplayContainer from './CalculatorDisplayContainer';
import CalculatorButtonsContainer from './CalculatorButtonsContainer';

const App = props => {
  return (
    <div className="row app">
      <div className="small-6 small-centered columns">
        <CalculatorDisplayContainer />
        <CalculatorButtonsContainer />
      </div>
    </div>
  );
};

export default App;
