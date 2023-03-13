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
var gameOver = false;
var robotNumWins = 0;
var playerNumWins = 0;

var cell1_clicked = false;
var cell2_clicked = false;
var cell3_clicked = false;
var cell4_clicked = false;
var cell5_clicked = false;
var cell6_clicked = false;
var cell7_clicked = false;
var cell8_clicked = false;
var cell9_clicked = false;

const moves = ["-", "-","-","-","-","-","-","-","-"];

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
    play.style.color = 'rgb(101, 241, 101)';
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
    
    if(cell1_clicked || gameOver) {
        console.log('Game is over');
        return;
    } 

    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
        moves[0] = "X";
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
        moves[0] = "O";
    }

    cell1.appendChild(img); 
    cell1_clicked = true;

    if(evaluateXWin()) {
        gameOver = true;
    }
    else if(evaluateOWin()) {
        gameOver = true;
    }
    else if(evaluateTie()) {
        gameOver = true;
    }
    else {
        let moveIdx = robotMove(moves);
        var img2 = document.createElement("img");
        img2.style.maxWidth = '100%';
        img2.style.maxHeight = '100%';
        img2.src = 'img/O.jpg';
        img2.alt = 'O';
        moves[moveIdx] = 'O';

        if(moveIdx == 0) {
            cell1.appendChild(img2);
            cell1_clicked = true;
        }
        else if(moveIdx == 1) {
            cell2.appendChild(img2);
            cell2_clicked = true;
        }
        else if(moveIdx == 2) {
            cell3.appendChild(img2);
            cell3_clicked = true;
        }
        else if(moveIdx == 3) {
            cell4.appendChild(img2);
            cell4_clicked = true;
        }
        else if(moveIdx == 4) {
            cell5.appendChild(img2);
            cell5_clicked = true;
        }
        else if(moveIdx == 5) {
            cell6.appendChild(img2);
            cell6_clicked = true;
        }
        else if(moveIdx == 6) {
            cell7.appendChild(img2);
            cell7_clicked = true;
        }
        else if(moveIdx == 7) {
            cell8.appendChild(img2);
            cell8_clicked = true;
        }
        else if(moveIdx == 8) {
            cell9.appendChild(img2);
            cell9_clicked = true;
        }

        X_turn = true;
        if(evaluateXWin()) {
            gameOver = true;
        }
        else if(evaluateOWin()) {
            gameOver = true;
        }
        else if(evaluateTie()) {
            gameOver = true;
        }
    }

    if(gameOver == true) {
        playAgain();
    }
});

cell2.addEventListener('click', () => {
    
    if(cell2_clicked || gameOver) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
        moves[1] = "X";
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
        moves[1] = "O";
    }

    cell2.appendChild(img); 
    cell2_clicked = true;

    if(evaluateXWin()) {
        gameOver = true;
    }
    else if(evaluateOWin()) {
        gameOver = true;
    }
    else if(evaluateTie()) {
        gameOver = true;
    }
    else {
        let moveIdx = robotMove(moves);
        var img2 = document.createElement("img");
        img2.style.maxWidth = '100%';
        img2.style.maxHeight = '100%';
        img2.src = 'img/O.jpg';
        img2.alt = 'O';
        moves[moveIdx] = 'O';

        if(moveIdx == 0) {
            cell1.appendChild(img2);
            cell1_clicked = true;
        }
        else if(moveIdx == 1) {
            cell2.appendChild(img2);
            cell2_clicked = true;
        }
        else if(moveIdx == 2) {
            cell3.appendChild(img2);
            cell3_clicked = true;
        }
        else if(moveIdx == 3) {
            cell4.appendChild(img2);
            cell4_clicked = true;
        }
        else if(moveIdx == 4) {
            cell5.appendChild(img2);
            cell5_clicked = true;
        }
        else if(moveIdx == 5) {
            cell6.appendChild(img2);
            cell6_clicked = true;
        }
        else if(moveIdx == 6) {
            cell7.appendChild(img2);
            cell7_clicked = true;
        }
        else if(moveIdx == 7) {
            cell8.appendChild(img2);
            cell8_clicked = true;
        }
        else if(moveIdx == 8) {
            cell9.appendChild(img2);
            cell9_clicked = true;
        }

        X_turn = true;
        if(evaluateXWin()) {
            gameOver = true;
        }
        else if(evaluateOWin()) {
            gameOver = true;
        }
        else if(evaluateTie()) {
            gameOver = true;
        }
    }

    if(gameOver == true) {
        playAgain();
    }
});

