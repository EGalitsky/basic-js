const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  matrix.forEach((e) => {
    for (let i = 0; i < e.length; i++) {
      if (e[i] === true && i !== 0) {
        e[i + 1] = 1;
        e[i - 1] = 1;
        i++;
      } else if (e[i] === true && i === 0) {
        e[i + 1] = 1;
        i++;
      } else e[i] = 0;
    }
  });

  const minesArr = matrix.map((e) => e.slice());

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === true && j !== 0 && i !== 0) {
        minesArr[j - 1][i + 1] += 1;
        minesArr[j - 1][i - 1] += 1;
        minesArr[j - 1][i] += 1;
        minesArr[j + 1][i] += 1;
        minesArr[j + 1][i - 1] += 1;
        minesArr[j + 1][i + 1] += 1;
      }
      if (matrix[j][i] === true && j === 0 && i === 0) {
        minesArr[j + 1][i] += 1;
        minesArr[j + 1][i + 1] += 1;
      }
    }
  }
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === true) minesArr[j][i] = 1;
    }
  }
  return minesArr;
}

module.exports = {
  minesweeper,
};
