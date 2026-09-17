const prompt = require("prompt-sync")();
let temperature = parseFloat( prompt("Enter the temperature in Celsius :"));
let Kelvin = temperature + 273.15
console.log("Temperature in Kelvin "+Kelvin)