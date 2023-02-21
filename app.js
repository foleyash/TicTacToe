var play = document.getElementById("play_button");
var start = document.querySelector(".start");
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

play.addEventListener('click', (event) => {
    play.style.visibility = hidden;
    start.style.visibility = hidden;
});