cell3.addEventListener('click', () => {
    
    if(cell3_clicked || gameOver) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
        moves[2] = "X";
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
        moves[2] = "O";
    }

    cell3.appendChild(img); 
    cell3_clicked = true;

    if(evaluateXWin()) {
        gameOver = true;
    }
    else if(evaluateOWin()) {
        gameOver = true;
    }
    else if(evaluateTie()) {
        gameOver = true;
    }
    else {
        let moveIdx = robotMove(moves);
        var img2 = document.createElement("img");
        img2.style.maxWidth = '100%';
        img2.style.maxHeight = '100%';
        img2.src = 'img/O.jpg';
        img2.alt = 'O';
        moves[moveIdx] = 'O';

        if(moveIdx == 0) {
            cell1.appendChild(img2);
            cell1_clicked = true;
        }
        else if(moveIdx == 1) {
            cell2.appendChild(img2);
            cell2_clicked = true;
        }
        else if(moveIdx == 2) {
            cell3.appendChild(img2);
            cell3_clicked = true;
        }
        else if(moveIdx == 3) {
            cell4.appendChild(img2);
            cell4_clicked = true;
        }
        else if(moveIdx == 4) {
            cell5.appendChild(img2);
            cell5_clicked = true;
        }
        else if(moveIdx == 5) {
            cell6.appendChild(img2);
            cell6_clicked = true;
        }
        else if(moveIdx == 6) {
            cell7.appendChild(img2);
            cell7_clicked = true;
        }
        else if(moveIdx == 7) {
            cell8.appendChild(img2);
            cell8_clicked = true;
        }
        else if(moveIdx == 8) {
            cell9.appendChild(img2);
            cell9_clicked = true;
        }

        X_turn = true;
        if(evaluateXWin()) {
            gameOver = true;
        }
        else if(evaluateOWin()) {
            gameOver = true;
        }
        else if(evaluateTie()) {
            gameOver = true;
        }
    }

    if(gameOver == true) {
        playAgain();
    }
});

cell4.addEventListener('click', () => {
    
    if(cell4_clicked || gameOver) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
        moves[3] = "X";
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
        moves[3] = "O";
    }

    cell4.appendChild(img); 
    cell4_clicked = true;

    if(evaluateXWin()) {
        gameOver = true;
    }
    else if(evaluateOWin()) {
        gameOver = true;
    }
    else if(evaluateTie()) {
        gameOver = true;
    }
    else {
        let moveIdx = robotMove(moves);
        var img2 = document.createElement("img");
        img2.style.maxWidth = '100%';
        img2.style.maxHeight = '100%';
        img2.src = 'img/O.jpg';
        img2.alt = 'O';
        moves[moveIdx] = 'O';

        if(moveIdx == 0) {
            cell1.appendChild(img2);
            cell1_clicked = true;
        }
        else if(moveIdx == 1) {
            cell2.appendChild(img2);
            cell2_clicked = true;
        }
        else if(moveIdx == 2) {
            cell3.appendChild(img2);
            cell3_clicked = true;
        }
        else if(moveIdx == 3) {
            cell4.appendChild(img2);
            cell4_clicked = true;
        }
        else if(moveIdx == 4) {
            cell5.appendChild(img2);
            cell5_clicked = true;
        }
        else if(moveIdx == 5) {
            cell6.appendChild(img2);
            cell6_clicked = true;
        }
        else if(moveIdx == 6) {
            cell7.appendChild(img2);
            cell7_clicked = true;
        }
        else if(moveIdx == 7) {
            cell8.appendChild(img2);
            cell8_clicked = true;
        }
        else if(moveIdx == 8) {
            cell9.appendChild(img2);
            cell9_clicked = true;
        }

        X_turn = true;
        if(evaluateXWin()) {
            gameOver = true;
        }
        else if(evaluateOWin()) {
            gameOver = true;
        }
        else if(evaluateTie()) {
            gameOver = true;
        }
    }

    if(gameOver == true) {
        playAgain();
    }
});

cell5.addEventListener('click', () => {
    
    if(cell5_clicked || gameOver) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
        moves[4] = "X";
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
        moves[4] = "O";
    }

    cell5.appendChild(img); 
    cell5_clicked = true;

    if(evaluateXWin()) {
        gameOver = true;
    }
    else if(evaluateOWin()) {
        gameOver = true;
    }
    else if(evaluateTie()) {
        gameOver = true;
    }
    else {
        let moveIdx = robotMove(moves);
        var img2 = document.createElement("img");
        img2.style.maxWidth = '100%';
        img2.style.maxHeight = '100%';
        img2.src = 'img/O.jpg';
        img2.alt = 'O';
        moves[moveIdx] = 'O';

        if(moveIdx == 0) {
            cell1.appendChild(img2);
            cell1_clicked = true;
        }
        else if(moveIdx == 1) {
            cell2.appendChild(img2);
            cell2_clicked = true;
        }
        else if(moveIdx == 2) {
            cell3.appendChild(img2);
            cell3_clicked = true;
        }
        else if(moveIdx == 3) {
            cell4.appendChild(img2);
            cell4_clicked = true;
        }
        else if(moveIdx == 4) {
            cell5.appendChild(img2);
            cell5_clicked = true;
        }
        else if(moveIdx == 5) {
            cell6.appendChild(img2);
            cell6_clicked = true;
        }
        else if(moveIdx == 6) {
            cell7.appendChild(img2);
            cell7_clicked = true;
        }
        else if(moveIdx == 7) {
            cell8.appendChild(img2);
            cell8_clicked = true;
        }
        else if(moveIdx == 8) {
            cell9.appendChild(img2);
            cell9_clicked = true;
        }

        X_turn = true;
        if(evaluateXWin()) {
            gameOver = true;
        }
        else if(evaluateOWin()) {
            gameOver = true;
        }
        else if(evaluateTie()) {
            gameOver = true;
        }
    }

    if(gameOver == true) {
        playAgain();
    }
});

