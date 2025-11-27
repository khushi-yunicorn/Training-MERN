let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let data = "Khushi";
console.log(text.length);

console.log(text.charAt(3));

console.log(text.concat(" "+data));

console.log(text.at(7));

console.log(text.slice(4, 9));

console.log(text.substring(0, 10));

console.log(data.toUpperCase());

console.log(text.toLowerCase());

console.log(text.trim());

console.log(text.replace("ABC", "XYZ"));

console.log(text.split(""));


// FUNCTIONS PARAMETERS
function myFunction(x, y = 10) {
  return x + y;
}
myFunction(5);

// Function Expression
const x = function (a, b) {return a * b};

//Function Arrows
let arrowFun = (a, b) => a * b;

// Objects
// Create an Object
const person = {
  firstName: "Khushi",
  lastName: "Jaiswal",
  age: 30,
  role: "Junior Full Stack Developer"
};

//Add property
person.gender = "F";
console.log(person);

// Update property
person.age = 22;
console.log(person);

// Delete property
delete person.age;
console.log(person);

// Arrayss
// 1. Using square brackets
let fruits = ["apple", "banana", "orange"];

// 2. Using the Array constructor
let numbers = new Array(1, 2, 3, 4);

console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "orange"

fruits.push("mango");   // add to end
fruits.unshift("grape"); // add to beginning
fruits.pop();    // removes last
fruits.shift();  // removes first
fruits.indexOf("banana");   // returns index
fruits.includes("apple");   // true or false


// Loopings

//For loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//For-of
for (const fruit of fruits) {
  console.log(fruit);
}

// For-Each
fruits.forEach(item => console.log(item));

// Array Transformations

// map
let doubled = [1, 2, 3].map(n => n * 2); 
// [2, 4, 6]

//Filter 
let evens = [1, 2, 3, 4].filter(n => n % 2 === 0);
// [2, 4]

// Reduce
let sum = [1, 2, 3].reduce((total, n) => total + n, 0);
// 6

// CLASS
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p1 = new Person("Alice", 25);
p1.greet();

// Class Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

const d = new Dog("Max", "Labrador");
d.speak();

// Getter and Setter
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set widthValue(value) {
    this.width = value;
  }
}

const r = new Rectangle(5, 10);
console.log(r.area); // 50

// Private
class Bank {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const b = new Bank();
b.deposit(100);
console.log(b.getBalance()); // 100

// Promises & Async/Await

// Create Promise
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
    // reject("Error!");
  }, 1000);
});

myPromise
  .then(result => {
    console.log(result); // "Success!"
  })
  .catch(error => {
    console.log(error);
  });

// Async and Await
async function greet() {
  return "Hello!";
}
greet().then(console.log); // Always return a promise


// Await
function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
}

async function showData() {
  const result = await getData(); 
  console.log(result);
}
showData();


// Iterators

const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Generators
function* counter() {
  yield 1;
  yield 2;
  yield 3;
}

const it = counter();

console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }