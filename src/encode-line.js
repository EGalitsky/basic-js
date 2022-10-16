const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let num = 1;
  let newStr = "";

  str.split("").forEach((e, i, a) => {
    if (e === a[i + 1]) {
      num++;
    } else if (num === 1) newStr += `${e}`;
    else {
      newStr += `${num}${e}`;
      num = 1;
    }
  });
  return newStr;
}

module.exports = {
  encodeLine,
};
