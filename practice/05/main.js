function findLongestWord(str) {
  const string = str.split(' ');
  let maxLength = str[0];
  for (let i = 0; i < string.length; i += 1) {
    if (string[i].length > maxLength.length) {
      maxLength = string[i];
    }
  } return maxLength;
}
console.log(
  findLongestWord('The quick brown fox jumped over the lazy dog'),
); // 'jumped'

console.log(
  findLongestWord('Google do a roll'),
); // 'Google'

console.log(
  findLongestWord('May the force be with you'),
); // 'force'
