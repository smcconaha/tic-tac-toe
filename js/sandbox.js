//Creating page elements
const master = document.getElementById('master');
startBtn = document.createElement('button');    
startBtn.textContent = 'Start Game / Reset';
startBtn.id = 'startButton';
document.body.appendChild(startBtn);
startBtn.addEventListener('click', init);

//given a array with Xs and Os, return the index numbers where those values occur
/*const testArray = ['X', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];

function includeFun (array) {
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
*/

//Object  
let gameState = {
    playerTurn: '',
    playerXArr: [],
    playerOArr: [],
    winCriteria: [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['0', '4', '8'],
        ['2', '4', '6']                        
    ],
    gameActive: true,
    currentState: 0,
}

// function resetBtn() {
//     resetBtn = document.createElement('button');
//     resetBtn.textContent = 'Reset Game';
//     resetBtn.id = "resetBtn";
//     master.appendChild(resetBtn);
//     resetBtn.addEventListener('click', init);
// };

function clearContent() {
    gameState.playerXArr = [];
    gameState.playerOArr = [];
    while (master.firstChild) {
        master.firstChild.remove()
    };
};

//init function sets up page, called in eventListener above
function init() {
    clearContent();
    gameState.playerTurn = "X";
    generateElement('div', 'master', 'row1', 'row border border-dark fs-6');
    generateElement('div', 'row1', '0', 'col-4 border border-dark bg-info bg-opacity-25 fs-6');
    generateElement('div', 'row1', '1', 'col-4 border border-dark bg-info bg-opacity-50');
    generateElement('div', 'row1', '2', 'col-4 border border-dark bg-info bg-opacity-25');
    generateElement('div', 'master', 'row2', 'row border border-dark');
    generateElement('div', 'row2', '3', 'col-4 border border-dark bg-info bg-opacity-50');
    generateElement('div', 'row2', '4', 'col-4 border border-dark bg-info bg-opacity-25');
    generateElement('div', 'row2', '5', 'col-4 border border-dark bg-info bg-opacity-50');
    generateElement('div', 'master', 'row3', 'row border border-dark');
    generateElement('div', 'row3', '6', 'col-4 border border-dark bg-info bg-opacity-25');
    generateElement('div', 'row3', '7', 'col-4 border border-dark bg-info bg-opacity-50');
    generateElement('div', 'row3', '8', 'col-4 border border-dark bg-info bg-opacity-25');
//eventListener for tiles
    const allTiles = document.querySelectorAll('div.col-4');
    allTiles.forEach(tile => {
        tile.addEventListener('click', handleClick, { once: true }) //only fire event listener once, maybe use getElementsByClassName
    })
}



function handleClick(e) { //dont have a specific e but this e is getting passed in based on add event listener....ties with event listener above
    const tile = e.target; //whichever cell we clicked on 
    //pass tile and playerTurn
    updateTile(tile);
    //check for win or draw condition
    checkWinCond();
    //switch turns
    changePlayer();
}

function gameResult (text) {
    let outcome = document.createElement('h1');
    outcome.textContent = text;
    master.appendChild(outcome);
}


function checkWinCond() {
    for (let i = 0; i < gameState.winCriteria.length; i++) {
        if(gameState.playerXArr.includes(gameState.winCriteria[i][0]) && gameState.playerXArr.includes(gameState.winCriteria[i][1]) && gameState.playerXArr.includes(gameState.winCriteria[i][2])) {
            gameResult("X's just smoked you!");
        } else if (gameState.playerOArr.includes(gameState.winCriteria[i][0]) && gameState.playerOArr.includes(gameState.winCriteria[i][1]) && gameState.playerOArr.includes(gameState.winCriteria[i][2])) {
                gameResult("O's just ate your lunch!");
        } else {
            if (gameState.playerOArr.length + gameState.playerXArr.length === 9) {
                gameResult("Tie...you either both suck or are both REALLY good.");
                return;
            }
        }
    }
}


//create row and col function
function generateElement (el, parent, id, klass) {
    let newElement = document.createElement(el);
    newElement.id = id;
    newElement.className = klass;
    document.getElementById(parent).appendChild(newElement);
}

//select tile, clicking should add x or o
function updateTile(tile) {
    tile.textContent = (gameState.playerTurn);
    //gameState.boardState[tile.id] = gameState.playerTurn;
    if (gameState.playerTurn === "X") {
        gameState.playerXArr.push(tile.id);
    } else {
        gameState.playerOArr.push(tile.id);
    }
}

//this changes turn everytime
function changePlayer() {
    gameState.playerTurn === "X" ? gameState.playerTurn = "O" : gameState.playerTurn = "X";
}

