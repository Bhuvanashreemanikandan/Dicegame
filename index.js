var randomNumber1=Math.floor(Math.random()*6);
var randomNumber2=Math.floor(Math.random()*6);
var randomDice=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png",];
document.querySelector(".img1").setAttribute("src", randomDice[randomNumber1]);
document.querySelector(".img2").setAttribute("src", randomDice[randomNumber2]);
if (randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player1 Wins";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").textContent="Player2 Wins";
}
else{
  document.querySelector("h1").textContent="Draw!";
}
