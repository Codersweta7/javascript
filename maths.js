const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.89921
console.log(otherNumber.toPrecision(5));

const hundreds =100000
console.log(hundreds.toLocaleString('en-IN'));
//*********************************************************************************************
console.log(Math);//object
console.log(Math.abs(-2));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.8));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());//gives values b/w 0 and 1
console.log((Math.random()*10)+1);//1 is added to get a value above 0
console.log(Math.floor(Math.random()*10)+1);

const min =10;
const max = 20;
console.log(Math.floor(Math.random()+ max -min+1)+min)// max-min for a  range ,at end +min to get value between 10 & 20.


