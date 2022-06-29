
var randomNumber1, randomNumber2;
randomNumber1=Math.floor(Math.random() * 6) + 1;
randomNumber2=Math.floor(Math.random() * 6) + 1;

let randomImage_1="images"+"/dice"+randomNumber1+".png";
let randomImage_2="images"+"/dice"+randomNumber2+".png";

var firstImage=document.querySelectorAll('img')[0];
firstImage.setAttribute("src", randomImage_1);
var secondImage=document.querySelectorAll('img')[1];
secondImage.setAttribute("src", randomImage_2);
DisplayWinner();

function DisplayWinner(){

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins";
  }
   else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 Wins";
  }
   else{
    document.querySelector("h1").textContent="Draw";
  }
}

//function
function refresh(){
    window.location.reload();
}
