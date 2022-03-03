function isPresent(number, digit) {
  let num = number;
  while (num > 0) {
    const lastDigit = num % 10;
    if (digit === lastDigit) {
      return true;
    }
    num = Math.floor(num / 10);
  }
  return false;
}

function isUnique(number) {
  let num = number;
  while (num > 0) {
    const lastDigit = num % 10;
    num = Math.floor(num / 10);
    if (isPresent(num, lastDigit)) {
      return false;
    }
  }
  return true;
}
function formatIsUniqueResult(number) {
  return isUnique(number) ? "Unique" : "not Unique";
}

function generateUniqueMessage(number) {
  return number + " is " + formatIsUniqueResult(number);
}

function main() {
  console.log(generateUniqueMessage(121));
  console.log(generateUniqueMessage(123));
}

main();