//blockk scope vs function scope 
//let and const are block scope =>let or const are not accesible in block.
{
const fname="sweta";
//console.log(fname);
}
 
{
    const fname ="hema";
    //console.log(fname);
}//in case of var content can be accessed otside of scope.
{
    var fname="sweta";
    //console.log(fname);//sweta
}
{
   // console.log(fname);//sweta
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//default parameter
function add2nos(a,b=0)
    //if (b==="undefine")//earlier approach
    //b=1;

    {
        return a+b;

    }
const ans =add2nos(4,8);
//console.log(ans);//since we gave b=8 so 4+8;
//if b is not given any value then b=0';
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//rest parameter
function myFunc(a,b,...c){
   // console.log(`a is ${a}`);
   // console.log(`b is ${b}`)
   // console.log(`c is `,c)

}
myFunc(3,4,5,6,7,8);
//using rest parameter we can assign 5,6,7,8 in the form of array to c
//before(c thee should be 3 dots only.)
function addAll(...numbers){
    let total=0;
    for(let number of numbers){
        total=total+number;
    }
    return total;
}
const ans1 = addAll(1,2,3,4,5,6,7,8,9);
//console.log(ans1);
//parameter destructuring;

//object
//react

//const person={
//    firstName:"sweta",
 //   gender:"female"
//}
function printDetails(firstName,gender)
{
   // console.log(firstName);
  //  console.log(gender);
}
printDetails('sweta',"female");
//##############################################################
//Callbaack function
function myfun2(){
   // console.log("smart girl");
}

function myfun(a){//
  // console.log(a);
   //console.log("sweta");

}
myfun(myfun2());
//4$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//passing a function inside other function.
function myfun1(name){
    console.log("inside myfun");
    console.log(`my name is ${name}`)
}
function myfun3(callback){
    console.log("hello there");
    callback("sweta");// the function which is passed will be called.

}
myfun3(myfun1);
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//function returning function
function fun(){
    return "a";
}
const an = fun();
console.log(an);
