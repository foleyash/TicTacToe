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
});


function evaluateXWin() {
    if(moves[0] == "X" && moves[1] == "X" && moves[2] == "X") return true;
    else if(moves[0] == "X" && moves[4] == "X" && moves[8] == "X") return true;
    else if(moves[0] == "X" && moves[3] == "X" && moves[6] == "X") return true;
    else if(moves[1] == "X" && moves[4] == "X" && moves[7] == "X") return true;
    else if(moves[2] == "X" && moves[5] == "X" && moves[8] == "X") return true;
    else if(moves[3] == "X" && moves[4] == "X" && moves[5] == "X") return true;
    else if(moves[6] == "X" && moves[7] == "X" && moves[8] == "X") return true;
    else if(moves[6] == "X" && moves[4] == "X" && moves[2] == "X") return true;

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
        }, 340);
        gameFinished(false);
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
        }, 340);
        gameFinished(false);
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
        }, 340);
        gameFinished(false);
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
        }, 340);
        gameFinished(false);
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
        }, 340);
        gameFinished(false);
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
        }, 340);
        gameFinished(false);
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
        }, 340);
        gameFinished(false);
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
        }, 340);
        let winningSpaces = [6, 4, 2];
        let losingSpaces = findLosingSpaces(winningSpaces);
        alternateLights(losingSpaces);
        gameFinished(false);
        return true;
    }

    return false;
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
    cell1.removeChild(cell1.firstChild);
    cell2.removeChild(cell2.firstChild);
    cell3.removeChild(cell3.firstChild);
    cell4.removeChild(cell4.firstChild);
    cell5.removeChild(cell5.firstChild);
    cell6.removeChild(cell6.firstChild);
    cell7.removeChild(cell7.firstChild);
    cell8.removeChild(cell8.firstChild);
    cell9.removeChild(cell9.firstChild);
    if(X_wins) {
        //Say X wins!
    }
    else {
        //Say O wins!
    }
}