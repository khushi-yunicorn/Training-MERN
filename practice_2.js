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