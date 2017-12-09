import React from 'react';

const Question = props => {
  let question = props.question.question;
  let answer = props.question.answer;
  let handleClick = () => {
    props.handleQuestionSelect();
  };
  let buttonIcon;
  if (props.className == "selected") {
    buttonIcon = "-";
  } else {
    buttonIcon = "+";
  }

  return (
    <div className="large-12 columns questions">
      <div className={"faq-btn " + props.className}  onClick={handleClick}>
        {buttonIcon}
      </div>
      <h6>{question}</h6>
      <p className={props.className}>{answer}</p>
      <hr></hr>
    </div>
  )
};

export default Question;
