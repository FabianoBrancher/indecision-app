class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
<<<<<<< HEAD
    // return 'Hello! ' + this.fullName;
    return `Hi. I am ${this.fullName}!`;
=======
    return `Hi. I am ${this.name}!`;
>>>>>>> c1d7680fcf66b11afe5dec348d842b20ab48844f
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
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

<<<<<<< HEAD
    if (this.hasMajor()){
=======
    if (this.hasMajor()) {
>>>>>>> c1d7680fcf66b11afe5dec348d842b20ab48844f
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

<<<<<<< HEAD
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
=======
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }

>>>>>>> c1d7680fcf66b11afe5dec348d842b20ab48844f
    return greeting;
  }
}

<<<<<<< HEAD
const me = new Student('Fabiano Brancher', 34, 'Computer Science');
const gustavo = new Traveller('Gustavo Brancher', 5, 'Maringá-PR, Brazil' );
console.log(gustavo.getGreeting());


// const other = new Student();
// console.log(other.hasMajor());
// console.log(other.getDescription());
=======
const me = new Traveler('Andrew Mead', 26, 'Philadelphia');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());
>>>>>>> c1d7680fcf66b11afe5dec348d842b20ab48844f
