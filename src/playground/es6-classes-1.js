class Person {
  constructor(fullName = 'Anonymous', age = 0) {
    this.fullName = fullName;
    this.age = age;
  }
  getGreeting() {
    // return 'Hello! ' + this.fullName;
    return `Hi. I am ${this.fullName} and I am ${this.age} year(s) old.`;
  }
  getDescription() {
    return `Hi. I am ${this.fullName} and I am ${this.age} year(s) old.`;
  }
}

const me = new Person('Fabiano Brancher', 34);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());
