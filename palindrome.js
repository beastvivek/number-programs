function addLastDigit(number, digit) {
  return (number * 10) + digit;
}

function integerQuotientByTen(number, lastDigit) {
  return (number - lastDigit) / 10;
}

function reverseNumber(number) {
  let reverse = 0;
  let num = number;
  while (num > 0) {
    const lastDigit = num % 10;
    reverse = addLastDigit(reverse, lastDigit);
    num = integerQuotientByTen(num, lastDigit);
  }
  return reverse;
}

function isPalindrome(number) {
  return reverseNumber(number) === number;
}

function formatIsPalindromeResult(number) {
  return isPalindrome(number) ? "Palindrome" : "not Palindrome";
}

function generatePalindromeMessage(number) {
  return number + " is " + formatIsPalindromeResult(number);
}

function main() {
  console.log(generatePalindromeMessage(234));
  console.log(generatePalindromeMessage(121));
  console.log(generatePalindromeMessage(98433));
  console.log(generatePalindromeMessage(12121));
}

main();