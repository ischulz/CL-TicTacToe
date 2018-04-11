const prompt = require('prompt');

//values for the board
let board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
}
//possible win results
let wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

//printing the board with the values of board variable
function printBoard() {
  console.log((`
        ${board[1]} | ${board[2]} | ${board[3]}
        ---------
        ${board[4]} | ${board[5]} | ${board[6]}
        ---------
        ${board[7]} | ${board[8]} | ${board[9]}`));
};

//checking if the move is doable
function isMoveCorrect(pos) {
  if(pos > 0 && pos < 10 && board[pos] === ' ') {
    return true;
  }
  return false;
}

function setMove(pos, symbol) {
    board[pos] = symbol.toUpperCase();
}

function turn(player) {
    console.log(`Player ${player}'s turn`);
    prompt.start();
    prompt.get(['pos'], function (err, result) {
        if (isMoveCorrect(result.pos) === true) {
            board[result.pos] = player.toUpperCase();
            printBoard();
            if (isWin(player) === true) {
                console.log(`Player ${player} wins!!!`);
                return;
            }
            if (player === 'X') {
                turn('O');
            } else {
                turn('X');
            }
        } else {
            console.log(`Seriously dude... its not that hard...`);
            turn(player);
        }
    });
}

function isWin(player) {
    for (let i = 0; i < wins.length; i++) {
        let count = 0;
        for (let j = 0; j < wins[i].length; j++) {
            if (board[wins[i][j]] === player) {
                count++;
            }
            if (count === 3) {
                return true;
            }
        }
    }
    return false;
}


console.log(`Game started:
    1 | 2 | 3
    ---------
    4 | 5 | 6
    ---------
    7 | 8 | 9`);


turn('X');