
/*
El triángulo de Pascal es una matriz bidimensional con forma de pirámide.
La parte superior de la pirámide es el número 1. Para generar más niveles de la
pirámide, cada elemento es la suma del elemento que se encuentra arriba y a la
izquierda con el elemento que se encuentra arriba y a la derecha. Los elementos
que no existen se tratan como 0 al calcular la suma.

Escriba una función pascalsTriangleque acepte un número positivo, n, como argumento
 y devuelva una matriz bidimensional que represente los primeros n niveles del
 triángulo de Pascal. Consulte el archivo para ver ejemplos.
*/

let pascalsTriangle = function(height) {
    let triangle = [[1]];
    while (triangle.length < height) {
        let last = triangle[triangle.length - 1];
        let next = [1];
        for (let i = 0; i < last.length -1; i++) {
            next.push(last[i] + last[i + 1]);
        }
        next.push(1);
        triangle.push(next);
    }
    return triangle;
}

console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]
