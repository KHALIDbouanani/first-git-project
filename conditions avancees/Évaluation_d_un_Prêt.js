const prompt = require ("prompt-sync")()
const Revenu = Number(prompt('Entrez votre revenu annuel : '))
const Score = Number(prompt('Entrez votre score de credit : '))
const Duree =  Number(prompt('Entrez votre duree de pret : ')) 
let r = ""
if (Revenu>= 30000 && Score >= 700 && Duree <= 10 ){
    r = "Eligible"
}else if (Revenu>= 30000 && Score >= 650 && Duree <= 15 ){
    r = "Éligible avec conditions"    
}else {
    r="Non éligible"
}
console.log(r)