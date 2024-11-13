const question =[{
  'que':'which is a markup language??',
  'a':'html',
  'b':'css',
  'c':'javascript',
'd' :'java',
'correct':'a'
},
{'que':'what is full form of css?',
  'a':'cascading style sheet',
  'b':'constructing style sheet ',
  'c':'contain styles sheats',
'd' :'none of the above',
'correct':'a'
},
{
    'que':'what is full form of DOM?',
  'a':'distructing object module',
  'b':'destructuring objectd of module',
  'c':'document object model',
'd' :'none of the above',
'correct':'c'
}
]
let index=0;
let total=question.length;
let correct=0, wrong=0;
const quesBox=document.getElementById("quesBox");
const optionInput=document.querySelectorAll('.options');
const loadQuestion = ()=>{
  getAnswer()
  if(index==total){
   return endQuiz()
  }
  reset();
    const data=question[index]
    console.log(data);
    quesBox.innerText=`${index=1.} ${data.que}`;
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}
loadQuestion();

function submitQuiz(){
  const data=question[index];
  const ans=getAnswer()
  if(ans===data.correct){
    correct+=1;
  }
  else{
    wrong+=1;
  }
  index++;
  loadQuestion();
  return;
}




const getAnswer=()=>{
  optionInput.forEach((input)=> {
    if(input.checked){
      return input.value;
    }
    });
  }
  const reset=()=>{
    optionInput.forEach((input)=>{
      input.checked=false;
    })
  }
const endQuiz=()=>{
  document.getElementById("box").innerHTML=`
  Thankyou for playing!!
  <h2>${correct}/${total}are correct
  </h2>`
}

  loadQuestion();
  
  
 
