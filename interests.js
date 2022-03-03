function simpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

function compoundInterest(principal, rate, time) {
  return (principal * (1 + (rate / 100)) ** time) - principal;
}

function main() {
  const principal = 10000;
  const rate = 10;
  const time = 10;
  console.log("Simple Interest :", simpleInterest(principal, rate, time));
  console.log("Compound Interest :", compoundInterest(principal, rate, time));
}

main();