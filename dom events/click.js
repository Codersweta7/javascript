
const btn=document.querySelectorAll("button");
const btn1=document.getElementById("b");
const btn2=document.getElementById("c");
const btn3=document.getElementById("d");
    console.log(btn.length);

btn.forEach(button => {
    console.log(this.textContent);
        
    });
btn.forEach(button=>{
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget.textContent);
        console.log(e.target);
        e.target.style.backgroundColor="yellow";
        e.target.style.color="#333";
        

    });
   
})
btn.forEach(button=>{
button.addEventListener("click",(e)=>{
    e.target.style.backgroundColor="black";
    e.target.style.color="#fff";
})
});