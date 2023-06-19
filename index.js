const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

function superbowlWin(array) {
    for (key in array) {
      let won = key.find(isWin => isWin.result == 'W');
      if (won) {
        return key.year;
      } else {
        return undefined;
      }
    }
}
// console.log(superbowlWin(record));