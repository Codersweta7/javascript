function myPromisse(){
    return new Promise((resolve,reject)=>{
const value=true;
setTimeout(()=>{
    if(value){
        resolve();
    }
    else{
        reject();
    }
},2000)
    })
//to return after 2 seconds we will use setTimeOut function
}
myPromisse()
    .then(()=>console.log("resolved"))
    .catch(()=>console.log("rejected"))
