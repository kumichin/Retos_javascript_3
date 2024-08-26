
/*
Escriba una función pyramidArray(base)que tome una matriz
de números que representen la base de una pirámide. La función debe devolver
una matriz bidimensional que represente la pirámide completa. Para generar un
elemento del siguiente nivel de la pirámide, sumamos los elementos que se
encuentran debajo y a la
izquierda y debajo y a la derecha.
*/

// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9


let pyramidArray = function(base) {
    let pyramid = [base];
    while (pyramid.length < base.length) {
      let next = adjacentSums(pyramid[0]);
      pyramid.unshift(next);
    }
    return pyramid;
  };

  let adjacentSums = function(arr) {
    let sums = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let sum = arr[i] + arr[i + 1];
      sums.push(sum);
    }
    return sums;
  };


  let p1 = pyramidArray([2, 3, 7, 5, 9]);
  console.log(p1);
  // [
  //   [ 85 ],
  //   [ 37, 48 ],
  //   [ 15, 22, 26 ],
  //   [ 5, 10, 12, 14 ],
  //   [ 2, 3, 7, 5, 9 ]
  // ]

  let p2 = pyramidArray([2, 2, 2, 2]);
  console.log(p2);
  // [
  //   [ 16 ],
  //   [ 8, 8 ],
  //   [ 4, 4, 4 ],
  //   [ 2, 2, 2, 2 ]
  // ]
