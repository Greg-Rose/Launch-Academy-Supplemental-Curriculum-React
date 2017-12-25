import App from 'components/App';
import CarContainer from 'components/CarContainer';
import CarForm from 'components/CarForm';

describe('App', () => {
  let wrapper, component;

  describe('shallow rendered component', () => {
    beforeEach(() => {
      spyOn(App.prototype, 'handleInputChange').and.callThrough();
      wrapper = shallow(<App />);
    });

    describe('constructor', () => {
      it('should set an initial state', () => {
        expect(wrapper.state()).toEqual({
          speed: 50
        });
      });
    });

    describe('render', () => {
      it('should render an CarContainer component', () => {
        expect(wrapper.find(CarContainer)).toBePresent();
      });

      it('should render a CarContainer component with the speed specified in the state', () => {
        let carContainerWrapper = wrapper.find(CarContainer);
        expect(carContainerWrapper.props()).toEqual({
          speed: 50
        });

        wrapper.setState({ speed: 60 });
        carContainerWrapper = wrapper.find(CarContainer);
        expect(carContainerWrapper.props()).toEqual({
          speed: 60
        });
      });

      it('should render a CarForm component with the speed specified in the state', () => {
        let carFormWrapper = wrapper.find(CarForm);
        expect(carFormWrapper.props()).toEqual({
          speed: 50,
          onInputChange: jasmine.any(Function)
        });

        wrapper.setState({ speed: 60 });
        carFormWrapper = wrapper.find(CarForm);
        expect(carFormWrapper.props()).toEqual({
          speed: 60,
          onInputChange: jasmine.any(Function)
        });
      });
    });

    describe('handleInputChange', () => {
      beforeEach(() => {
        let carFormWrapper = wrapper.find(CarForm);
        let event = { target: { value: '70' } };
        carFormWrapper.props().onInputChange(event);
      });

      it('should be called when the carForm onInputChange function is invoked', () => {
        expect(App.prototype.handleInputChange).toHaveBeenCalled();
      });

      it('should update the speed of the state based on the event object', () => {
        expect(wrapper.state().speed).toBe(70);
      });
    });

  });

});
