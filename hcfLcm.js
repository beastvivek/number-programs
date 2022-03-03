const isFactor = function (number, factor) {
  return (number % factor) === 0;
}

const notACommonFactor = function (num1, num2, factor) {
  return !(isFactor(num1, factor) && isFactor(num2, factor));
}

const highestCommonFactor = function (num1, num2) {
  let factor = num1;
  while (notACommonFactor(num1, num2, factor)) {
    factor--;
  }
  return factor;
}

function main() {
  console.log("H.C.F of 3 and 12 is :", highestCommonFactor(3, 12));
  console.log("H.C.F of 10 and 12 is :", highestCommonFactor(10, 12));
  console.log("H.C.F of 10 and 12 is :", highestCommonFactor(60, 120));
}

main();