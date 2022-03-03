function max(firstNumber, secondNumber) {
  return (firstNumber < secondNumber) ? secondNumber : firstNumber;
}

function main() {
  console.log(max(10, 25));
}

main();