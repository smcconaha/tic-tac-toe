//CREATING PAGE ELEMENTS//

const master = document.getElementById('master');
headText = document.createElement('h1');
headText.textContent = 'Tic-Tac-Toe';
master.appendChild(headText);
startBtn = document.createElement('button');    
startBtn.textContent = 'Start Game / Reset';
startBtn.id = 'startButton';
document.body.appendChild(startBtn);
startBtn.addEventListener('click', init);

//OBJECT //
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
};

//Create player's turn announcement
const callTurn = document.createElement('h1');
callTurn.textContent = `X's turn`;
document.body.appendChild(callTurn);

//FUNCTIONALITY//

//Clear contents from page
function clearContent() {
    gameState.playerXArr = [];
    gameState.playerOArr = [];
    while (master.firstChild) {
        master.firstChild.remove()
    };
};

function init() {
    clearContent(); //added because init is called with resetBtn click
    gameState.playerTurn = "X";
    generateElement('div', 'master', 'row1', 'row border border-dark fs-1');
    generateElement('div', 'row1', '0', 'col-4 border border-dark bg-info bg-opacity-25');
    generateElement('div', 'row1', '1', 'col-4 border border-dark bg-info bg-opacity-50');
    generateElement('div', 'row1', '2', 'col-4 border border-dark bg-info bg-opacity-25');
    generateElement('div', 'master', 'row2', 'row border border-dark fs-1');
    generateElement('div', 'row2', '3', 'col-4 border border-dark bg-info bg-opacity-50');
    generateElement('div', 'row2', '4', 'col-4 border border-dark bg-info bg-opacity-25');
    generateElement('div', 'row2', '5', 'col-4 border border-dark bg-info bg-opacity-50');
    generateElement('div', 'master', 'row3', 'row border border-dark fs-1');
    generateElement('div', 'row3', '6', 'col-4 border border-dark bg-info bg-opacity-25');
    generateElement('div', 'row3', '7', 'col-4 border border-dark bg-info bg-opacity-50');
    generateElement('div', 'row3', '8', 'col-4 border border-dark bg-info bg-opacity-25');
    const allTiles = document.querySelectorAll('div.col-4');
    allTiles.forEach(tile => {
        tile.addEventListener('click', handleClick, { once: true }) //only fire event listener once
    });
};

//Functionality while clicking on tiles
function handleClick(e) {
    const tile = e.target;
    updateTile(tile);
    checkWinCond();
    changePlayer();
    callTurn.textContent = `${gameState.playerTurn}'s turn`;
};

//Used to append game outcome
function gameResult (text) {
    let outcome = document.createElement('h1');
    outcome.textContent = text;
    master.appendChild(outcome);
};

//Removed tile click events
function removeTileFun() {
    const allTiles = document.querySelectorAll('div.col-4');
        allTiles.forEach(tile => {
            tile.removeEventListener('click', handleClick, { once: true })
    });
};

//Check win criteria
function checkWinCond() {
    for (let i = 0; i < gameState.winCriteria.length; i++) {
        if(gameState.playerXArr.includes(gameState.winCriteria[i][0]) && gameState.playerXArr.includes(gameState.winCriteria[i][1]) && gameState.playerXArr.includes(gameState.winCriteria[i][2])) {
            gameResult("X's just smoked you!");
            removeTileFun();
        } else if (gameState.playerOArr.includes(gameState.winCriteria[i][0]) && gameState.playerOArr.includes(gameState.winCriteria[i][1]) && gameState.playerOArr.includes(gameState.winCriteria[i][2])) {
                gameResult("O's just ate your lunch!");
                removeTileFun();
        } else {
            if (gameState.playerOArr.length + gameState.playerXArr.length === 9) {
                gameResult("Tie...you either both suck or are both REALLY good.");
                removeTileFun();
                return;
            }
        }
    }
}

//Creates elements
function generateElement (el, parent, id, klass) {
    let newElement = document.createElement(el);
    newElement.id = id;
    newElement.className = klass;
    document.getElementById(parent).appendChild(newElement);
}

//Select tile, clicking adds index to X or Os array
function updateTile(tile) {
    tile.textContent = (gameState.playerTurn);
    //gameState.boardState[tile.id] = gameState.playerTurn;
    if (gameState.playerTurn === "X") {
        gameState.playerXArr.push(tile.id);
    } else {
        gameState.playerOArr.push(tile.id);
    }
}

//Changes player every turn
function changePlayer() {
    gameState.playerTurn === "X" ? gameState.playerTurn = "O" : gameState.playerTurn = "X";
}