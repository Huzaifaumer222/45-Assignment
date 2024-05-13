// Tests for equality and inequality with strings
const animal1: string = "cat";
const animal2: string = "dog";

// Test 11: Is animal1 equal to "cat"? Prediction: True
console.log("Is animal1 equal to 'cat'? I predict True.");
console.log(animal1 == "cat"); // True

// Test 12: Is animal2 not equal to "cat"? Prediction: True
console.log("Is animal2 not equal to 'cat'? I predict True.");
console.log(animal2 != "cat"); // True

// Tests using the lower case function
const fruit: string = "Apple";

// Test 13: Is the lowercase of fruit equal to "apple"? Prediction: False
console.log("Is the lowercase of fruit equal to 'apple'? I predict False.");
console.log(fruit.toLowerCase() == "apple"); // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const number1: number = 5;
const number2: number = 10;

// Test 14: Is number1 less than number2? Prediction: True
console.log("Is number1 less than number2? I predict True.");
console.log(number1 < number2); // True

// Test 15: Is number1 greater than or equal to 5? Prediction: True
console.log("Is number1 greater than or equal to 5? I predict True.");
console.log(number1 >= 5); // True

// Tests using "and" and "or" operators
const sunny: boolean = true;
const warm: boolean = false;

// Test 16: Is it sunny and warm? Prediction: False
console.log("Is it sunny and warm? I predict False.");
console.log(sunny && warm); // False

// Test 17: Is it sunny or warm? Prediction: True
console.log("Is it sunny or warm? I predict True.");
console.log(sunny || warm); // True

// Test whether an item is in an array
const colors: string[] = ["red", "green", "blue"];

// Test 18: Is "yellow" in the colors array? Prediction: False
console.log("Is 'yellow' in the colors array? I predict False.");
console.log(colors.includes("yellow")); // False

// Test whether an item is not in an array
// Test 19: Is "green" not in the colors array? Prediction: False
console.log("Is 'green' not in the colors array? I predict False.");
console.log(!colors.includes("green")); // False
