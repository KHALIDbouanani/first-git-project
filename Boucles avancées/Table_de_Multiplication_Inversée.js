const prompt = require ("prompt-sync")()
const num = parseInt(prompt("Entrez un nombre : "))
let r = 1
for (let i = 10;i>=1;i--){
    r = num * i
    process.stdout.write(` ${num} * ${i} = ${r}`)
}