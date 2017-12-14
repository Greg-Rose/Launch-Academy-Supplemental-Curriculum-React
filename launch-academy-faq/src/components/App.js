import React from 'react';
import QuestionsList from './QuestionsList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>We're Here to help</h1>

        <QuestionsList />
      </div>
    )
  }
}

export default App;
