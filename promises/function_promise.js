function ricePromise(){
return new Promise((resolve,reject)=>{     //executer function.
    if(bucket.includes("vegetable") && bucket.includes("rice") && bucket.includes("salt")){
        resolve("Fried rice");}//resolve =>method
    else{
        reject("COuldn't do it");
    }
})
}
ricePromise().then((myFriedRice)=>{
console.log("My fried rice is ready",myFriedRice);
})
.catch((error)=>
{console.log("couldnt make rice")});