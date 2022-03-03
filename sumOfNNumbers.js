function sumOfNNumbers(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}

function recursiveSumOfNNumbers(number) {
  if (number === 1) {
    return 1;
  }
  return number + recursiveSumOfNNumbers(number - 1);
}

function main() {
  console.log("sumOfNNumbers(2) :", sumOfNNumbers(2));
  console.log("sumOfNNumbers(5) :", sumOfNNumbers(5));

  console.log("sumOfNNumbersRecursion(5) :", recursiveSumOfNNumbers(5));
}

main();