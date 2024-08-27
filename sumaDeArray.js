
/*
Escriba una función sumArray(array)que tome una matriz de números y
devuelva la suma total de todos los números.
*/

// METODO 1

function sumArray(array) {
    // your code here...
    let sum = array.reduce((a, b) => a + b)
    return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

// METOD0 2

function sumArray(array) {
    // your code here...
    let sum = 0;
    for(i = 0; i < array.length; i++){
        sum += array[i]
    }return sum
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
