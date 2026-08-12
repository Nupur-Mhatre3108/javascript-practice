let arr=[100,20,44,65,90];
let min=arr[0];
for(let i=0;i<arr.length;i++){
   if(arr[i]<min){
    min=arr[i];
   }
}
console.log(min);