const even = 'Even';
const odd = 'Odd';
function checkNumberType(num) {
  if (num % 2 === 0) {
    return even;
  }
  return odd;
}
console.log(checkNumberType(2)); // 'Even'

console.log(checkNumberType(46)); // 'Even'

console.log(checkNumberType(3)); // 'Odd'

console.log(checkNumberType(17)); // 'Odd'
