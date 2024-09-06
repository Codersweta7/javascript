let array1=["item1","item2"];
 array1.push("item4")
 array1.pop()
//console.log(array1);
//cloning
// will use slice method.
//let array2=array1.slice(0);//gives a new array
//console.log(array2);
//other ways to create an new array
let array2=[...array1]
//console.log(array2);
//spread operator.
//now concat operation;
array2=array1.slice(0).concat("item3","item4");
//console.log(array2);

let fruits=["a","b","p","g","pa"];
for(let i=0;i<=fruits.length-1;i++)
  {  console.log(fruits[i].toUpperCase());//parantheses after toUppercase is necessary becoz its a method 

  }
  