const prompt = require("prompt-sync")();
let Km = parseFloat( prompt("Enter the distance in Km :"));
let Yards = Km * 1093.61
console.log("Distance in Yards is : "+Yards)