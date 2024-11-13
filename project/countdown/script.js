 const endDate="17 november 2024 10:00 PM"   //yeh dynamic h jo date yha pe dalenge wha reflect hoga
 const inputs=document.querySelectorAll("input")
document.getElementById('end-date').innerText=endDate;

function clock(){
    const end=new Date(endDate)  //us time pe kya time ho rha hoga
     const now =new Date()
     const diff=(end-now)/1000;
     //convert into day
     inputs[0].value=Math.floor(diff/3600/24);
     //convert into hour
     inputs[1].value=Math.floor(diff/3600)%24;
     //calculate minutes
     inputs[2].value=Math.floor(diff/60)%60
     inputs[3].value=Math.floor(diff)%60
   }   //abhi kya time ho rha h
    
clock();
// 1 day=24hrs
//1 hr=60 mins
//1 min=60 sec
//60 min=3600
setInterval(()=>{
 clock(),1000
}

)
