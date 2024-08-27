
/*
Escriba una función luckyNumbers(matrix)que tome una matriz bidimensional
y devuelva todos los números de la suerte en cualquier orden. Un número de la
suerte es el elemento mínimo en su fila y el máximo en su columna.
*/


function arrMin(arr){
    let min = Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }
    } return min
}
function arrMax(arr){
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    } return max
}

function luckyNumbers(matrix){
    let lucky = [];
   for (col = 0; col < matrix[0].length; col++){
        let subCol = [];
        let subRow = [];

        for (row = 0; row < matrix.length; row++){
            subCol.push(matrix[row][col])
            subRow = matrix[row];
        }
        if (arrMin(subRow) === arrMax(subCol)){
            lucky.push(arrMin(subRow))
        }
    } return lucky;
}



matrix = [[ 5,  9, 21],
         [ 9, 19,  6],
         [12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6],
         [10,  2,  7,  9],
         [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]
