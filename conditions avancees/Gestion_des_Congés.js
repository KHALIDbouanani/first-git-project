const prompt = require ("prompt-sync")()
const  jour_acc = parseInt(prompt("entrez le Nombre total de jours de congés accordés : "))
const  jour_utl = parseInt(prompt("entrez le Nombre de jours de congés utilisés : "))
const statut = parseInt(prompt("Statut de l'employé [0 pour temps partiel / 1 pour temps plein] : "))
let r = ""
if (statut == 1){
            r = jour_acc - jour_utl 
    } else if (statut == 0){
            r = (jour_acc/2) - jour_utl
    }
if (r < 0){
    r = "Alerte"
    console.log(r)    
}else { 
    console.log("Le reste de votre conge est :",r)   
}