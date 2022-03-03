function productOfNNumbers(number) {
  let product = 1;

  for (let i = 1; i <= number; i++) {
    product = product * i;
  }
  return product;
}

function recursiveProductOfNNumbers(number) {
  if (number === 1) {
    return 1;
  }
  return number * recursiveProductOfNNumbers(number - 1);
}

function main() {
  console.log("productOfNNumbers(2) :", productOfNNumbers(2));
  console.log("productOfNNumbers(5) :", productOfNNumbers(5));
  console.log("productOfNNumbersRecursion(5) :", recursiveProductOfNNumbers(5));
}

main();