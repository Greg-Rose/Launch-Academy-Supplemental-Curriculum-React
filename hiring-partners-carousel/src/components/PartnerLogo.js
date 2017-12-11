import React, { Component } from 'react';

class PartnerLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    let logoInterval = setInterval(() => {
      if (this.state.index >= this.props.logos.length - 1) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: this.state.index + 1 });
      }
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(logoInterval);
  }

  render() {
    let logos = this.props.logos;

    return (
     <div>
       <img src={logos[this.state.index]} alt="Partner Logo"></img>
     </div>
    )
  }
}

export default PartnerLogo;
