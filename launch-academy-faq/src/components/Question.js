import React from 'react';

const Question = props => {
  let question = props.question.question;
  let answer = props.question.answer;

  return (
    <div>
      <h4>{question}</h4>
    </div>
  )
};

export default Question;
