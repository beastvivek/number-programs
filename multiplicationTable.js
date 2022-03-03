function table(number, limit) {
  for (let multiplier = 1; multiplier <= limit; multiplier++) {
    console.log(number + " * " + multiplier + " = " + (number * multiplier));
  }
}

function main() {
  console.log("Table of 2 till 10");
  table(2, 10);
  console.log("Table of 3 till 5");
  table(3, 5);
}

main();