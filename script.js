'use strict';
let ScretNumber, Score, highScore, audio1, audio2, audio3, playing;
highScore = 0;

function init(){
    ScretNumber = Math.trunc(Math.random() * 20) + 1;
    Score = 20;
    audio1 = document.getElementById("stage");
    audio2 = document.getElementById("winning");
    audio3 = document.getElementById("lossing")
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio1.currentTime = 0;
    audio2.currentTime = 0;
    audio3.currentTime = 0;
    playing = true; 
}
init();
document.querySelector('.check').addEventListener('click',function(){
    if(playing){
    audio1.play();
    let guess = Number(document.querySelector('.guess').value);

    if(!guess) document.querySelector('.message').textContent= " Please enter a number 😶‍🌫️"
    
    else if(guess === ScretNumber){
    document.querySelector('.message').textContent = " 🤩You guessed the Correct Number!"
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = "40rem";
    document.querySelector('.number').textContent = ScretNumber;
    audio3.play();
    audio1.pause();
    playing = false;
    if(Score > highScore){
        highScore = Score;
        document.querySelector('.highscore').textContent = highScore;
    }
}
else if(guess !== ScretNumber){
   if(Score > 1) {
    document.querySelector('.message').textContent = guess > ScretNumber ? "↗️ Too High!" : " Too Low!";
    Score--;
    document.querySelector('.score').textContent = Score;
}

else{
    document.querySelector('.message').textContent = '😢 You Lost the game'
    document.querySelector('.score').textContent = 0;
    audio2.play();
    audio1.pause();
}
}
    }
});
document.querySelector('.again').addEventListener('click',function(){
    init();
    document.querySelector('.message').textContent = "Start Guessing...";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.guess').value = "";
    
});
