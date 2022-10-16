const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) return {};
  const obj = new Object();
  const arr = domains.join().split(",");
  const set = new Set(arr.flatMap((e) => e.split(".").reverse()));

  let str = "";
  set.forEach((e) => {
    let count = 0;
    str += "." + e;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(e)) count++;
    }
    obj[`${str}`] = count;
  });
  return obj;
}

module.exports = {
  getDNSStats,
};
