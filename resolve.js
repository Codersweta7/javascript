//promise resolve 

const myPromise=Promise.resolve(5);
Promise.resolve(5).then(value=>{
    console.log(value);
})
//.then ->returns a promise which can heelp to create promise chaining.
function promise(){
    return new Promise((resolve ,reject)=>{
        resolve("foo");
    })
}
.then(value=>{console.log(value)})
value=+Bar;
return value;})

.then(value=>{console.log(value)})
//promise chaining