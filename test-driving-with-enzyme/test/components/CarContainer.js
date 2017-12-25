import CarContainer from 'components/CarContainer';
import Car from 'components/Car';

describe('CarContainer', () => {
  let wrapper;

  describe('shallow rendered component', () => {
    beforeEach(() => {
      wrapper = shallow(<CarContainer speed={50} />);
    });

    describe('constructor', () => {
      it('should set an initial state', () => {
        expect(wrapper.state()).toEqual({
          distanceTraveled: 0
        });
      });
    });

    describe('render', () => {
      it('should render an Car component', () => {
        expect(wrapper.find(Car)).toBePresent();
      });

      it('should render an Car component with the specific props', () => {
        let carComponent = wrapper.find(Car);
        expect(carComponent.props()).toEqual({
          distanceTraveled: 0,
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/TeamTimeCar.com-BTTF_DeLorean_Time_Machine-OtoGodfrey.com-JMortonPhoto.com-07.jpg',
          manufacturer: 'DeLorean Motor Company',
          model: 'DeLorean DMC-12',
          year: 1981
        });
      });
    });
  });

  describe('full DOM rendered component', () => {
    let component, fakeIntervalId;

    describe('componentDidMount', () => {
      beforeEach(() => {
        fakeIntervalId = 1234;
        spyOn(CarContainer.prototype, 'componentDidMount').and.callThrough();
        spyOn(global, 'setInterval').and.returnValue(fakeIntervalId);
        wrapper = mount(<CarContainer speed={50} />);
      });

      it('should be invoked when the component mounts', () => {
        expect(CarContainer.prototype.componentDidMount).toHaveBeenCalled();
      });

      it('should invoke setInterval with a callback every second', () => {
        expect(setInterval).toHaveBeenCalledWith(jasmine.any(Function), 1000);
      });

      it('should invoke setInterval with a callback that updates distanceTraveled based on speed', () => {
        let callbackFunction = setInterval.calls.mostRecent().args[0];
        callbackFunction();
        expect(wrapper.state().distanceTraveled).toEqual(50);

        wrapper.setProps({ speed: 75 });
        callbackFunction();
        expect(wrapper.state().distanceTraveled).toEqual(125);
      });

      it('should set an intervalId on its state', () => {
        expect(wrapper.state().intervalId).toEqual(fakeIntervalId);
      });
    });

    describe('componentWillUnmount', () => {
      let intervalId;

      beforeEach(() => {
        spyOn(CarContainer.prototype, 'componentWillUnmount').and.callThrough();
        spyOn(global, 'clearInterval').and.callThrough();
        wrapper = mount(<CarContainer speed={50} />);
        intervalId = wrapper.state().intervalId;
        wrapper.unmount();
      });

      it('should be called when the component unmounts', () => {
        expect(CarContainer.prototype.componentWillUnmount).toHaveBeenCalled();
      });

      it('should clear the interval', () => {
        expect(clearInterval).toHaveBeenCalledWith(intervalId);
      });
    });
  });
});