cell6.addEventListener('click', () => {
    
    if(cell6_clicked || gameOver) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
        moves[5] = "X";
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
        moves[5] = "O";
    }

    cell6.appendChild(img); 
    cell6_clicked = true;

    if(evaluateXWin()) {
        gameOver = true;
    }
    else if(evaluateOWin()) {
        gameOver = true;
    }
    else if(evaluateTie()) {
        gameOver = true;
    }
    else {
        let moveIdx = robotMove(moves);
        var img2 = document.createElement("img");
        img2.style.maxWidth = '100%';
        img2.style.maxHeight = '100%';
        img2.src = 'img/O.jpg';
        img2.alt = 'O';
        moves[moveIdx] = 'O';

        if(moveIdx == 0) {
            cell1.appendChild(img2);
            cell1_clicked = true;
        }
        else if(moveIdx == 1) {
            cell2.appendChild(img2);
            cell2_clicked = true;
        }
        else if(moveIdx == 2) {
            cell3.appendChild(img2);
            cell3_clicked = true;
        }
        else if(moveIdx == 3) {
            cell4.appendChild(img2);
            cell4_clicked = true;
        }
        else if(moveIdx == 4) {
            cell5.appendChild(img2);
            cell5_clicked = true;
        }
        else if(moveIdx == 5) {
            cell6.appendChild(img2);
            cell6_clicked = true;
        }
        else if(moveIdx == 6) {
            cell7.appendChild(img2);
            cell7_clicked = true;
        }
        else if(moveIdx == 7) {
            cell8.appendChild(img2);
            cell8_clicked = true;
        }
        else if(moveIdx == 8) {
            cell9.appendChild(img2);
            cell9_clicked = true;
        }

        X_turn = true;
        if(evaluateXWin()) {
            gameOver = true;
        }
        else if(evaluateOWin()) {
            gameOver = true;
        }
        else if(evaluateTie()) {
            gameOver = true;
        }
    }

    if(gameOver == true) {
        playAgain();
    }
});

cell7.addEventListener('click', () => {
    
    if(cell7_clicked || gameOver) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
        moves[6] = "X";
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
        moves[6] = "O";
    }

    cell7.appendChild(img); 
    cell7_clicked = true;

    if(evaluateXWin()) {
        gameOver = true;
    }
    else if(evaluateOWin()) {
        gameOver = true;
    }
    else if(evaluateTie()) {
        gameOver = true;
    }
    else {
        let moveIdx = robotMove(moves);
        var img2 = document.createElement("img");
        img2.style.maxWidth = '100%';
        img2.style.maxHeight = '100%';
        img2.src = 'img/O.jpg';
        img2.alt = 'O';
        moves[moveIdx] = 'O';

        if(moveIdx == 0) {
            cell1.appendChild(img2);
            cell1_clicked = true;
        }
        else if(moveIdx == 1) {
            cell2.appendChild(img2);
            cell2_clicked = true;
        }
        else if(moveIdx == 2) {
            cell3.appendChild(img2);
            cell3_clicked = true;
        }
        else if(moveIdx == 3) {
            cell4.appendChild(img2);
            cell4_clicked = true;
        }
        else if(moveIdx == 4) {
            cell5.appendChild(img2);
            cell5_clicked = true;
        }
        else if(moveIdx == 5) {
            cell6.appendChild(img2);
            cell6_clicked = true;
        }
        else if(moveIdx == 6) {
            cell7.appendChild(img2);
            cell7_clicked = true;
        }
        else if(moveIdx == 7) {
            cell8.appendChild(img2);
            cell8_clicked = true;
        }
        else if(moveIdx == 8) {
            cell9.appendChild(img2);
            cell9_clicked = true;
        }

        X_turn = true;
        if(evaluateXWin()) {
            gameOver = true;
        }
        else if(evaluateOWin()) {
            gameOver = true;
        }
        else if(evaluateTie()) {
            gameOver = true;
        }
    }

    if(gameOver == true) {
        playAgain();
    }
});

