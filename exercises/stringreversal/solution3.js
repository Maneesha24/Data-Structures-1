function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

module.exports = reverse;
