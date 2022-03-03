function printNthNumbers(startingNumber, endingNumber, n) {
  for (let number = startingNumber; number <= endingNumber; number = number + n) {
    console.log(number);
  }
}

function main() {
  console.log("Every 4th number between 3 and 15");
  printNthNumbers(3, 15, 4);
  console.log("Every 7th number between 1 and 100");
  printNthNumbers(1, 25, 7);
}

main();