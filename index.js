const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.querySelector("#question");
const formEl = document.querySelector("#form");
const inputEl = document.querySelector("#input");
const scoreEl = document.querySelector("#score");

const correctAns = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
  let score = 0;
}
scoreEl.innerText = `Score : ${score}`

questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;

formEl.addEventListener("submit", ()=> {
  const userAns = +inputEl.value;

  if(userAns === correctAns){
    score++;
    updateLocalStorage();
  }else{
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage(){
  localStorage.setItem("score", JSON.stringify(score))
}
