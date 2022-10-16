const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = String(n).split("");
  let max = 0;
  for (let i = 0; i < nArr.length; i++) {
    const temp = nArr[i];
    nArr[i] = "";
    if (nArr.join("") > max) max = +nArr.join("");
    nArr[i] = temp;
  }
  return max;
}

module.exports = {
  deleteDigit,
};
