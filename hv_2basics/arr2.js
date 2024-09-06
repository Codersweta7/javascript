const arr1=["a","b","c","d"]
arr1.push("p","q","r")
arr1.pop();
//console.log(arr1);//pushing and poping is possible in const using methods but 
//making changeas without any method gives err.
//while loop
let i=0;
while(i<arr1.length){
  arr1[i];
  i++;
}
//for of
const fruits =["apple","banana","guava"]
for (let fruit of fruits){
    //console.log(fruit);//first apple comes in index 0 sent to fruit variable ...and printed and so on.
}//any variable can be taken fruit is taken for understanding purpose
//for in loop=> gives index
let array1=["item1","item2"];
for(let index in array1){
    console.log(array1[index]);
}
//array destructing 
//converting array to seprate values.
const myarr = ["value1","value2"];
let var1=myarr[0];
let var2=myarr[1];
console.log(var1);
console.log(var2);
//prints seprate values of myarr1
let[myvar1,myvar2,...myNewarr]=myarr;
//myvar1="value changes";
console.log("value of myvar1",myvar1);
console.log("value of myvar2",myvar2);
console.log(myNewarr);

