'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const eph = new Person('Eph', 1988);
console.log(eph);

const matilda = new Person('Matilda', 2017);
console.log(matilda);

const jack = new Person('Jack', 1975);
console.log(jack);

console.log(eph instanceof Person);

Person.hey = function () {
  console.log('Hey there!');
  console.log(this);
};
Person.hey();

const account = {
  owner: 'Ephraim',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movement) {
    this.movements.push(movement);
  },
};

console.log(account.latest);
account.latest = 450;
console.log(account.latest);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey!');
    console.log(this);
  }
}

const ephCl = new PersonCl('Ephraim S.', 1988);
console.log(ephCl);
console.log(ephCl.age);

const walter = new PersonCl('Walter White', 1969);
console.log(walter);

PersonCl.hey();
walter.hey();
