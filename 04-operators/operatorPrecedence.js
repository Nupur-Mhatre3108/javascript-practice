// Multiplication before Addition
console.log(2 + 3 * 4); // 14

// Parentheses have highest precedence
console.log((2 + 3) * 4); // 20

// Left to Right Associativity
console.log(20 / 5 * 2); // 8

// Right to Left Associativity (**)
console.log(2 ** 3 ** 2); // 512

// Comparison after Arithmetic
console.log(2 + 3 * 4 > 10); // true

// Logical after Comparison
console.log(10 > 5 && 20 < 30); // true

// Unary before Arithmetic
let a = 5;
console.log(++a * 2 + 3); // 15