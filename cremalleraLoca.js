
/*
Escriba una función zanyZipque acepte dos matrices como argumentos.
La función debe devolver una matriz bidimensional con submatrices de longitud 2
que contengan elementos en los índices correspondientes de las matrices de entrada.
 Si una de las matrices es más corta que la otra,
reemplácela nullpor los elementos faltantes.
*/

let zanyZip = function(arr1, arr2) {
    let union = []
    for(i = 0; i < arr1.length || i < arr2.length; i++){
        let uno = arr1[i];
        let dos = arr2[i];
        if (uno === undefined){
            uno = null;
        };
        if(dos === undefined){
            dos = null;
        };
        union.push([uno, dos])
    }return union;
};

console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
