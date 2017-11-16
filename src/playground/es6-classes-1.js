class Person {
  constructor(fullName = 'Anonymous', age = 0) {
    this.fullName = fullName;
    this.age = age;
  }
  getGreeting() {
    // return 'Hello! ' + this.fullName;
    return `Hi. I am ${this.fullName}!`;
  }
  getDescription() {
    return `Hi. I am ${this.fullName} and I am ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()){
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.location) {
      greeting += ` I'm visiting from ${this.location}.`;
    }
    return greeting;
  }
}

const me = new Student('Fabiano Brancher', 34, 'Computer Science');
const gustavo = new Traveller('Gustavo Brancher', 5, 'Maringá-PR, Brazil' );
console.log(gustavo.getGreeting());


// const other = new Student();
// console.log(other.hasMajor());
// console.log(other.getDescription());
