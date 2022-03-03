function square(number) {
  return number * number;
}

function cube(number) {
  return square(number) * number;
}

function main() {
  console.log("Square of 2 is", square(2));
  console.log("Square of 5 is", square(5));
  console.log("Cube of 2 is", cube(2));
  console.log("Cube of 5 is", cube(5));
}

main();