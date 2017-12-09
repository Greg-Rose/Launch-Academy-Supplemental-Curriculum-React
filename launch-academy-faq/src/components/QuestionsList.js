import React from 'react';
import Question from './Question';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuestion: null
    };
  }

  render() {
    let selectQuestion = (id) => {
      if(this.state.selectedQuestion == id) {
        this.setState({ selectedQuestion: null });
      } else {
        this.setState({ selectedQuestion: id });
      }
    };

    let questions = this.props.questionsData.map(questionData => {
      let className;

      let questionSelect = () => {
        selectQuestion(questionData.id);
      };

      if (questionData.id == this.state.selectedQuestion) {
        className = "selected";
      }

      return (
        <Question
          key={questionData.id}
          question={questionData}
          className={className}
          handleQuestionSelect={questionSelect}
        />
      )
    });

    return (
      <div className="row">
        {questions}
      </div>
    )
  }
};

export default QuestionsList;
