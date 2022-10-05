# Tic-Tac-Toe PseudoCode
playerTurn:
winCriteria:
boardState:
gameActive:
players:

## INIT: Object Definitions


## FUNCTIONALITY
*FUNCTION* - init
*ENDFUNCTION* 

*FUNCTION* - gameResult()
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

create blank board and reset button, potentially whose turn it is
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
    FIFTH TURN (first win condition check)
        player X clicks tile from index 0 - index 8 of state array
        that tile is no longer clickable
        player O is the new active player
    SIXTH THRU NINTH TURN (win condition check)
        active player continues to alternate UNTIL win condition OR draw is met          


# END PROGRAM