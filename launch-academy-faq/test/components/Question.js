import Question from 'components/Question';


describe('Question', () => {
  let questions = require('../../src/constants/data');

  let className,
      question,
      handleQuestionSelect,
      key,
      props,
      wrapper;

  describe('shallow rendered component', () => {
    beforeEach(() => {
      question = questions[0];
      className = undefined;
      key = question.id;
      handleQuestionSelect = () => {};
      props = {
        question,
        className,
        key,
        handleQuestionSelect
      };

      wrapper = shallow(<Question {...props} />);
    });

    describe('render', () => {
      it('should render the question', () => {
        expect(wrapper.find('h6').text()).toEqual(question.question);
      });

      it('should render the answer to the question', () => {
        let pWrapper = wrapper.find('p');
        expect(pWrapper.someWhere(node => node.text() === question.answer)).toEqual(true);
      });
    });
  });
});
