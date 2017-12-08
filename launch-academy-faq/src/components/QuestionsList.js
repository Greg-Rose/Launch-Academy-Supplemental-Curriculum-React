import React from 'react';
import Question from './Question';

const QuestionsList = props => {

  let questions = props.questionsData.map(questionData => {
    return (
      <Question
        key={questionData.id}
        question={questionData}
      />
    )
  });

  return (
    <div>
      {questions}
    </div>
  )
};

export default QuestionsList;
