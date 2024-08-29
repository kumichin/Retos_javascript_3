
/*
Escribe una función choosePrimes(nums)que tome una matriz de números como
argumentos. La función debe devolver una nueva matriz que contenga los números
primos de la matriz original. Un número primo es un número que solo es divisible
por 1 y por sí mismo. Sugerencia:
¡considera crear una función auxiliar para verificar si un número es primo!
*/


// your code here
function esPrimo(num){
    if(num < 2){
        return false;
    }

    for ( let i = 2; i < num; i++){
       if( num % i === 0){
           return false;
       }
    }return true;
}
function choosePrimes(nums){
    let arr = [];
    for( i = 0; i < nums.length; i++){
        let num = nums[i];
        if (esPrimo(num)){
            arr.push(num)
        }
    }return arr;
}


console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
