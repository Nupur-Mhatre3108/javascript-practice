// If either operand is a string and '+' is used,
// JavaScript performs string concatenation.
console.log("5"+10);//510

// With '-', '*', and '/',
// numeric strings are converted into numbers.

console.log("5"*2);//10

console.log("5"-2);//3

console.log("10"/2);//5

// JavaScript automatically converts:
// true  -> 1
// false -> 0
// Non-numeric string -> NaN (Not a Number)
console.log("5"-true);//4

console.log("5"*false);//0

console.log("Hello"*5);//NaN