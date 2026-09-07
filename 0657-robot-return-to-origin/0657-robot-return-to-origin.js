/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;
    for(let move of moves){
        if (move === "U"){
            y=y+1;
        }
        else if(move === "D"){
            y=y-1;
        }
        else if(move === "R"){
            x = x+1;
        }
        else if(move === "L"){
            x = x-1
        }
    }
    if(x === 0 && y === 0){
        return true;
    }
    else{
        return false;
    }
};