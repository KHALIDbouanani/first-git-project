const prompt = require ("prompt-sync")()
const num ={
    x: 4,
    y: 6
}
const n = Number(prompt("entrez variable :"))
num.x = n
num.y = 5
console.log(num)