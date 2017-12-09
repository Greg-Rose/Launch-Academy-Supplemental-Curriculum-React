import React from 'react';
import QuestionsList from './QuestionsList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;

    return(
      <div>
        <h1>We're Here to help</h1>

        <QuestionsList questionsData={data} />
      </div>
    )
  }
}

export default App;
