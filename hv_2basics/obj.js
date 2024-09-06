//objects
//for real world
//they store key value pairs , dont have index
const person={
    name:"Sweta",
    age:19

};
//console.log(person)
//console.log(typeof person);
//access
//console.log(person.name)//dot notation.
//we can also give array in object
 person1={
    name:"Sweta",
    "full nam":"sweta pandey",
    age:19,
    hobbies:["a","b","c"]

};
person1.gender="female";
//console.log(person1);
////console.log(person1["gender"]);
//console.log(person1["full nam"])//bracket notataion
person1["key"]="xyz123";//key is variable in this case while it is constant when we write using dot

//console.log(person1);
//for loop =>2 ways 
//1. for in 
//2. object.keys
for(key in person){
    console.log(key);
}
//for values
for(key in person){
    console.log(person[key]);//prints values of each key .
}