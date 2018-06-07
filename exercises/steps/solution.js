function steps(n) {
  for (let row = 0; row < n; row++) {
    let stairs = "";
    for (let column = 0; column < n; column++) {
      if (row >= column) {
        stairs += "#";
      } else {
        stairs += " ";
      }
    }
    console.log(stairs);
  }
}

module.exports = steps;
