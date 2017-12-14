import React from 'react';
import Question from './Question';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      selectedQuestion: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/questions')
      .then(response => {
        if(response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({questions: body});
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let selectQuestion = (id) => {
      if(this.state.selectedQuestion == id) {
        this.setState({ selectedQuestion: null });
      } else {
        this.setState({ selectedQuestion: id });
      }
    };

    let questions = this.state.questions.map(questionData => {
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
