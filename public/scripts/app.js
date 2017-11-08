'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person() {
    var fullName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    this.fullName = fullName;
    this.age = age;
  }

  _createClass(Person, [{
    key: 'getGreeting',
    value: function getGreeting() {
      // return 'Hello! ' + this.fullName;
      return 'Hi. I am ' + this.fullName + ' and I am ' + this.age + ' year(s) old.';
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      return 'Hi. I am ' + this.fullName + ' and I am ' + this.age + ' year(s) old.';
    }
  }]);

  return Person;
}();

var me = new Person('Fabiano Brancher', 34);
console.log(me.getGreeting());
console.log(me.getDescription());

var other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());
