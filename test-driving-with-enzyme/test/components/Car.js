import Car from 'components/Car';

describe('Car', () => {
  let distanceTraveled,
      image,
      manufacturer,
      model,
      props,
      year,
      wrapper;

  describe('shallow rendered component', () => {
    beforeEach(() => {
      distanceTraveled = 1000;
      image = 'https://upload.wikimedia.org/wikipedia/commons/2/28/TeamTimeCar.com-BTTF_DeLorean_Time_Machine-OtoGodfrey.com-JMortonPhoto.com-07.jpg';
      manufacturer = 'DeLorean Motor Company';
      model = 'DeLorean DMC-12';
      year = 1981;
      props = {
        distanceTraveled,
        image,
        manufacturer,
        model,
        year
      };

      wrapper = shallow(<Car {...props} />);
    });

    describe('render', () => {
      it('should render the model of the car', () => {
        expect(wrapper.find('h1').text()).toEqual(model);
      });

      it('should render the image of the car', () => {
        expect(wrapper.find('img').props()).toEqual({
          src: image,
          width: '450',
          height: '300'
        });
      });

      it('should render the manufacturer of the car', () => {
        let h2Wrapper = wrapper.find('h2');
        expect(h2Wrapper.someWhere(node => node.text() === `Manufacturer: ${manufacturer}`)).toEqual(true);
      });

      it('should render the year of the car', () => {
        let h2Wrapper = wrapper.find('h2');
        expect(h2Wrapper.someWhere(node => node.text() === `Year: ${year}`)).toEqual(true);
      });

      it('should render the distance traveled', () => {
        let h2Wrapper = wrapper.find('h2');
        expect(h2Wrapper.someWhere(node => node.text() === `Distance Traveled: ${distanceTraveled} meters`)).toEqual(true);
      });
    });
  });
});
