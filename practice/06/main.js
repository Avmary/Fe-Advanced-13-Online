const message = 'May the force be with you';

const allWords = message.split(' ');
let longestWord = allWords[0];
for (let i = 0; i < allWords.length; i += 1) {
  if (allWords[i].length > longestWord.length) {
    longestWord = allWords[i];
  }
}
console.log(longestWord);
