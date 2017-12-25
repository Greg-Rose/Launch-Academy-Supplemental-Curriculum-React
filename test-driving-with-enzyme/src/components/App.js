import React from 'react';
import CarContainer from './CarContainer';
import CarForm from './CarForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 50
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let target = event.target;
    let value = parseInt(target.value);
    this.setState({speed: value});
  }

  render() {
    return (
      <div>
        <CarContainer speed={this.state.speed} />
        <CarForm
          speed={this.state.speed}
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
