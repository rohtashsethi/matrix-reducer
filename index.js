function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

/**
 * @Input will be a 2D Array of order m x n
 * @Output A reduced 2D Array of order 1 x n
 */
function reduce2DArray(arrayOfArray = [], reducer) {
  const transpose = matrixTranspose(arrayOfArray);
  return transpose.reduce((acc, curr) => {
    const currSum = curr.reduce(reducer);
    acc.push(currSum);
    return acc;
  }, []);
}

function matrixTranspose(arrayOfArray = []) {
  const m = arrayOfArray.length;
  const n = arrayOfArray[0].length;
  const transformedAofA = [];

  for (let i = 0; i < n; i++) {
    transformedAofA[i] = [];
    for (let j = 0; j < m; j++) {
      transformedAofA[i][j] = arrayOfArray[j][i];
    }
  }

  return transformedAofA;
}

function main() {
  const input = [
    [1, 2],
    [3, 4],
    [1, 1],
  ];
  const outputSum = reduce2DArray(input, add);
  const outputMultiply = reduce2DArray(input, multiply);
  console.log('Sum: ', outputSum);
  console.log('Multiply: ', outputMultiply);
}

main();
