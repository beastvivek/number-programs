function asciiBar(barLength) {
  let bar = "";
  for (let i = 1; i <= barLength; i++) {
    bar = bar + "*";
  }
  return bar;
}

function arr(operation, index) {
  if (operation === "length") {
    return 5;
  }
  if (operation === "get") {
    switch (index) {
      case 0:
        return 23;
      case 1:
        return 34;
      case 2:
        return 4;
      case 3:
        return 10;
      case 4:
        return 16;
      default:
        return 0;
    }
  }
}

function printAsciiBar(barLimit) {
  for (let index = 0; index < arr("length"); index++) {
    const barLength = arr("get", index);
    if (barLength >= barLimit) {
      console.log("Limit exceeded for", barLength);
      continue;
    }
    console.log(barLength, "=", asciiBar(barLength));
  }
}

function main() {
  printAsciiBar(20);
}

main();