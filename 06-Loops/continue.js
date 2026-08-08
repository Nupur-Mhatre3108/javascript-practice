// Example 1 - Skip a Specific Number
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
/*
1
2
4
5
*/

// Example 2 - Print Only Odd Numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}
/*
1
3
5
7
9
*/


// Example 3 - Skip an Iteration
for (let i = 1; i <= 5; i++) {
    console.log(i);

    if (i === 3) {
        continue;
    }

    console.log("Hello");
}
/*
1
Hello
2
Hello
3
4
Hello
5
Hello
*/
