import Felid from './Felid';

class HouseCat extends Felid {
  constructor(name, favoriteFood, ownerName) {
    super(name, favoriteFood);
    this.ownerName = ownerName;
  }

  huntForFood() {
    return `Goes to kitchen, knocks over bowl containing ${this.favoriteFood} and eats it from the floor`;
  }

  showAffectionToOwner() {
    return `Brings dead mouse to ${this.ownerName}`;
  }
}

export default HouseCat;
