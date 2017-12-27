import React, { Component } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorStore from '../stores/CalculatorStore';

class CalculatorDisplayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedNumber: CalculatorStore.getDisplayedNumber()
    };
  }

  componentDidMount() {
    let callback = () => {
      this.setState({ displayedNumber: CalculatorStore.getDisplayedNumber() });
    };

    const removeCallback = CalculatorStore.addCallback(callback);
  }

  render() {
    return <CalculatorDisplay displayedNumber={this.state.displayedNumber} />;
  }
}

export default CalculatorDisplayContainer;
