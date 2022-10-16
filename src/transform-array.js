const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const newArr = arr.flatMap((e, index, a) => {
    if (
      (index === 0 || index === a.length - 1) &&
      (e === "--double-next" ||
        e === "--double-prev" ||
        e === "--discard-next" ||
        e === "--discard-prev")
    )
      return [];

    if (e === "--double-next") return a[index + 1];

    if (e === "--double-prev" && a[index - 2] !== "--discard-next")
      return a[index - 1];

    if (e === "--double-prev") return [];

    if (a[index - 1] === "--discard-next") return [];
    if (e === "--discard-next") return [];

    if (e === "--discard-prev") return [];

    if (a[index + 1] === "--discard-prev") return [];
    return e;
  });
  return newArr;
}

module.exports = {
  transform,
};
