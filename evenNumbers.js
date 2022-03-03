function isEven(number) {
  return number % 2 === 0;
}

function printEven(number) {
  if (isEven(number)) {
    console.log(number);
  }
}

// Prints all even numbers between two numbers
function printEvenNumbers(startingNumber, endingNumber) {
  for (let number = startingNumber; number <= endingNumber; number++) {
    printEven(number);
  }
}

// Gives sum of all even numbers between two numbers
function sumOfEvenNumbers(startingNumber, endingNumber) {
  let sum = 0;

  for (let number = startingNumber; number <= endingNumber; number++) {
    if (isEven(number)) {
      sum = sum + number;
    }
  }
  return sum;
}

// Prints even numbers backwards from number to 1
function printEvenNumbersBackwards(startingNumber) {
  for (let number = startingNumber; number >= 1; number--) {
    printEven(number);
  }
}

function main() {
  console.log("Even Numbers from 2 to 5");
  printEvenNumbers(2, 5);
  console.log("Even Numbers from 5 to 10");
  printEvenNumbers(5, 10);
  console.log("Sum of Even Number between 2 to 5 :", sumOfEvenNumbers(2, 5));
  console.log("Sum of Even Number between 5 to 15 :", sumOfEvenNumbers(5, 15));
  console.log("Even Numbers from 5 to 1 backwards");
  printEvenNumbersBackwards(5);
  console.log("Even Numbers from 9 to 1 backwards");
  printEvenNumbersBackwards(9);
}

main();