cell8.addEventListener('click', () => {
    
    if(cell8_clicked || gameOver) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
        moves[7] = "X";
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
        moves[7] = "O";
    }

    cell8.appendChild(img); 
    cell8_clicked = true;

    if(evaluateXWin()) {
        gameOver = true;
    }
    else if(evaluateOWin()) {
        gameOver = true;
    }
    else if(evaluateTie()) {
        gameOver = true;
    }
    else {
        let moveIdx = robotMove(moves);
        var img2 = document.createElement("img");
        img2.style.maxWidth = '100%';
        img2.style.maxHeight = '100%';
        img2.src = 'img/O.jpg';
        img2.alt = 'O';
        moves[moveIdx] = 'O';

        if(moveIdx == 0) {
            cell1.appendChild(img2);
            cell1_clicked = true;
        }
        else if(moveIdx == 1) {
            cell2.appendChild(img2);
            cell2_clicked = true;
        }
        else if(moveIdx == 2) {
            cell3.appendChild(img2);
            cell3_clicked = true;
        }
        else if(moveIdx == 3) {
            cell4.appendChild(img2);
            cell4_clicked = true;
        }
        else if(moveIdx == 4) {
            cell5.appendChild(img2);
            cell5_clicked = true;
        }
        else if(moveIdx == 5) {
            cell6.appendChild(img2);
            cell6_clicked = true;
        }
        else if(moveIdx == 6) {
            cell7.appendChild(img2);
            cell7_clicked = true;
        }
        else if(moveIdx == 7) {
            cell8.appendChild(img2);
            cell8_clicked = true;
        }
        else if(moveIdx == 8) {
            cell9.appendChild(img2);
            cell9_clicked = true;
        }

        X_turn = true;
        if(evaluateXWin()) {
            gameOver = true;
        }
        else if(evaluateOWin()) {
            gameOver = true;
        }
        else if(evaluateTie()) {
            gameOver = true;
        }
    }

    if(gameOver == true) {
        playAgain();
    }
});

cell9.addEventListener('click', () => {
    
    if(cell9_clicked || gameOver) return;
    
    var img = document.createElement("img");
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.opacity = 1;
    if(X_turn) {
        img.src = 'img/X.jpg';
        img.alt = 'X';
        X_turn = false;
        moves[8] = "X";
    }   
    else {
        img.src = 'img/O.jpg';
        img.alt = 'O';
        X_turn = true;
        moves[8] = "O";
    }

    cell9.appendChild(img); 
    cell9_clicked = true;
    
    if(evaluateXWin()) {
        gameOver = true;
    }
    else if(evaluateOWin()) {
        gameOver = true;
    }
    else if(evaluateTie()) {
        gameOver = true;
    }
    else {
        let moveIdx = robotMove(moves);
        var img2 = document.createElement("img");
        img2.style.maxWidth = '100%';
        img2.style.maxHeight = '100%';
        img2.src = 'img/O.jpg';
        img2.alt = 'O';
        moves[moveIdx] = 'O';

        if(moveIdx == 0) {
            cell1.appendChild(img2);
            cell1_clicked = true;
        }
        else if(moveIdx == 1) {
            cell2.appendChild(img2);
            cell2_clicked = true;
        }
        else if(moveIdx == 2) {
            cell3.appendChild(img2);
            cell3_clicked = true;
        }
        else if(moveIdx == 3) {
            cell4.appendChild(img2);
            cell4_clicked = true;
        }
        else if(moveIdx == 4) {
            cell5.appendChild(img2);
            cell5_clicked = true;
        }
        else if(moveIdx == 5) {
            cell6.appendChild(img2);
            cell6_clicked = true;
        }
        else if(moveIdx == 6) {
            cell7.appendChild(img2);
            cell7_clicked = true;
        }
        else if(moveIdx == 7) {
            cell8.appendChild(img2);
            cell8_clicked = true;
        }
        else if(moveIdx == 8) {
            cell9.appendChild(img2);
            cell9_clicked = true;
        }

        X_turn = true;
        if(evaluateXWin()) {
            gameOver = true;
        }
        else if(evaluateOWin()) {
            gameOver = true;
        }
        else if(evaluateTie()) {
            gameOver = true;

        }

    }

    if(gameOver == true) {
        playAgain();
    }
});


