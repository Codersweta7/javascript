//promises
console.log("script start");
const bucket=["rice","vegetable","oil","salt"];

 const friedrice=new Promise((resolve,reject)=>{     //executer function.
    if(bucket.includes("vegetable") && bucket.includes("rice") && bucket.includes("salt")){
        resolve("Fried rice");}//resolve =>method
    else{
        reject("COuldn't do it");
    }
})
//consumption of promise;
friedrice.then((myfried)=>{//then function takes two argument when works during resolve while other 
    //part works when rejected.
    console.log("first promise");//caring when promise is resolved.
//(error)=>{console.log(error)});
})//=>if this is not commented we are caring both resolve and reject part.
.catch((error)=>{
    console.log(error);//chaining then and catch part.
    })
//promise is a browser feature .i.e, promise is resolved by browser
for(i=0;i<=10;i++){
    console.log(Math.random(),(i));
}
//when this loop ends then , promise result is displayed
console.log("script end ");