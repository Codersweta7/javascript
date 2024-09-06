let myDate =new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());//computr time & date
console.log(typeof myDate);//object
let myCreatedDate = new Date(2023,0,23)
let myCreateDate = new Date(2023,0,23,5,3)//month starts from 0.in indexing 
let myCreatDate = new Date("2023-01-14")//month starts from 1 during dash representation 



// console.log(myCreatedDate.toLocaleString());
// console.log(myCreateDate.toString());
// console.log(myCreatDate.toString());
///timestamp
let timestamp=Date.now();
//console.log(timestamp);//time in millisecond ;

console.log(Date.now());// to get time
let newDate = new Date()
console.log(newDate.getMonth())

 console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))
// console.log(Date.toString());
// console.log(myDate.toString());
// console.log(myDate.toString());