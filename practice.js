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
let myFunction = (a, b) => a * b;