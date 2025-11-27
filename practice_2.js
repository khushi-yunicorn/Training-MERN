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