function evaluateXWin() {

    if(moves[0] == "X" && moves[1] == "X" && moves[2] == "X") {
        cell1.style.background = "red";
        cell1.removeChild(cell1.firstChild);
        setTimeout(() => {
            cell2.removeChild(cell2.firstChild);
            cell2.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell3.removeChild(cell3.firstChild);
            cell3.style.background = 'red';
            let winningSpaces = [0, 1, 2];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(true);
        }, 340);
      
        return true;
    }
    else if(moves[0] == "X" && moves[4] == "X" && moves[8] == "X") {
        cell1.style.background = "red";
        cell1.removeChild(cell1.firstChild);
        setTimeout(() => {
            cell5.removeChild(cell5.firstChild);
            cell5.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell9.removeChild(cell9.firstChild);
            cell9.style.background = 'red';
            let winningSpaces = [0, 4, 8];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(true);
        }, 340);
       
        return true;
    }
    else if(moves[0] == "X" && moves[3] == "X" && moves[6] == "X") {
        cell1.style.background = "red";
        cell1.removeChild(cell1.firstChild);
        setTimeout(() => {
            cell4.removeChild(cell4.firstChild);
            cell4.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell7.removeChild(cell7.firstChild);
            cell7.style.background = 'red';
            let winningSpaces = [0, 3, 6];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(true);
        }, 340);
       
        return true;
    }
    else if(moves[1] == "X" && moves[4] == "X" && moves[7] == "X") {
        cell2.style.background = "red";
        cell2.removeChild(cell2.firstChild);
        setTimeout(() => {
            cell5.removeChild(cell5.firstChild);
            cell5.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell8.removeChild(cell8.firstChild);
            cell8.style.background = 'red';
            let winningSpaces = [1, 4, 7];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(true);
        }, 340);
      
        return true;
    }
    else if(moves[2] == "X" && moves[5] == "X" && moves[8] == "X") {
        cell3.style.background = "red";
        cell3.removeChild(cell3.firstChild);
        setTimeout(() => {
            cell6.removeChild(cell6.firstChild);
            cell6.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell9.removeChild(cell9.firstChild);
            cell9.style.background = 'red';
            let winningSpaces = [2, 5, 8];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(true);
        }, 340);
       
        return true;
    }
    else if(moves[3] == "X" && moves[4] == "X" && moves[5] == "X") {
        cell4.style.background = "red";
        cell4.removeChild(cell4.firstChild);
        setTimeout(() => {
            cell5.removeChild(cell5.firstChild);
            cell5.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell6.removeChild(cell6.firstChild);
            cell6.style.background = 'red';
            let winningSpaces = [3, 4, 5];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(true);
        }, 340);
        
        return true;
    }
    else if(moves[6] == "X" && moves[7] == "X" && moves[8] == "X") {
        cell7.style.background = "red";
        cell7.removeChild(cell7.firstChild);
        setTimeout(() => {
            cell8.removeChild(cell8.firstChild);
            cell8.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell9.removeChild(cell9.firstChild);
            cell9.style.background = 'red';
            let winningSpaces = [6, 7, 8];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(true);
        }, 340);
        
        return true;
    }
    else if(moves[6] == "X" && moves[4] == "X" && moves[2] == "X") {
        cell7.style.background = "red";
        cell7.removeChild(cell7.firstChild);
        setTimeout(() => {
            cell5.removeChild(cell5.firstChild);
            cell5.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell3.removeChild(cell3.firstChild);
            cell3.style.background = 'red';
            let winningSpaces = [6, 4, 2];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(true);
        }, 340);
        
        return true;
    }

    return false;
}

