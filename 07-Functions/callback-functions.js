//Callback Function-A function being passed as an argument to another function.
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculate(10, 5, add));//15
console.log(calculate(10, 5, subtract));//5
console.log(calculate(10, 5, multiply));//50