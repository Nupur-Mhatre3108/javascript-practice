// Example 1 - Stop loop when i reaches 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
/*Output:
1 
2
3
4
*/

// Example 2 - break after printing 4
for (let i = 1; i <= 10; i++) {
    console.log(i);

    if (i === 4) {
        break;
    }
}
/*Output:
1 
2
3
4
*/

// Example 3 - break in while loop
let number = 1;

while (number <= 10) {
    if (number === 6) {
        break;
    }

    console.log(number);
    number++;
}
/*
1
2
3
4
5
*/