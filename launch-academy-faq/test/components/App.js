import App from 'components/App';
import QuestionsList from 'components/QuestionsList';

describe('App', () => {
  let wrapper, component;

  describe('shallow rendered component', () => {
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    describe('render', () => {
      it('should render the title', () => {
        expect(wrapper.find('h1').text()).toEqual("We're Here to help");
      });

      it('should render an QuestionsList component', () => {
        expect(wrapper.find(QuestionsList)).toBePresent();
      });
    });
  });
});
