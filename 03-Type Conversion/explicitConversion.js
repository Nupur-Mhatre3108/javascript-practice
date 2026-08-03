//Number()
console.log("Using Number() function...");
let value="Hello";
console.log(value,"-",Number(value));

value=null;
console.log(value,"-",Number(value));

value=undefined;
console.log(value,"-",Number(value));

value=true;
console.log(value,"-",Number(value));

value=false;
console.log(value,"-",Number(value));

value="";
console.log(value,"-",Number(value));

value=" ";
console.log(value,"-",Number(value));

//String()
console.log("Using  String() function...")
value=5;
let strVal=String(value);
console.log(value,"-",typeof strVal);

value=null;
strVal=String(value);
console.log(value,"-",typeof strVal);

value=undefined;
strVal=String(value);
console.log(value,"-",typeof strVal);

//Boolean()
console.log("Using Boolean() function...");
value=0;
console.log(value,'-',Boolean(value));

value=null;
console.log(value,'-',Boolean(value));

value="Hello";
console.log(value,'-',Boolean(value));

value=NaN;
console.log(value,'-',Boolean(value));

value=undefined;
console.log(value,'-',Boolean(value));

value=-5;
console.log(value,'-',Boolean(value));