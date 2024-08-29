
/*
Escriba una función fizzBuzz(max)que acepte un número como argumento.
La función debe devolver una matriz que contenga todos los números positivos
menores
que maxel divisible por 3 o 5, pero no por ambos.
*/


function fizzBuzz(max){
    let arr = [];

    for ( i = 0; i < max; i++){
        let index = [i];
        if( (index % 3 === 0) && (index % 5 === 0)){

        }else if( index % 3 === 0){
            arr.push(i);
        }else if( index % 5 === 0){
            arr.push(i);
        }
    }return arr;
}






console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
