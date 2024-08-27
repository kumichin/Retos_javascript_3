function spiralOrder(matrix) {

    const result = [];
    let topRow = 0;
    let bottomRow = matrix.length - 1;
    let leftCol = 0;
    let rightCol = matrix[0].length - 1;

    while (topRow <= bottomRow && leftCol <= rightCol) {
      // Traverse right
      for (let col = leftCol; col <= rightCol; col++) {
        result.push(matrix[topRow][col]);
      }
      topRow++; // Move top row down

      // Traverse down
      for (let row = topRow; row <= bottomRow; row++) {
        result.push(matrix[row][rightCol]);
      }
      rightCol--; // Move right col left

      // Check if there are more elements to traverse (avoid redundant loops)
      if (topRow <= bottomRow) {
        // Traverse left
        for (let col = rightCol; col >= leftCol; col--) {
          result.push(matrix[bottomRow][col]);
        }
        bottomRow--; // Move bottom row up
      }

      if (leftCol <= rightCol) {
        // Traverse up
        for (let row = bottomRow; row >= topRow; row--) {
          result.push(matrix[row][leftCol]);
        }
        leftCol++; // Move left col right
      }
    }

    return result;
  }


  matrix = [[ 1, 2, 3],
            [ 4, 5, 6],
            [ 7, 8, 9]]

  console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

  matrix = [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9,10,11,12]]


  console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
