const prompt = require ("prompt-sync")()
let num = parseInt(prompt("how many elements do you want in the table ?"));
let monTableau = [];
for (let i = 0; i < num; i++) {
    let valeur = prompt("Enter number :");
    monTableau.push(valeur);
}
console.log(monTableau);