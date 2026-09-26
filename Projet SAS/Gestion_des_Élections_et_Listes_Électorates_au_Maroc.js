const prompt = require ("prompt-sync")()
function splice(arr, i) {
    let tmp;
    for (i ; i < arr.length; i++) {

        tmp = arr[i];
      arr[i] = arr[i + 1]

    }
    arr.length --;
    return (arr);
}
function Afficher(Tableau,i){
    console.log(`CIN :${Tableau[i].CIN}\nNom :${Tableau[i].Nom}\nPrenom :${Tableau[i].Prenom}\nParti_Politique :${Tableau[i].Parti_Politique}\nNombre des vote :${Tableau[i].Electeurs.length}\n`)
}
// 0. DATA for testing
const Candidat = [
    {
        CIN: "HH1231" ,
        Nom: "nom" ,
        Prenom: "Prenom",
        Parti_Politique: "Independant",
        Age: 20,
        Electeurs: ["HH1141","HH1142","HH1143","HH1144","HH1145","HH1146"]
    },
    {
        CIN: "HH2345" ,
        Nom: "nom" ,
        Prenom: "Prenom",
        Parti_Politique: "Indépendant",
        Age: 20,
        Electeurs: ["HH1121","HH1122","HH1123","HH1124",]
    },
    {
        CIN: "HH3456" ,
        Nom: "nom" ,
        Prenom: "Prenom",
        Parti_Politique: "Independant",
        Age: 20,
        Electeurs: ["HH1131","HH1132","HH1133","HH1134","HH1135",]
    },{
        CIN: "HH4567" ,
        Nom: "nom" ,
        Prenom: "Prenom",
        Parti_Politique: "Indépendant",
        Age: 20,
        Electeurs: ["HH1111","HH1112","HH1113","HH1114","HH1115","HH1116","HH1117","HH1118"]
    },{
        CIN: "HH457" ,
        Nom: "nom" ,
        Prenom: "Prenom",
        Parti_Politique: "Test",
        Age: 20,
        Electeurs: ["HH1111","HH1112","HH1113","HH1114","HH1115","HH1116","HH1117","HH1118"]
}]
// 1. Ajouter un nouveau candidat :
function Ajouter(){
    const CIN = prompt("Entrez le CIN : ")
        for(i=0;i<Candidat.length;i++){
            if(CIN === Candidat[i].CIN){
                return(console.log("Le CIN existe déjà."))
            }
        }
    const Nom = prompt("Entrez votre nom : ")
    const Prenom = prompt("Entrez votre prenom : ")
    let PartiPolitique = prompt("Entrez votre  parti politique : ")
    if (PartiPolitique.trim() == ""){
        PartiPolitique = "Indépendant"
    }
    const Age = parseInt(prompt("Entrez votre age : "))
    const Electeurs = []
    let données = {CIN: CIN,Nom: Nom,Prenom: Prenom,Parti_Politique: PartiPolitique,Age: Age,Electeurs: Electeurs}
    Candidat.push(données)
}
// 2. Ajouter plusieurs candidats à la fois :
function Ajouter_Plusieur(){
    const Nombre = parseInt(prompt("Combien des candidat voulez vous ajouter ? => "))
    for(let i=1;i<=Nombre;i++){
        console.log(`============Candidat ${i} / ${Nombre} ============`)
        Ajouter()
        console.log(`=======================================`)
    }
}
// 3. Afficher la liste des candidats :
function Afficher_liste(){
    console.log(`Choisez 1 pour Trier les candidats par nombre de votes.\nChoisez 2 pour Filtrer et afficher uniquement les candidats d'un parti politique spécifique.`);
    const choix = parseInt(prompt("Entrez votre choix :"))
    switch(choix){
        case 1 :
          //   3.1 Trier les candidats par nombre de votes (ordre décroissant pour voir les gagnants). 
            const Tri = [...Candidat]
                for (let i=0;i<Tri.length;i++){
                    for(let j=i+1;j<Tri.length;j++){
                        if(Tri[i].Electeurs.length<Tri[j].Electeurs.length){
                            swp = Tri[i]
                            Tri [i] = Tri[j]
                            Tri [j] = swp
                        }
                    }
                    Afficher(Tri,i)
                }
               break
        case 2 :
           //   3.2 Filtrer et afficher uniquement les candidats d'un parti politique spécifique
            const choix_politique = prompt("Choisez la parti politique : ")
                for (i=0;i<Candidat.length;i++){
                    if(Candidat[i].Parti_Politique === choix_politique){
                        Afficher(Candidat,i)
                    }
                }
            break
        default :
            console.log("Choix incorrect")
        }
}
// 4. Voter pour un candidat :
function Voter(){
    const CIN = prompt("Entrez votre CIN : ")
    for(i=0;i<Candidat.length;i++){
        for (j=0;j<Candidat[i].Electeurs.length;j++){
            if (CIN === Candidat[i].Electeurs[j]){
                return console.log ("Le CIN a déjà été déclaré")
            }
        }
    }
    const l_identifiant = prompt("Entrez la CIN du candidat pour lequel vous voulez voter : ")
    for(i=0;i<Candidat.length;i++){
        if (l_identifiant == Candidat[i].CIN){
            Candidat[i].Electeurs.push(CIN)
            console.log(Candidat[i])
        }else if(i + 1 == Candidat.length){
            console.log("Le candidat que vous choisez n'exist pas .");
            break
        }
    }
}
// 5. Modifier les informations d'un candidat : 
function Modifier(){
    console.log(`Choisez 1 pour Modifier le parti politique d'un candidat.\nChoisez 2 pour Modifier l'âge d'un candidat.`);
    const Choix = parseInt(prompt("Entrez votre choix :"))
    switch(Choix){
        case 1:
            let CIN_1 = prompt("Entrez votre CIN : ")
            for(let i=0;i<Candidat.length;i++){
                if(Candidat[i].CIN == CIN_1){
                    let Modification = prompt("Entrez le nouveau parti politique : ")
                    Candidat[i].Parti_Politique = Modification
                    break
                }else if (i+1==Candidat.length){
                    console.log ("Le candidat que vous choisez n'exist pas .")
                }
            }
            break
        case 2:
            let CIN_2 = prompt("Entrez votre CIN : ")
            let j=0
            while(j<Candidat.length){
                if(Candidat[j].CIN == CIN_2){
                    let Modification = parseInt(prompt("Entrez le nouveau âge : "))
                    Candidat[j].Age = Modification
                    break
                }else if (j+1==Candidat.length){
                    console.log("Le candidat que vous choisez n'exist pas .")
                }
                j++
            }
            break
        default :
            console.log("Choix incorrect")
            return Modifier()
    }
}
// 6. Supprimer un candidat :
function Supprimer(){
    const CIN = prompt("Entrez le CIN que vous voulez supprimer : ")
    for (i=0;i<Candidat.length;i++){
        if (Candidat[i].CIN == CIN){
            console.log("===================================")
            console.log("Voulez-vous supprimer ce candidat ?\n")
            Afficher(Candidat,i)
            console.log("===================================")
            console.log("choisez 1 pour \"OUI\nchoisez 2 pour \"NO\"\nchoisez autre chose pour quitter");      
            const Choix = parseInt(prompt("=>"))
            switch(Choix) {
            case 1 :
                splice(Candidat,i)
                console.log(Candidat)
                break
            case 2 :
                Supprimer()
                break
            default :
                console.log("EXIT")
            }
        }else if(i+1==Candidat.length){
            console.log ("Le candidat que vous choisez n'exist pas .")
        }
    }
}
// 7. Rechercher des candidats :
function Rechercher(){
    const Nom = prompt("Saisissez le nom du candidat que vous souhaitez rechercher : ")
    for (let i = 0; i < Candidat.length; i++) {
        if(Candidat[i].Nom.toUpperCase() == Nom.toUpperCase()){
            console.log("===================================")
            Afficher(Candidat,i)
            console.log("===================================")
        }else if (i+1 == Candidat.length){
            console.log ("Le candidat que vous choisez n'exist pas .")
        }
    }
}
// 8. Statistiques de l'élection :
function Statistiques(){
    let j=0
/*  console.log("==============================================================\n")  
    for (i=0;i<Candidat.length;i++){
        j++
    }
    console.log("         Le nombre total de candidats est :",j)
    console.log("\n==============================================================")
    j=0
    console.log("==============================================================\n")
    for (let i=0;i<Candidat.length;i++){
        for(let k=0;k<Candidat[i].Electeurs.length;k++){
            j++
        }
    }
    console.log("Le nombre total de votes exprimés dans toute l'élection est :",j)
    console.log("\n==============================================================")
    console.log("==============================================================\n")
    console.log("le Top 3 des candidats ayant le plus de votes sont :")
    const Tri = [...Candidat]
    for (let i=0;i<3;i++){
        for(let j=i+1;j<Tri.length;j++){
            if(Tri[i].Electeurs.length<Tri[j].Electeurs.length){
                swp = Tri[i]
                Tri [i] = Tri[j]
                Tri [j] = swp
            }
        }
        Afficher(Tri,i)
    }
    console.log("\n==============================================================")*/
    // Afficher le nombre de candidats par parti politique. 
    for (let i=0;i<Candidat.length;i++){
        for (let k=0;k<Candidat.length;k++){
            if(Candidat[i].Parti_Politique == Candidat[k].Parti_Politique){
                j++
            }
        }
        console.log("Le nombre de candidats de parti politique",Candidat[i].Parti_Politique,"est :",j)
        j=0
    }
    
}
function quitter(){
    console.log("               merci pour votre visite")
}
let choix
do {
    console.log(`
        

===========================================================
            **GESTION DES ELECTIONS ET LISTES**
            ********ELECTIONS AU MAROC********
===========================================================
        
        1) => Ajouter un nouveau candidat :
        2) => Ajouter plusieurs candidats à la fois :
        3) => Afficher la liste des candidats :
        4) => Voter pour un candidat :
        5) => Modifier les informations d'un candidat :
        6) => Supprimer un candidat :
        7) => Rechercher des candidats :
        8) => Statistiques de l'élection :
        0) => Quitter


    `)
    choix = parseInt(prompt('        Votre choix =>'));
    console.log("\n\n===========================================================\n")
    switch (choix) {
        case 1:
            Ajouter()
            break;
        case 2:
            Ajouter_Plusieur()
            break;
        case 3:
            Afficher_liste()
            break;
        case 4:
            Voter()
            break;
        case 5:
            Modifier()
            break;
        case 6:
            Supprimer()
            break;
        case 7:
            Rechercher()
            break;
        case 8:
            console.log("travaux de construction")
            break
        case 0:
            quitter();
            break;
        default:
            console.log("pardon! votre choix n'est pas valide")
    }
    console.log("\n===========================================================\n\n")
} while (choix != 0);