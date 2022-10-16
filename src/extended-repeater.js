const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
  str,
  {
    repeatTimes = "0",
    separator = "+",
    addition = "",
    additionRepeatTimes = "0",
    additionSeparator = "|",
  }
) {
  let newStr = String(str);
  let newAddStr = str + String(addition);
  for (let i = 1; i < additionRepeatTimes; i++) {
    newAddStr += additionSeparator + addition;
  }
  newStr = newAddStr;
  for (let i = 1; i < repeatTimes; i++) {
    newStr += separator + newAddStr;
  }
  return newStr;
}

module.exports = {
  repeater,
};
