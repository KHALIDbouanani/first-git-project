const prompt = require ("prompt-sync")()
let prime = (prompt('Emtrez le prime de base : '))
const age = parseInt(prompt("entrez votre age : "))
const type = parseInt(prompt("entrez le type de votre voiture [1 pour sportive, 2 pour utilitaire, 3 pour familiale] : "))
const accidents = parseInt(prompt("entrez Nombre d'accidents au cours des 5 dernières années : "))
if (age <25){
    prime*=1.5
}else if(age >65){
    prime*=1.2
}
switch(type){
    case 1:
        prime*=2
        break
    case 2:
        prime*=1.2
        break
    case 3:
        prime*=1.1
        break 
}
if(accidents>1){
    prime*=1.3
}
console.log("Votre prime d'assurance est :",prime)