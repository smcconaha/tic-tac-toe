# Tic-Tac-Toe PseudoCode
playerTurn:
winCriteria:
boardState:
gameActive: boolean
players:

## INIT: Object Definitions


## FUNCTIONALITY
*FUNCTION* - init
*ENDFUNCTION* 

*FUNCTION* - gameResult() XXXXXXX
*ENDFUNCTION* 

*FUNCTION* - checkWinCond()
*ENDFUNCTION* 

*FUNCTION* - drawBoard(): used to create blank board with header "Tic-Tac-Toe", Restart Game btn, (possibly whose turn?)
    generate HTML elements
    boardState set to empty string length 8
*ENDFUNCTION* 

*FUNCTION* - changePlayer()

*ENDFUNCTION* 

*FUNCTION* - updateTile()
*ENDFUNCTION* 

*FUNCTION* - gameReset()
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

create header(tic-tac-toe), blank board (boardState array blank), reset button and potentially whose turn it is.  gameActive is true, playerTurn is set to X

IF player clicks gameReset button
*FUNCTION* - gameReset()
*ENDFUNCTION* 
    THEN boardState is cleared to blank array, game active is TRUE, 
        
ELSE

player X is the active player
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

*FUNCTION* - gameResult() XXXXXXXXXXX
    THEN that player wins and the winner is displayed
*ENDFUNCTION* 



# END PROGRAM