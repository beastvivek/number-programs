function simpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

function amount(principal, rate, time) {
  return principal + simpleInterest(principal, rate, time);
}

function main() {
  const principal = 10000;
  const rate = 10;
  const time = 10;
  console.log("Simple Interest :", simpleInterest(principal, rate, time));
  console.log("Amount for simple interest :", amount(principal, rate, time));
}

main();