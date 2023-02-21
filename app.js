const play = document.getElementById("play_button");
const start = document.querySelector(".start");
const introText = document.querySelector(".intro");
const board = document.querySelector(".container");
const playerScore = document.querySelector(".player-score");
const robotScore = document.querySelector(".robot-score");
var hover = false;

var interval = window.setInterval(function(){
    if(hover == true) {
        return;
    }
    if(play.style.opacity == .01) {
        play.style.opacity = 1;
    }
    else {
        play.style.opacity = .01;
    }
}, 500);

play.onmouseover = function() {
    play.style.color = 'white';
    play.style.scale = 1.1;
    play.style.opacity = 1;
    hover = true;
};

play.onmouseout = function() {
    play.style.color = 'blue';
    play.style.scale = 1;
    hover = false;
}

play.addEventListener('click', () => {
    play.style.visibility = 'hidden';
    start.classList.toggle("active");
    introText.classList.toggle("active");
    board.classList.toggle("active");
    robotScore.classList.toggle("active");
    playerScore.classList.toggle("active");
    setTimeout(() => start.remove(), 1000);
});

