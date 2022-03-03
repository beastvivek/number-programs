function equivalentCharacter(number) {
  switch (number) {
    case 10:
      return "a";
    case 11:
      return "b";
    case 12:
      return "c";
    case 13:
      return "d";
    case 14:
      return "e";
    case 15:
      return "f";
    default:
      return "" + number;
  }
}

function decimalToGivenBase(number, base) {
  let decimalNumber = number;
  let convertedNumber = "";

  while (decimalNumber > 0) {
    let equivalent = equivalentCharacter(decimalNumber % base);
    convertedNumber = equivalent + convertedNumber;
    decimalNumber = Math.floor(decimalNumber / base);
  }
  return convertedNumber;
}

function decimalToBinary(number) {
  return decimalToGivenBase(number, 2);
}

function decimalToOctal(number) {
  return decimalToGivenBase(number, 8);
}

function decimalToHexadecimal(number) {
  return decimalToGivenBase(number, 16);
}

function main() {
  console.log("12 in base 2 =", decimalToBinary(12));
  console.log("12 in base 8 =", decimalToOctal(12));
  console.log("12 in base 16 =", decimalToHexadecimal(12));
}

main();