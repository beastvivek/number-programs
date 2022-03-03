function isEven(number) {
  return number % 2 === 0;
}

function printOdd(number) {
  if (!isEven(number)) {
    console.log(number);
  }
}

// Prints all odd numbers between two numbers
function printOddNumbers(startingNumber, endingNumber) {
  for (let number = startingNumber; number <= endingNumber; number++) {
    printOdd(number);
  }
}

// Gives sum of all odd numbers between two numbers
function sumOfOddNumbers(startingNumber, endingNumber) {
  let sum = 0;

  for (let number = startingNumber; number <= endingNumber; number++) {
    if (!isEven(number)) {
      sum = sum + number;
    }
  }
  return sum;
}

// Prints odd numbers backwards from number to 1
function printOddNumbersBackwards(startingNumber) {
  for (let number = startingNumber; number >= 1; number--) {
    printOdd(number);
  }
}

function main() {
  console.log("Odd Numbers from 2 to 5");
  printOddNumbers(2, 5);
  console.log("Odd Numbers from 5 to 10");
  printOddNumbers(5, 10);
  console.log("Sum of Odd Number between 2 to 5 :", sumOfOddNumbers(2, 5));
  console.log("Sum of Odd Number between 5 to 15 :", sumOfOddNumbers(5, 15));
  console.log("Odd Numbers from 5 to 1 backwards");
  printOddNumbersBackwards(5);
  console.log("Odd Numbers from 9 to 1 backwards");
  printOddNumbersBackwards(9);
}

main();