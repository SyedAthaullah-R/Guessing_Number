'use strict';
let ScretNumber = Math.trunc(Math.random() * 20) + 1;
let Score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);

if(!guess){
    document.querySelector('.message').textContent= " Please enter a number 😶‍🌫️"
}
else if(guess === ScretNumber){
    document.querySelector('.message').textContent = " 🤩You guessed the Correct Number!"
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = "40rem";
    document.querySelector('.number').textContent = ScretNumber;
    if(Score > highScore){
        highScore = Score;
        document.querySelector('.highscore').textContent = highScore;
    }
}
else if(guess !== ScretNumber){
   if(Score > 1) {document.querySelector('.message').textContent = guess > ScretNumber ? "↗️ Too High!" : " Too Low!";
    Score--;
    document.querySelector('.score').textContent = Score;}

else{
    document.querySelector('.message').textContent = '😢 You Lost the game'
    document.querySelector('.score').textContent = 0;
}}



});
document.querySelector('.again').addEventListener('click',function(){
    Score = 20;
    ScretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "Start Guessing...";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.guess').value = "";
    
});
