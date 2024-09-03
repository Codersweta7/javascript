// characterization of datatype is in 2 parts
//primitive =>call by value (changes in copy) =>7 types : string ,num , bool,null , undef, symbol , bigint
const id= Symbol('123');
const anotherId =Symbol('123');
console.log(id===anotherId);
console.log(typeof id) ;
// big int case write n im last
const BigInt = 98658457653565n
//non primitive =>call by refrence 
// arrray,objects,functions
const cartoon = ["chota bheem","motupatlu","ninja hathori","dora the explorer ", "titoo"];
let myInfo ={
    name: "sweta",
    rollNo : 86789,
    age :19,
}
const myfunction = function(){
    console.log("Hello_sweta");
}
console.log(typeof myInfo); //data type object.
console.log(typeof myfunction); //data type function.