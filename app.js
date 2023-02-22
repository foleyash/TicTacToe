const play = document.getElementById("play_button");
const start = document.querySelector(".start");
const introText = document.querySelector(".intro");
const board = document.querySelector(".container");
const playerScore = document.querySelector(".player-score");
const robotScore = document.querySelector(".robot-score");

const cell1 = document.getElementById("cell1");
const cell2 = document.getElementById("cell2");
const cell3 = document.getElementById("cell3");
const cell4 = document.getElementById("cell4");
const cell5 = document.getElementById("cell5");
const cell6 = document.getElementById("cell6");
const cell7 = document.getElementById("cell7");
const cell8 = document.getElementById("cell8");
const cell9 = document.getElementById("cell9");

var hover = false;
var X_turn = true;

var cell1_clicked = false;
var cell2_clicked = false;
var cell3_clicked = false;
var cell4_clicked = false;
var cell5_clicked = false;
var cell6_clicked = false;
var cell7_clicked = false;
var cell8_clicked = false;
var cell9_clicked = false;

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


cell1.addEventListener('click', () => {
    
    if(cell1_clicked) return;

    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
    }

    cell1.appendChild(img); 
    cell1_clicked = true;
});

cell2.addEventListener('click', () => {
    
    if(cell2_clicked) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
    }

    cell2.appendChild(img); 
    cell2_clicked = true;
});

cell3.addEventListener('click', () => {
    
    if(cell3_clicked) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
    }

    cell3.appendChild(img); 
    cell3_clicked = true;
});

cell4.addEventListener('click', () => {
    
    if(cell4_clicked) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
    }

    cell4.appendChild(img); 
    cell4_clicked = true;
});

cell5.addEventListener('click', () => {
    
    if(cell5_clicked) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
    }

    cell5.appendChild(img); 
    cell5_clicked = true;
});

cell6.addEventListener('click', () => {
    
    if(cell6_clicked) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
    }

    cell6.appendChild(img); 
    cell6_clicked = true;
});

cell7.addEventListener('click', () => {
    
    if(cell7_clicked) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
    }

    cell7.appendChild(img); 
    cell7_clicked = true;
});

cell8.addEventListener('click', () => {
    
    if(cell8_clicked) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
    }

    cell8.appendChild(img); 
    cell8_clicked = true;
});

cell9.addEventListener('click', () => {
    
    if(cell9_clicked) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
    }

    cell9.appendChild(img); 
    cell9_clicked = true;
});
