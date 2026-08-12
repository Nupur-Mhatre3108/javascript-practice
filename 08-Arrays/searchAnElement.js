let numbers=[10,20,30,40,50,60];
let target=22;
let found=false;
for(let i=0;i<numbers.length;i++){
  if(numbers[i]==target){
    console.log("Target found");
    found=true;
  }
}
if(found==false){
  console.log("Target not found")
}