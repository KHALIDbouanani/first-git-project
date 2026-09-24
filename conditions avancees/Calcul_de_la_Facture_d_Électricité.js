const prompt =require ("prompt-sync")()
const consommation= Number(prompt('Entrez votre consommation (en kWh) : '))
const t_util = parseInt(prompt("Entrez le type d'utilisateur [1 pour résidentiel / 2 pour commercial]: "))
const t_con = parseInt(prompt("Entrez le type de contrat [0 pour standard / 1 pour réduit]: "))
let cons = consommation
if(t_util==1){
    if (t_con==1){
        cons*=0.2
    }else if (t_con==0){
        cons*=0.15
    }
}else if(t_util==0){
    if (t_con==1){
        cons*=0.3
    }else if (t_con==0){
        cons*=0.25
    }
}
if(consommation>500){
    cons *=1.1
}
console.log("Facture d'Électricité :",cons,"€")