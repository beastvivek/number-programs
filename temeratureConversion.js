function fahrenheitToCelsius(temperature) {
  return (temperature - 32) * 5 / 9;
}

function celsiusToFahrenheit(temperature) {
  return (temperature * 9 / 5) + 32;
}

function main() {
  console.log("celsiusToFahrenheit(10) =", celsiusToFahrenheit(10));
  console.log("celsiusToFahrenheit(0) =", celsiusToFahrenheit(0));
  console.log("fahrenheitToCelsius(50) =", fahrenheitToCelsius(50));
  console.log("fahrenheitToCelsius(32) =", fahrenheitToCelsius(32));
}

main();