var a=25;
var a=30;//Redeclaration
a=35;//reassignment

console.log("var: ",a);//35

let b=25;
b=35//Reassignment

//let b=30; SyntaxError

console.log("let: ",b);

const PI=3.14;

//const PI; SyntaxError

//const PI=22/7; SyntaxError

//PI=22/7;  TypeError

console.log("const: ",PI);

let city;

console.log(city);//undefined