function evaluateOWin() {

    if(moves[0] == "O" && moves[1] == "O" && moves[2] == "O") {
        cell1.style.background = "red";
        cell1.removeChild(cell1.firstChild);
        setTimeout(() => {
            cell2.removeChild(cell2.firstChild);
            cell2.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell3.removeChild(cell3.firstChild);
            cell3.style.background = 'red';
            let winningSpaces = [0, 1, 2];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(false);
        }, 340);

        robotNumWins++;
        robotScore.getElementsByTagName('h1')[0].innerHTML = "Robot: " + robotNumWins;
      
        return true;
    }
    else if(moves[0] == "O" && moves[4] == "O" && moves[8] == "O") {
        cell1.style.background = "red";
        cell1.removeChild(cell1.firstChild);
        setTimeout(() => {
            cell5.removeChild(cell5.firstChild);
            cell5.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell9.removeChild(cell9.firstChild);
            cell9.style.background = 'red';
            let winningSpaces = [0, 4, 8];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(false);
        }, 340);

        robotNumWins++;
        robotScore.getElementsByTagName('h1')[0].innerHTML = "Robot: " + robotNumWins;
       
        return true;
    }
    else if(moves[0] == "O" && moves[3] == "O" && moves[6] == "O") {
        cell1.style.background = "red";
        cell1.removeChild(cell1.firstChild);
        setTimeout(() => {
            cell4.removeChild(cell4.firstChild);
            cell4.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell7.removeChild(cell7.firstChild);
            cell7.style.background = 'red';
            let winningSpaces = [0, 3, 6];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(false);
        }, 340);

        robotNumWins++;
        robotScore.getElementsByTagName('h1')[0].innerHTML = "Robot: " + robotNumWins;
       
        return true;
    }
    else if(moves[1] == "O" && moves[4] == "O" && moves[7] == "O") {
        cell2.style.background = "red";
        cell2.removeChild(cell2.firstChild);
        setTimeout(() => {
            cell5.removeChild(cell5.firstChild);
            cell5.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell8.removeChild(cell8.firstChild);
            cell8.style.background = 'red';
            let winningSpaces = [1, 4, 7];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(false);
        }, 340);

        robotNumWins++;
        robotScore.getElementsByTagName('h1')[0].innerHTML = "Robot: " + robotNumWins;
      
        return true;
    }
    else if(moves[2] == "O" && moves[5] == "O" && moves[8] == "O") {
        cell3.style.background = "red";
        cell3.removeChild(cell3.firstChild);
        setTimeout(() => {
            cell6.removeChild(cell6.firstChild);
            cell6.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell9.removeChild(cell9.firstChild);
            cell9.style.background = 'red';
            let winningSpaces = [2, 5, 8];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(false);
        }, 340);

        robotNumWins++;
        robotScore.getElementsByTagName('h1')[0].innerHTML = "Robot: " + robotNumWins;
       
        return true;
    }
    else if(moves[3] == "O" && moves[4] == "O" && moves[5] == "O") {
        cell4.style.background = "red";
        cell4.removeChild(cell4.firstChild);
        setTimeout(() => {
            cell5.removeChild(cell5.firstChild);
            cell5.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell6.removeChild(cell6.firstChild);
            cell6.style.background = 'red';
            let winningSpaces = [3, 4, 5];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(false);
        }, 340);

        robotNumWins++;
        robotScore.getElementsByTagName('h1')[0].innerHTML = "Robot: " + robotNumWins;
        
        return true;
    }
    else if(moves[6] == "O" && moves[7] == "O" && moves[8] == "O") {
        cell7.style.background = "red";
        cell7.removeChild(cell7.firstChild);
        setTimeout(() => {
            cell8.removeChild(cell8.firstChild);
            cell8.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell9.removeChild(cell9.firstChild);
            cell9.style.background = 'red';
            let winningSpaces = [6, 7, 8];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(false);
        }, 340);

        robotNumWins++;
        robotScore.getElementsByTagName('h1')[0].innerHTML = "Robot: " + robotNumWins;
        
        return true;
    }
    else if(moves[6] == "O" && moves[4] == "O" && moves[2] == "O") {
        cell7.style.background = "red";
        cell7.removeChild(cell7.firstChild);
        setTimeout(() => {
            cell5.removeChild(cell5.firstChild);
            cell5.style.background = 'red';
        }, 170);
        setTimeout(() => {
            cell3.removeChild(cell3.firstChild);
            cell3.style.background = 'red';
            let winningSpaces = [6, 4, 2];
            let losingSpaces = findLosingSpaces(winningSpaces);
            alternateLights(losingSpaces);
            gameFinished(false);
        }, 340);

        robotNumWins++;
        robotScore.getElementsByTagName('h1')[0].innerHTML = "Robot: " + robotNumWins;
        
        return true;
    }

    return false;
}

function evaluateTie() {
    let full = true;
    for(let i = 0; i < 9; i++) {
        if(moves[i] == "-") {
            full = false;
        }
    }

    if(full == true) {
        if(cell1.firstChild) {
            cell1.removeChild(cell1.firstChild);
        }
        if(cell2.firstChild) {
            cell2.removeChild(cell2.firstChild);
        }
        if(cell3.firstChild) {
            cell3.removeChild(cell3.firstChild);
        }
        if(cell4.firstChild) {
            cell4.removeChild(cell4.firstChild);
        }
        if(cell5.firstChild) {
            cell5.removeChild(cell5.firstChild);
        }
        if(cell6.firstChild) {
            cell6.removeChild(cell6.firstChild);
        }
        if(cell7.firstChild) {
            cell7.removeChild(cell7.firstChild);
        }
        if(cell8.firstChild) {
            cell8.removeChild(cell8.firstChild);
        }
        if(cell9.firstChild) {
            cell9.removeChild(cell9.firstChild);
        }

        let h1 = document.createElement("h1");
        h1.style.height = '50%';
        h1.style.width = '50%';
        h1.style.position = 'absolute';
        h1.style.top = '25%';
        h1.style.left = '25%';
        h1.style.textAlign = 'center';
        let text = document.createTextNode("Tie!");
        h1.appendChild(text);
        cell5.appendChild(h1);

    }

    return full;
}

