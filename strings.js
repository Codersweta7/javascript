const name="sweta";
const repoCount=6
//string concatenation operation
console.log(`hello my name id ${name} 'and my repocount is ${repoCount}`);
console.log(name[0]);
console.log(name.__proto__);
console.log(name.length);

console.log(name.charAt(2));
console.log(name.indexOf("t"));
const newString= name.substring(0,3)
console.log(newString);
let anotherString = name.slice(-8,4)
console.log(anotherString);

const newStringa = "  sweta  "
console.log(newStringa);
console.log(newStringa.trim());


const url = "https://sweta.pandey.com/hello/world"
console.log(url.replace("hello" ,"-"))
console.log(url.includes('welcome'));
// whether welcome is present or not.
console.log(name.split('w'));

