// Example 1 - Basic Nested Loop
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }

}
/*Output:
11
12
13
21
22
23
31
32
33
*/

// Example 2 - Fixed Inner Loop
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 2; j++) {
        console.log("1");
    }

}
/*Output:
1
1
1
1
1
1
*/

// Example 3 - Inner Loop Depends on Outer Loop
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= i; j++) {
        console.log(i, j);
    }

}
/*
11
21
22
31
32
33
*/