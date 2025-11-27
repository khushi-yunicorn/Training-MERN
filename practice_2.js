try {
  // Code that might throw an error
  let x = y + 1; // y is not defined → error
} catch (error) {
  console.log("Error happened:", error.message);
} // Error happened: y is not defined

// TRY CATCH FINALLY
try {
  JSON.parse("{ bad json }");
} catch (err) {
  console.log("Invalid JSON");
} finally {
  console.log("Always runs");
}

// Manually Throw error
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (err) {
  console.log(err.message); // Cannot divide by zero
}

// CALLBACKS
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function afterGreeting() {
  console.log("Welcome!");
}

greet("Alice", afterGreeting);

// EVENT LOOP
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");  // Start End Timeout

//  DOM manipulation

// Select by ID
document.getElementById("title");

// Select by ClassName
document.getElementsByClassName("item");

// Select by tag
document.getElementsByTagName("div");

// Select Multiple
document.querySelectorAll("li");

// CHANGING CONTENT

// Change text
document.querySelector("#title").textContent = "Hello World";

// Change HTML
document.querySelector("#box").innerHTML = "<p>New Content</p>";

// Changing Styles
document.querySelector(".box").style.backgroundColor = "blue";
document.querySelector(".box").style.fontSize = "20px";

// Changing Attributes
document.querySelector("img").src = "image.jpg";
document.querySelector("a").href = "https://google.com";

// Adding & Removing Classes
const box = document.querySelector(".box");

box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("highlight"); // adds/removes

// Browser API

// Local Storage
localStorage.setItem("name", "John");
localStorage.getItem("name"); // "John"
localStorage.removeItem("name");

// Fetch API request
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data));


// Scopes

// Global Scope
let x = 10; // global

function show() {
  console.log(x); // 10
}
show();

// Funtion scope
function test() {
  let a = 20; // function scoped
  console.log(a);
}

test();
console.log(a); // ❌ Error: a is not defined

// Block Scope
{
  let b = 30;
}
console.log(b); // ❌ Error

// Lexical Scope
function outer() {
  let x = 10;

  function inner() {
    console.log(x); // can access x because inner is inside outer
  }

  inner();
}
outer();

// Closures
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

// Hoisting
console.log(a); 
var a = 10; //undefined

console.log(b);
let b = 20; // Reference Error

console.log(c);
const c = 30; // Reference error

// CALL
function greet(msg) {
  console.log(msg, this.name);
}

greet.call({name: "Alice"}, "Hello");
// Hello Alice

// Apply
greet.apply({name: "Bob"}, ["Hi"]);

// Bind
const greetBob = greet.bind({name: "Bob"}, "Hello");
greetBob();
// Hello Bob

// Array Destructor
const arr = [10, 20, 30];
const [a, , c1] = arr;

console.log(a, c1); // 10 30

// Rest Operator
const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]

// Spread Operatord
const arr1 = [1, 2];
const arr2 = [...arr1];