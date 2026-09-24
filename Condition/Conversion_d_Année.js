const prompt =require ("prompt-sync")()
let a = parseFloat(prompt("Entrez le nombre des Année : "))
let b = prompt("Choisie [Mois/Jours/Heures/Minutes/Secondes]")
switch (b){
    case "Mois":
        num = a*12
        break
    case "Jours":
        num = a*365
        break
    case "Heures":
        num = a*356*24
        break
    case "Minutes":
        num = a*365*24*60
        break
    case "Secondes":
        num = a*365*24*3600
        break
    default:
        console.log("Il'y a quelque probléme")
}
console.log(num ,b)