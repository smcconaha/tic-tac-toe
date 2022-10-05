# Tic-Tac-Toe PseudoCode
playerTurn: determines whose turn it is
    type: string
    value: X or O

winCriteria: array value used to assess if a player has won
    type: array
    values: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 7, 8]                        
        ]
    
boardState: array used to record all player moves
    type: array
    value: index length 8, all values of ''

gameActive: used to determine if board is "playable" or if restart is required to continue playing
    type: boolean
    value: true/false
            
players: COULD HAVE, players can use this input field to populate their name
    type: string
    value: user entry

currentState: used to define the state of the game, different than gameActive
    type: number
    value: 0 thru 3; 0 = before game, 1 = X's turn, 2 = O's turn, 3 = end game



## INIT: Object Definitions


## FUNCTIONALITY
*FUNCTION* - init: sets the stage for gameplay
    create header(tic-tac-toe), blank board (boardState array blank), reset button and potentially whose turn it is.  gameActive is true, playerTurn is set to X
*ENDFUNCTION* 

*FUNCTION* - gameResult(): used to freeze the game and display the winner
    THEN that player wins and the winner is displayed
*ENDFUNCTION* 

*FUNCTION* - checkWinCond(): used to compare clicked tiles with winCriteria to determine if any winCriteria have been met
    Loop through winCriteria
        IF player X or player O match three connected tiles in a row
            THEN set gameActive to FALSE
        ELSE game continues
*ENDFUNCTION* 

*FUNCTION* - drawBoard(): used to create blank board with header "Tic-Tac-Toe", Restart Game btn, (possibly whose turn?)
    generate HTML elements
    boardState set to empty string length 8
*ENDFUNCTION* 

*FUNCTION* - changePlayer(): used to alternate player turn following tile selection
    IF playerTurn equals X
        THEN playerTurn equals O;
    ELSEIF playerTurn equals O
        THEN playerTurn equals X;
*ENDFUNCTION* 

*FUNCTION* - updateTile()
    IF playerTurn clicks on a tile
        THEN the tile textContent (DOM element) of the board AND the boardState array is updated to reflect the decision
            the tile is no longer clickable / boardState for that index is no longer writeable and tile textContent is no longer writeable
*ENDFUNCTION* 

*FUNCTION* - gameReset()
    THIS is a function of INIT, reseting state to initial configuration
    THEN boardState is cleared to blank array, game active is TRUE 
*ENDFUNCTION* 

*FUNCTION* - TEMPLATE
*ENDFUNCTION* 


# START

drawBoard()


# END PROGRAM



---
Rough Draft
---
# START 
*FUNCTION* - init()
    create header(tic-tac-toe), blank board (boardState array blank), reset button and potentially whose turn it is (X or O).  gameActive is true, playerTurn is set to X
*ENDFUNCTION* 

IF player clicks gameReset button
*FUNCTION* - gameReset()
    THIS is a function of INIT, reseting state to initial configuration
    THEN boardState is cleared to blank array, game active is TRUE 
*ENDFUNCTION* 
        
ELSE

player X is the active player or playerTurn equals X
    FIRST TURN
        player X clicks tile from index 0 - index 8 of state array
        that tile is no longer clickable
        player O is the new active player
    SECOND TURN
        player O clicks tile from index 0 - index 8 of state array
        that tile is no longer clickable
        player X is the new active player
    THIRD TURN
        player X clicks tile from index 0 - index 8 of state array
        that tile is no longer clickable
        player O is the new active player
    FOURTH TURN
        player O clicks tile from index 0 - index 8 of state array
        that tile is no longer clickable
        player X is the new active player
    FIFTH TURN (first win condition check / run checkWinCon function)
        player X clicks tile from index 0 - index 8 of state array
        that tile is no longer clickable
        player O is the new active player
    SIXTH THRU NINTH TURN (win condition check / run checkWinCon function)
        active player continues to alternate UNTIL win condition OR draw is met

*FUNCTION* - checkWinCond()
    Loop through winCriteria
        IF player X or player O match three connected tiles in a row
            THEN set gameActive to FALSE
        ELSE game continues
*ENDFUNCTION* 

*FUNCTION* - gameResult() XXXXXXXXXX
    THEN that player wins and the winner is displayed
*ENDFUNCTION* 



# END PROGRAM