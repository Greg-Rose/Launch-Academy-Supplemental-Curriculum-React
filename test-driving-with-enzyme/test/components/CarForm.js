import CarForm from 'components/CarForm';

describe('CarForm', () => {
  let onInputChange,
      speed,
      wrapper;

  describe('shallow rendered component', () => {
    beforeEach(() => {
      speed = 50;
      onInputChange = jasmine.createSpy('onInputChange');

      wrapper = shallow(
        <CarForm
          speed={speed}
          onInputChange={onInputChange}
        />
      );
    });

    describe('render', () => {
      it('should render an input field', () => {
        expect(wrapper.find('input')).toBePresent();
      });

      it('should render an input field with specific props', () => {
        let input = wrapper.find('input');
        expect(input.props()).toEqual({
          onChange: onInputChange,
          type: 'range',
          value: speed
        });
      });

      it('should invoke OnInputChange when the input changes', () => {
        let input = wrapper.find('input');
        let event = { target: { value: 75 } };
        input.simulate('change', event);
        expect(onInputChange).toHaveBeenCalledWith(event);
      });

      it('should render an h2 tag ', () => {
        expect(wrapper.find('h2')).toBePresent();
      });

      it('should display the speed based on the inputValue', () => {
        expect(wrapper.find('h2').text()).toEqual('Speed: 50 meters per second');

        wrapper.setProps({ speed: 0 });
        expect(wrapper.find('h2').text()).toEqual('Speed: 0 meters per second');

        wrapper.setProps({ speed: 20 });
        expect(wrapper.find('h2').text()).toEqual('Speed: 20 meters per second');
      });
    });
  });
});
