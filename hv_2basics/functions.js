function String(){
    /////console.log("happy bday sweta");
    return(2+4);
}
String();//calling is necessary .
//console.log(String());

function sumof2nos(n1,n2){
    return n1+n2;
}
let returnedValue=sumof2nos(4,5);
//console.log(sumof2nos());//works as typeof =>gives NaN
//console.log(returnedValue);//adds and give results

function findTarget(array, target){
    for(let i=0;i<array.length;i++){
        if (array[i]===target){
            return i;
        }

    }
    return -1;
}

const myArray = [1,3,8,90]
const ans =findTarget(myArray ,4);
//console.log(ans);
//********************************************************************************************************
//function expression ,
const sing=function (){
   // console.log("happy bday");
}
sing();
//remove the function name and call it with const.

//***************************************************************
//arrow function
//remove function and place a forward arrow in function expression
const singh=()=>{
   // console.log("sing happy birthday");
}
singh();
const isEven=(number)=>{
    return number%2==0
}
//console.log(isEven(6));
const firstChar1=(anystring)=>
{return anystring[0];}
//console.log(firstChar1("sweta"));
//*************************************************************************** */
//hoisting 
hello();

function hello(){
    console.log('hello world') 
}
//is allowed during pure function formationi.e, function declarattion
//not allowed in function expression
//*****************************************************************************************
//function inside function
const app=() => {
    const fun= () =>{
        console.log("hello");
    }
    console.log("inside app");
    fun();
}
app();
//********************************************************************************************
//lexical scope
function myApp(){
    const myVar="value1";//in string 
    function myfun(){
        const myVar=12;
        console.log("inside myfun",myVar);
    }
    myfun();
}
myApp();
//based on local and global scope.
//if const myvar="value1" will be placed outside of myApp()then also we get output as=>
//iinside myVar value1.
