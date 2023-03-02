//Functional testing for app.js

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
        return true;
    }
    else if(moves[0] == "O" && moves[4] == "O" && moves[8] == "O") {
        
        return true;
    }
    else if(moves[0] == "O" && moves[3] == "O" && moves[6] == "O") {
        
        return true;
    }
    else if(moves[1] == "O" && moves[4] == "O" && moves[7] == "O") {
        
        return true;
    }
    else if(moves[2] == "O" && moves[5] == "O" && moves[8] == "O") {    
        return true;
    }
    else if(moves[3] == "O" && moves[4] == "O" && moves[5] == "O") {
        
        return true;
    }
    else if(moves[6] == "O" && moves[7] == "O" && moves[8] == "O") {
        
        return true;
    }
    else if(moves[6] == "O" && moves[4] == "O" && moves[2] == "O") {
        
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

    return full;
}

function evaluate() {
    if(evaluateXWin()) {
        return -10;
    }
    else if(evaluateOWin()) {
        return 10;
    }
    else {
        return 0;
    }
}

function robotMove(moves) {
    //use this as a driver that accessed the miniMax algorithm to make an informed decision for
    //the robot

    let bestMove = null;
    let bestVal = -1000;

    //loop through each possible move in the board
    for(let i = 0; i < 9; i++) {
        
        if(moves[i] == "-") {
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

    if(evaluateTie()) {
        return 0;
    }

    if(isMax) {
        let best = -1000;

        for(let i = 0; i < 9; i++) {
            if(moves[i] == "-") {
                moves[i] = 'O';

                best = Math.max(best, miniMax(moves, depth+1, !isMax));

                board[i] = "-";
            }
        }

        return best;
    }
    else {
        let best = 1000;

        for(let i = 0; i < 9; i++) {
            if(moves[i] == "-") {
                moves[i] = 'X';

                best = Math.min(best, miniMax(moves, depth+1, !isMax));

                board[i] = "-";
            }

            return best;
        }
    }
}

//Create test cases below here

let moves = ["O", "O", "-", 
            "-", "X", "X", 
            "-", "X", "-"];


if (robotMove(moves) == 3) {
    let moveIdx = robotMove(moves);
    console.log("PASS " + moveIdx);
}
else {
    let moveIdx = robotMove(moves);
    console.log("FAIL " + moveIdx);
}