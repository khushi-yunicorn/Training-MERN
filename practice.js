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
