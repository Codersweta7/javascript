// // stack(primitive) and heap(non-primitive)
// //in stack there is call  by value
// // in heap there is call by refrence.
// let myyoutube ="xyz.com";
// let anotheryoutubename=myyoutube;
// anotheryoutubename="abc.com";

// console.log(myyoutube);
// console.log(anotheryoutubename);

let user0ne ={
    email: "user@gmail.com",
    upi : "user@gy"
}


let usertwo ={
    email: "hello@gmail.com",
    upi: "heello@gy",
}
usertwo =user0ne;
console.log(user0ne);
console.log(usertwo);