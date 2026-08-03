let data;
console.log(data, "-",typeof data);//undefined (Variable is not initialized)

data=25;
console.log(data, "-",typeof data);//number

data="Hello";
console.log(data, "-",typeof data);//String

data=false;
console.log(data, "-",typeof data);//boolean

data=null;//Intentionally empty value assigned by programmer.
console.log(data, "-",typeof data);//typeof returns "object" due to a historical bug

