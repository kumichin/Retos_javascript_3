
/*
Una matriz bidimensional también se conoce como "matriz".
Escriba una función matrixAdditionque acepte dos matrices como argumentos.
 Se garantiza que las dos matrices tengan la misma "altura" y "ancho".
 La función debe devolver una nueva matriz que represente la suma de los dos
 argumentos.
Para sumar matrices, sumamos los valores en las mismas posiciones.
*/

function matrixAddition(arr1, arr2){
    let suma = [];
    for(i = 0; i < arr1.length; i++){
        let subArray = [];
        for(j = 0; j < arr1[0].length; j++){
            subArray.push(arr1[i][j] + arr2[i][j])
        }suma.push(subArray)

    }return suma;
}


let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]
