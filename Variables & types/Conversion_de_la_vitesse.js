const prompt = require("prompt-sync")();
let Km_h = parseFloat( prompt("Enter the speed in Km/h : "));
let m_s = Km_h*0.27778
console.log("Speed in m/s is : "+m_s)