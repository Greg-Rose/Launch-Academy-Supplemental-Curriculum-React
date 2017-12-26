import QuestionsList from 'components/QuestionsList';
import Question from 'components/Question';

describe('QuestionsList', () => {
  let wrapper;

  describe('shallow rendered component', () => {
    beforeEach(() => {
      wrapper = shallow(<QuestionsList />);
    });

    describe('constructor', () => {
      it('should set an initial state', () => {
        expect(wrapper.state()).toEqual({
          questions: [],
          selectedQuestion: null
        });
      });
    });
  });

  describe('full DOM rendered component', () => {
    let component, questionsData;

    describe('componentDidMount', () => {
      beforeEach(() => {
        let questionsData = require('../../src/constants/data');
        spyOn(QuestionsList.prototype, 'componentDidMount').and.callThrough();
        wrapper = mount(<QuestionsList />);
      });

      it('should be invoked when the component mounts', () => {
        expect(QuestionsList.prototype.componentDidMount).toHaveBeenCalled();
      });

      it('should set questions on its state', () => {
        expect(wrapper.state().questions).toEqual(questionsData);
      });

      describe('render', () => {
        it('should render a Question component', () => {
          expect(wrapper.find(Question)).toBePresent();
        });

        it('should render an Question component with the specific props', () => {
          let questionComponent = wrapper.find(Question);
          expect(questionComponent.props()).toEqual({
            key: 1,
            question: questionsData[0],
            className: undefined,
            handleQuestionSelect: () => {},
          });
        });
      });
    });
  });
});
