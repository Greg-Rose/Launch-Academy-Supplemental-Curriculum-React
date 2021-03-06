// define your student class, here
class Student {
  constructor(name, grades) {
    this.name = name;
    this.grades = grades;
  }

  averageGrade() {
    let grades = this.grades;
    let sum = grades.reduce(function(a, b) {
      return a + b;
    }, 0);
    return sum / grades.length;
  }

  toString() {
    return `${this.name} has an average grade of ${this.averageGrade()}.`;
  }
}

// create a new student object
let james = new Student("James", [80, 75.3, 90, 88, 70]);

// print the average grade to the console
console.log(james.averageGrade());

// print the string representation of the student object
console.log(james.toString());