function findLosingSpaces(winningSpaces) {
    
    let losingSpaces = [];
    for(let i = 0; i < 9; i++) {
        let winningSpace = false;
        for(let j = 0; j < 3; j++) {
            if(winningSpaces[j] == i) {
                winningSpace = true;
            }
        }

        if(winningSpace) {
            continue;
        }
        else {
            losingSpaces.push(i);
        }
    }

    return losingSpaces;
}

function alternateLights(losingSpaces) {
    let color = 'blue';
    
    interval = window.setInterval(function() {

        if(color == 'blue') {
            color = 'green';
            for(let i = 0; i < 6; i++) {
                if(losingSpaces[i] + 1 == 1) {
                    cell1.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 2) {
                    cell2.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 3) {
                    cell3.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 4) {
                    cell4.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 5) {
                    cell5.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 6) {
                    cell6.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 7) {
                    cell7.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 8) {
                    cell8.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 9) {
                    cell9.style.background = color;
                }
            }
        }
        else{
            color = 'blue';
            for(let i = 0; i < 6; i++) {
                if(losingSpaces[i] + 1 == 1) {
                    cell1.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 2) {
                    cell2.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 3) {
                    cell3.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 4) {
                    cell4.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 5) {
                    cell5.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 6) {
                    cell6.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 7) {
                    cell7.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 8) {
                    cell8.style.background = color;
                }
                else if(losingSpaces[i] + 1 == 9) {
                    cell9.style.background = color;
                }
        }
    }
    }, 500);
}

function gameFinished(X_wins) {
    if(cell1.firstChild) {
        cell1.removeChild(cell1.firstChild);
    }
    if(cell2.firstChild) {
        cell2.removeChild(cell2.firstChild);
    }
    if(cell3.firstChild) {
        cell3.removeChild(cell3.firstChild);
    }
    if(cell4.firstChild) {
        cell4.removeChild(cell4.firstChild);
    }
    if(cell5.firstChild) {
        cell5.removeChild(cell5.firstChild);
    }
    if(cell6.firstChild) {
        cell6.removeChild(cell6.firstChild);
    }
    if(cell7.firstChild) {
        cell7.removeChild(cell7.firstChild);
    }
    if(cell8.firstChild) {
        cell8.removeChild(cell8.firstChild);
    }
    if(cell9.firstChild) {
        cell9.removeChild(cell9.firstChild);
    }
    
    if(X_wins) {
        
        let h1 = document.createElement("h1");
        h1.style.height = '50%';
        h1.style.width = '50%';
        h1.style.position = 'absolute';
        h1.style.top = '25%';
        h1.style.left = '25%';
        h1.style.textAlign = 'center';
        h1.style.color = 'white';
        let text = document.createTextNode("X Wins!");
        h1.appendChild(text);
        cell5.appendChild(h1);

        document.body.appendChild(div);
    }
    else {
        let h1 = document.createElement("h1");
        h1.style.height = '50%';
        h1.style.width = '50%';
        h1.style.position = 'absolute';
        h1.style.top = '25%';
        h1.style.left = '25%';
        h1.style.textAlign = 'center';
        h1.style.color = 'white'
        let text = document.createTextNode("O Wins!");
        h1.appendChild(text);
        cell5.appendChild(h1);
    }
}

function playAgain() {
    let div = document.createElement("div");
    div.style.height = '200px';
    div.style.width = '300px';
    div.style.position = 'absolute';
    div.style.bottom = '10%';
    div.style.left = '50%';
    div.style.marginLeft = '-150px';
    let cloud = document.createElement("img");
    cloud.style.position = 'absolute';
    cloud.style.maxWidth = '100%';
    cloud.style.maxHeight = '100%';
    cloud.src = 'img/cloud.png';
    cloud.style.opacity = '0';
    cloud.style.opacity = '1';
    cloud.style.transition = '.35s';
    cloud.style.zIndex = '1';
    let h1 = document.createElement("h1");
    h1.style.width = '50%';
    h1.style.height = '50%';
    h1.style.position = 'absolute';
    h1.style.top = '38%';
    h1.style.left = '25%';
    h1.style.color = 'black';
    h1.style.zIndex = '2';
    h1.style.transition = '.35s';
    h1.style.cursor = 'pointer';
    let text = document.createTextNode("Play Again?");
    h1.appendChild(text);

    let minCloud = false;
    let playAgainHover = false;
    let playAgain = false;

    h1.onmouseover = function() {
        playAgainHover = true;
        h1.style.color = 'blue';
    }

    h1.onmouseout = function() {
        playAgainHover = false;
        h1.style.color = 'black';
    }

    window.setTimeout(() => {
        div.appendChild(cloud);
        div.appendChild(h1);

        document.body.appendChild(div);
    }, 500);

    var oscilate = window.setInterval(function() {

        if(!gameOver) {
            window.clearInterval(oscilate);
            div.remove();
        }
        if(playAgainHover == true) {
            cloud.style.scale = '1';
            h1.style.fontSize = '2em';
            if(minCloud) {
                h1.style.transform = 'translate(-3%, -3%)';
            }

            minCloud = false;
            return;
        }
        if(minCloud) {
            cloud.style.scale = '1';
            h1.style.fontSize = '2em';
            h1.style.transform = 'translate(-3%, -3%)';
            minCloud = false;
        }
        else {
            cloud.style.scale = '.85';
            h1.style.fontSize = '1.7em';
            h1.style.transform = 'translate(3%, 3%)';
            minCloud = true;
        }
    }, 390);

    h1.addEventListener('click', () => {
        resetGame();
    });

}

