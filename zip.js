
/*
Escriba una función zipque acepte dos matrices como argumentos.
La función debe devolver una matriz bidimensional con submatrices de longitud 2
que contengan elementos en los índices correspondientes de las matrices de entrada.
 Puede suponer que las matrices de entrada tienen la misma longitud.
*/

// Your code here
function zip(array, arr){
    let mini = [];
    for(i= 0; i < array.length; i++){
        let uno = array[i]
        let dos =  arr[i]
        mini.push([uno, dos])
    }return mini
}


console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
