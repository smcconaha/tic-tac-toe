//create an array
let boardState = ['','','','','','','',''];
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


