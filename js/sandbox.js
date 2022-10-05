//given a array with Xs and Os, return the index numbers where those values occur
const testArray = ['X', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];

function testArray (array) {
    let arrayX = [];
    let arrayO = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] === 'X') {
            arrayX.push(i);
        } else if
            (array[i] === 'O') {
                arrayO.push(i);
            }
        };
    return arrayX;
};

function checkWinCond (array, val) {
    //if (array.includes(winCriteria[0])) {
    //    return "This is a winner";
    //}
    return array.some((arrVal) => val === arrVal);
}

//Object

let gameState = {
    playerTurn: 'x',
    winCriteria: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 7, 8]                        
    ],
    boardState: ['','','','','','','',''],
    gameActive: true,
    currentState: 0,
}
