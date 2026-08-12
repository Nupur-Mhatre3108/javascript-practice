let numbers = [10, 20, 30, 40, 50];

console.log("Original array:", numbers);//[10,20,30,40,50]

// Accessing elements
console.log("First element:", numbers[0]);//10
console.log("Third element:", numbers[2]);//30

// Updating an element
numbers[1] = 25;
console.log("After updating:", numbers);//[10,25,30,40,50]

// Array length
console.log("Array length:", numbers.length);//5

// Traversing the array
console.log("Array elements:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Adding an element at the end
numbers.push(60);
console.log("After push:", numbers);//[10,25,30,40,50,60]

// Removing an element from the end
numbers.pop();
console.log("After pop:", numbers);//[10,25,30;40,50]

// Adding an element at the beginning
numbers.unshift(5);
console.log("After unshift:", numbers);//[5,10,25,30,40,50]

// Removing an element from the beginning
numbers.shift();
console.log("After shift:", numbers);//[10,25,30,40,50]

// Searching
console.log("Does 30 exist?", numbers.includes(30));//true
console.log("Index of 40:", numbers.indexOf(40));//3