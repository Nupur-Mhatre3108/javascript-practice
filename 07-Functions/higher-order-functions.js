//A higher-order function can receive a function and use it.
function executeOperation(a, b, operation) {
    let result = operation(a, b);
    return result;
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

let result1 = executeOperation(10, 5, add);
let result2 = executeOperation(10, 5, multiply);

console.log(result1);//15
console.log(result2);//50