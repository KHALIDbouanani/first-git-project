const prompt = require ("prompt-sync")()
let a = parseInt (prompt("Entrer le nombre de base : "))
let x = parseInt (prompt("Entrer l'exposant : "))
let r = 1
for(let i=1;i<=x;i++){
    r*=a
}
console.log(r)