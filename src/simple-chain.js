const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  length: 0,
  getLength() {
    return this.length;
  },
  addLink(value = "") {
    this.chain.push(value);
    this.length++;
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 1 ||
      position >= this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.clearChain();
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    this.length++;
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    this.length++;
    return this;
  },
  finishChain() {
    this.length++;
    const finish = this.chain.map((e) => `( ${e} )`).join("~~");
    this.clearChain();
    return finish;
  },
  clearChain() {
    this.chain = [];
    this.length = 0;
  },
};

module.exports = {
  chainMaker,
};
