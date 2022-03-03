function lastDigit(number) {
  return number % 10;
}

function restOf(number) {
  return Math.floor(number / 10);
}

function isPresent(digit, number) {
  let num = number;
  while (num > 0) {
    if (digit === lastDigit(num)) {
      return true;
    }
    num = restOf(num);
  }
  return false;
}

function isUnique(number) {
  let num = number;
  while (num > 0) {
    if (isPresent(lastDigit(num), restOf(num))) {
      return false;
    }
    num = restOf(num);
  }
  return true;
}

function main() {
  console.log("12 is Unique:", isUnique(12));
  console.log("11 is Unique:", isUnique(11));
  console.log("1 is Unique:", isUnique(1));
  console.log("123 is Unique:", isUnique(123));
  console.log("121 is Unique:", isUnique(121));
  console.log("112 is Unique:", isUnique(112));
  console.log("1122 is Unique:", isUnique(1122));
  console.log("1234 is Unique:", isUnique(1234));
}

main();