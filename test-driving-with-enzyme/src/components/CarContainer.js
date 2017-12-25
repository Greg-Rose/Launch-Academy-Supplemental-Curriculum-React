import React from 'react';
import Car from './Car';

class CarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distanceTraveled: 0
    };
  }

  componentDidMount() {
    let id = setInterval(() => {
      this.setState({
        distanceTraveled: this.state.distanceTraveled + this.props.speed
      });
    }, 1000);
    this.setState({intervalId: id});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div>
        <Car
          distanceTraveled={this.state.distanceTraveled}
          image='https://upload.wikimedia.org/wikipedia/commons/2/28/TeamTimeCar.com-BTTF_DeLorean_Time_Machine-OtoGodfrey.com-JMortonPhoto.com-07.jpg'
          manufacturer='DeLorean Motor Company'
          model='DeLorean DMC-12'
          year={1981}
        />
      </div>
    );
  }
}

export default CarContainer;
