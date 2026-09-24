const prompt = require ("prompt-sync")()
let a = prompt ("Entrez une lettre : ")
switch (a) {
    case "A":
    case "a":
    case "E":
    case "e":
    case "I":
    case "i":
    case "O":
    case "o":
    case "U":
    case "u":
    case "Y":
    case "y":
        text = "Voyelle"
        break
    default:
        text = "Non voyelle"
}
console.log(text)