function resetGame() {
    cell5.removeChild(cell5.firstChild);
    gameOver = false;
    cell1_clicked = false;
    cell2_clicked = false;
    cell3_clicked = false;
    cell4_clicked = false;
    cell5_clicked = false;
    cell6_clicked = false;
    cell7_clicked = false;
    cell8_clicked = false;
    cell9_clicked = false;

    window.clearInterval(interval);

    cell1.style.background = "white";
    cell2.style.background = "white";
    cell3.style.background = "white";
    cell4.style.background = "white";
    cell5.style.background = "white";
    cell6.style.background = "white";
    cell7.style.background = "white";
    cell8.style.background = "white";
    cell9.style.background = "white";

    for(let i = 0; i < 9; i++) {
        moves[i] = '-';
    }
}

function isMovesLeft(moves) {
    for(let i = 0; i < 9; i++) {
        if(moves[i] == '-') {
            return true
        }
    }

    return false;
}

function evaluate() {
    if(moves[0] == 'X' && moves[1] == 'X' && moves[2] == 'X' ||
    moves[0] == 'X' && moves[3] == 'X' && moves[6] == 'X' || 
    moves[1] == 'X' && moves[4] == 'X' && moves[7] == 'X' || 
    moves[2] == 'X' && moves[5] == 'X' && moves[8] == 'X' || 
    moves[3] == 'X' && moves[4] == 'X' && moves[5] == 'X' || 
    moves[6] == 'X' && moves[7] == 'X' && moves[8] == 'X' || 
    moves[6] == 'X' && moves[4] == 'X' && moves[2] == 'X' || 
    moves[0] == 'X' && moves[4] == 'X' && moves[8] == 'X' ){

        return -10;
    }
    else if(moves[0] == 'O' && moves[1] == 'O' && moves[2] == 'O' ||
    moves[0] == 'O' && moves[3] == 'O' && moves[6] == 'O' || 
    moves[1] == 'O' && moves[4] == 'O' && moves[7] == 'O' || 
    moves[2] == 'O' && moves[5] == 'O' && moves[8] == 'O' || 
    moves[3] == 'O' && moves[4] == 'O' && moves[5] == 'O' || 
    moves[6] == 'O' && moves[7] == 'O' && moves[8] == 'O' || 
    moves[6] == 'O' && moves[4] == 'O' && moves[2] == 'O' || 
    moves[0] == 'O' && moves[4] == 'O' && moves[8] == 'O' ){

        return 10;
    }
    else {
        return 0;
    }
}

function robotMove(moves) {
    //use this as a driver that accessed the miniMax algorithm to make an informed decision for
    //the robot

    let bestMove;
    let bestVal = -1000;

    //loop through each possible move in the board
    for(let i = 0; i < 9; i++) {
        
        if(moves[i] == '-') {

            moves[i] = 'O';

            let moveVal = miniMax(moves, 0, false);

            moves[i] = '-';

            if(moveVal > bestVal) {
                bestMove = i;
                bestVal = moveVal;
            }
        }
    }

    return bestMove;
}

function miniMax(moves, depth, isMax) {
    //write the recursive minimax algorithm here

    let score = evaluate();

    if(score == 10) {
        return score;
    }

    if(score == -10) {
        return score;
    }

    if(!isMovesLeft(moves)) {
        return 0;
    }

    if(isMax) {
        let best = -1000;

        for(let i = 0; i < 9; i++) {
            if(moves[i] == '-') {
                moves[i] = 'O';

                best = Math.max(best, miniMax(moves, depth+1, !isMax));

                moves[i] = '-';
            }
        }

        return best;
    }
    else {
        let best = 1000;

        for(let i = 0; i < 9; i++) {
            if(moves[i] == '-') {
                moves[i] = 'X';

                best = Math.min(best, miniMax(moves, depth+1, !isMax));

                moves[i] = '-';
            }

        }

        return best;
    }
}

function printMoves(moves) {
    for (let i = 0; i < 9; i++) {
        console.log(moves[i] + " ");
    }
}