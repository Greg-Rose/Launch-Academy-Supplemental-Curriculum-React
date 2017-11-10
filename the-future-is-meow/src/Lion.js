import Felid from './Felid';

class Lion extends Felid {
  constructor(name, favoriteFood) {
    super(name, favoriteFood);
    this.cubs = [];
  }

  huntForFood(nameOfCub) {
    return `Goes over to the ${this.favoriteFood} killed by the lionesses and eats it`;
  }

  procreate(nameOfCub) {
    let newCub = new Lion(nameOfCub, this.favoriteFood);
    this.cubs.push(newCub);
    return `Nants ingonyama bagithi Baba\nSithi uhm ingonyama\n${newCub.name} is hoisted at the top of Pride Rock`;
  }

  namesOfCubs() {
    let namesOfCubs;
    if (this.cubs.length === 0) {
      namesOfCubs = `${this.name} has no cubs!`;
    } else if (this.cubs.length === 1) {
      namesOfCubs = this.cubs[0].name;
    } else {
      namesOfCubs = this.cubs.map(function(cub) {
        return cub.name;
      });
      namesOfCubs = namesOfCubs
        .slice(0, -1)
        .concat('and ' + namesOfCubs.slice(-1));
      namesOfCubs = namesOfCubs.join(', ');
    }

    return namesOfCubs;
  }
}

export default Lion;
