import React from 'react';
import QuestionsList from './QuestionsList';

const App = props => {

  return(
    <div>
      <h1>We're Here to help</h1>

      <QuestionsList questionsData={props.data} />
    </div>
  )
}

export default App;
