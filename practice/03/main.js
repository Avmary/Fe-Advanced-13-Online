function checkForSpam(str) {
  str = str.toLowerCase();
  if (str.indexOf('spam') > 0 || str.indexOf('sale') > 0) {
    return true;
  } return false;
}
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
