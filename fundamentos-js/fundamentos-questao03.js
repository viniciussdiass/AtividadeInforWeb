function celsiusParaFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

const celsius = 30;
const fahrenheit = 86;

console.log(`${celsius}°C = ${celsiusParaFahrenheit(celsius)}°F`);
console.log(`${fahrenheit}°F = ${fahrenheitParaCelsius(fahrenheit)}°C`);
