
var gameBox = document.getElementById('box');
var turn = 1;
var players = ['O','X'];
var winCombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var field = ['', '', '', '', '', '', '', '', ''];

function onClick(sender, index) {
    sender.value = players[turn];
    sender.disabled = true;
    field[index] = turn;
    var gameOver = CheckIfGameOver();
    if(gameOver === true) {
        alert(players[turn] +'  WIN!');
        StartNewGame();
        return;
    } else
    if(gameOver === false){
        ChangeTurn();
    }
}
function ChangeTurn(){
    if(turn == 0) {
        turn  = 1;
    }
    else {
        turn = 0;
    }
}
function StartNewGame(){
    var inputs = gameBox.getElementsByTagName('input');
    for(var i=0; i< inputs.length; i++){
        inputs[i].value = '';
        inputs[i].disabled = false;
        field[i] = '';
    }
    turn = 1;
}
function CheckIfGameOver(){
    for(var i = 0; i < winCombination.length; i++){
        var xCount = 0;
        var zeroCount = 0;
        for(var j=0; j< winCombination[i].length; j++){
            if(field[winCombination[i][j]] === 1){
                xCount = xCount + 1;
            }
            if(field[winCombination[i][j]] === 0){
                zeroCount = zeroCount + 1;
            }
        }
        if(xCount == 3){
            return true;
        }
        if(zeroCount == 3){
            return true;
        }
    }
    var isOneEmpty = false;
    for(var i=0; i<field.length; i++){
        if(field[i] === ''){
            isOneEmpty = true;
            break;
        }
    }
    if(isOneEmpty === false){
        StartNewGame();
        return;
    }
    return false;
}
function resetWin() {
    var inputs = gameBox.getElementsByTagName('input');
    return false;
}
