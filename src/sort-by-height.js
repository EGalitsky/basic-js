const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexArr = arr.map((e, i) => {
    if (e === -1) return i;
    else return null;
  });

  arr.sort((a, b) => a - b);
  const delIndex = arr.lastIndexOf(-1);
  arr.splice(0, delIndex + 1);
  for (i of indexArr) {
    if (i !== null) {
      arr.splice(i, 0, -1);
    }
  }
  return arr;
}

module.exports = {
  sortByHeight,
};
