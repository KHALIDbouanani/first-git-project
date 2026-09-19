const prompt = require ("prompt-sync")()
let num = parseInt(prompt("how many elements do you want in the table ?"));
let somme = 1
for (let i = 0; i < num; i++) {
    let valeur = parseFloat(prompt("Enter number :"));
    somme *= valeur
}
console.log(somme);