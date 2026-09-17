const prompt = require ("prompt-sync")()
let num_1 = parseFloat(prompt("Enter number 1 : "))
let num_2 = parseFloat(prompt("Enter number 2 : "))
let num_3 = parseFloat(prompt("Enter number 3 : "))
let moyenne = (num_1*2+num_2*3+num_3*5)/10
console.log("La moyenne pondérée est : ",moyenne)
