let a=document.getElementById("btnz");
//a.onclick=function(){
//   alert("stop,wrong path")//= should not be present;
//};
a.addEventListener("click",()=>{ console.log("you click me");
    console.log(this);//gives window 
})
a.addEventListener("click",function myfun(){
    console.log("hello, this is button");
    console.log(this);
    console.dir(this);
});
let z=document.getElementById("b")
z.addEventListener("click",()=>{
    alert("thankyou");
});
let x=document.querySelector("#c");
x.addEventListener("click",()=>{
    alert("hi there, go ahead");
});
let y=document.getElementById("d");
y.addEventListener("click",()=>{
    alert("1 people found it helpfull");
})

//let j=document.getElementsByClassName("button")
//for(let k of j){
//k.addEventListener("click",()=>{
  //  console.log("hii,enjoy");
//})
//}
//event object
const firstbuton=document.querySelector("#b");
firstbuton.addEventListener("click",()=>{
    console.log("welcome");
})
//function hello(g){
  //  console.log(g);
//}
//hello({firstkey:"value1",secondkey:"value2"})

//let p =document.querySelector(".button");
//p.addEventListener("click",function (){
    //console.log(this.textContent);
    //console.dir(this.textContent);
//});
const p=document.querySelectorAll("button")//no need to place . or # for query selector all.
p.forEach((button)=>{
     button.addEventListener("click",(e)=>{
        console.log(e.currentTarget.textContent);
    })
});
