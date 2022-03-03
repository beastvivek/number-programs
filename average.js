function averageOfThree(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

function averageAsPercentage(num1, num2, num3, baseValue) {
  return (averageOfThree(num1, num2, num3) / baseValue * 100) + "%";
}

function main() {
  console.log("averageOfThree(2, 4, 12) =", averageOfThree(2, 4, 12));
  console.log("averageOfThree(26, 82, 39) =", averageOfThree(26, 82, 39));
  console.log("averageAsPercentage(2, 4, 12, 10) =", averageAsPercentage(2, 4, 12, 10));
  console.log("averageAsPercentage(26, 82, 39, 29) =", averageAsPercentage(26, 82, 39, 29));
}

main();