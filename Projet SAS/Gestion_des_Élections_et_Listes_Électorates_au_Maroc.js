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
    console.log("===================================")
    console.log(`\nCIN :${Tableau[i].CIN}\nNom :${Tableau[i].Nom}\nPrenom :${Tableau[i].Prenom}\nParti_Politique :${Tableau[i].Parti_Politique}\nNombre des vote :${Tableau[i].Electeurs.length}\n`)
    console.log("===================================")
}
// 0. DATA for testing
const Candidat = [
    {
        CIN: "HH1001",
        Nom: "Alaoui",
        Prenom: "Yassine",
        Parti_Politique: "Parti du Progres",
        Age: 25,
        Electeurs: ["HH2001", "HH2002", "HH2003", "HH2004"]
    },
    {
        CIN: "HH1002",
        Nom: "Bennani",
        Prenom: "Sara",
        Parti_Politique: "Parti du Progres",
        Age: 34,
        Electeurs: ["HH2005", "HH2006", "HH2007", "HH2008", "HH2009"]
    },
    {
        CIN: "HH1003",
        Nom: "El Idrissi",
        Prenom: "Omar",
        Parti_Politique: "Parti de la Justice",
        Age: 42,
        Electeurs: ["HH2010", "HH2011", "HH2012"]
    },
    {
        CIN: "HH1004",
        Nom: "Amrani",
        Prenom: "Imane",
        Parti_Politique: "Indépendant",
        Age: 29,
        Electeurs: ["HH2013", "HH2014", "HH2015", "HH2016", "HH2017", "HH2018"]
    },
    {
        CIN: "HH1005",
        Nom: "Tazi",
        Prenom: "Mehdi",
        Parti_Politique: "Parti de la Justice",
        Age: 51,
        Electeurs: ["HH2019", "HH2020", "HH2021", "HH2022"]
    },
    {
        CIN: "HH1006",
        Nom: "Berrada",
        Prenom: "Nadia",
        Parti_Politique: "Parti du Renouveau",
        Age: 38,
        Electeurs: ["HH2023", "HH2024", "HH2025", "HH2026", "HH2027", "HH2028"]
    },
    {
        CIN: "HH1007",
        Nom: "Chraibi",
        Prenom: "Ayoub",
        Parti_Politique: "Parti du Progres",
        Age: 63,
        Electeurs: ["HH2029", "HH2030", "HH2031"]
    },
    {
        CIN: "HH1008",
        Nom: "Fassi",
        Prenom: "Salma",
        Parti_Politique: "Indépendant",
        Age: 47,
        Electeurs: ["HH2032", "HH2033", "HH2034", "HH2035", "HH2036"]
    },
    {
        CIN: "HH1009",
        Nom: "Tahiri",
        Prenom: "Hamza",
        Parti_Politique: "Parti du Renouveau",
        Age: 18,
        Electeurs: ["HH2037", "HH2038", "HH2039", "HH2040"]
    },
    {
        CIN: "HH1010",
        Nom: "Mansouri",
        Prenom: "Khadija",
        Parti_Politique: "Parti de la Justice",
        Age: 70,
        Electeurs: ["HH2041", "HH2042", "HH2043", "HH2044", "HH2045", "HH2046"]
    },
    {
        CIN: "HH1011",
        Nom: "Rami",
        Prenom: "Anas",
        Parti_Politique: "Parti du Progres",
        Age: 31,
        Electeurs: ["HH2047", "HH2048", "HH2049"]
    },
    {
        CIN: "HH1012",
        Nom: "Ouazzani",
        Prenom: "Meriem",
        Parti_Politique: "Parti du Renouveau",
        Age: 56,
        Electeurs: ["HH2050", "HH2051", "HH2052", "HH2053", "HH2054"]
    },
    {
        CIN: "HH1013",
        Nom: "Naciri",
        Prenom: "Reda",
        Parti_Politique: "Indépendant",
        Age: 22,
        Electeurs: ["HH2055", "HH2056", "HH2057", "HH2058"]
    },
    {
        CIN: "HH1014",
        Nom: "Zerouali",
        Prenom: "Lina",
        Parti_Politique: "Parti de la Justice",
        Age: 45,
        Electeurs: ["HH2059", "HH2060", "HH2061", "HH2062", "HH2063", "HH2064"]
    },
    {
        CIN: "HH1015",
        Nom: "Kettani",
        Prenom: "Adam",
        Parti_Politique: "Parti du Progres",
        Age: 67,
        Electeurs: ["HH2065", "HH2066", "HH2067"]
    }
]
// 1. Ajouter un nouveau candidat :
function Ajouter(){
    const CIN = prompt("Entrez le CIN : ")
        for(i=0;i<Candidat.length;i++){
            if(CIN === Candidat[i].CIN||CIN.trim() === ""){
                console.log("!!!")
                if (CIN === Candidat[i].CIN){
                    return(console.log("Le CIN existe déjà."))
                }else if (CIN.trim() === ""){
                    return(console.log("Le CIN est nécessaire."))
                }
            }
        }
    const Nom = prompt("Entrez votre nom : ")
    const Prenom = prompt("Entrez votre prenom : ")
    let PartiPolitique = prompt("Entrez votre  parti politique : ")
    if (PartiPolitique.trim() == ""){
        PartiPolitique = "Indépendant"
    }
    const Age = parseInt(prompt("Entrez votre age : "))
    if(Age>=18&&Age<150){
        const Electeurs = []
        let données = {CIN: CIN,Nom: Nom,Prenom: Prenom,Parti_Politique: PartiPolitique,Age: Age,Electeurs: Electeurs}
        Candidat.push(données)
    }else{
        return(console.log("Vous n'avez pas le droit de vote."))
    }
}
// 2. Ajouter plusieurs candidats à la fois :
function Ajouter_Plusieur(){
    const Nombre = parseInt(prompt("Combien des candidat voulez vous ajouter ? => "))
    for(let i=1;i<=Nombre;i++){
        console.log(`                                ============Candidat ${i} / ${Nombre} ============`)
        Ajouter()
        console.log(`                                =======================================`)
    }
}
// 3. Afficher la liste des candidats :
function Afficher_liste(){
    const choix_3 = parseInt(prompt("Entrez votre choix :"))
    switch(choix_3){
        case 1 :
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
            const choix_politique = prompt("Choisez la parti politique : ")
                for (i=0;i<Candidat.length;i++){
                    if(Candidat[i].Parti_Politique === choix_politique){
                        Afficher(Candidat,i)
                    }
                }
            break
        case 3 :
            for(i=0;i<Candidat.length;i++){
                Afficher(Candidat,i)
            }
            break
        case 0 :
            break
        default :
            console.log("Choix incorrect")
            Afficher_liste()
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
            break
        }else if(i + 1 == Candidat.length){
            console.log("                                ===========================================================\n")                    
            console.log("                                       Le candidat que vous choisez n'exist pas  !")
            console.log("\n                                ===========================================================")
        }
    }
}
// 5. Modifier les informations d'un candidat : 
function Modifier(){
    const Choix = parseInt(prompt("Entrez votre choix : "))
    switch(Choix){
        case 1:
            let CIN_1 = prompt("Entrez votre CIN : ")
            for(let i=0;i<Candidat.length;i++){
                if(Candidat[i].CIN == CIN_1){
                    let Modification = prompt("Entrez le nouveau parti politique : ")
                    Candidat[i].Parti_Politique = Modification
                    break
                }else if (i+1==Candidat.length){
                    console.log("                                ===========================================================\n")                    
                    console.log("                                       Le candidat que vous choisez n'exist pas  !")
                    console.log("\n                                ===========================================================")
                }
            }
            break
        case 2:
            let CIN_2 = prompt("Entrez votre CIN : ")
            let j=0
            while(j<Candidat.length){
                if(Candidat[j].CIN == CIN_2){
                    let Modification = parseInt(prompt("Entrez le nouveau âge : "))
                    if(Modification>=18&&Modification<150){
                       Candidat[j].Age = Modification 
                    }else{
                        console.log("                                ===========================================================\n\n")
                        console.log("                                                      L'Age est invalide !")
                        console.log("\n\n                                ===========================================================")
                        }
                    break
                }else if (j+1==Candidat.length){
                    console.log("                                ===========================================================\n")                    
                    console.log("                                       Le candidat que vous choisez n'exist pas  !")
                    console.log("\n                                ===========================================================")
                }
                j++
            }
            break
        case 0 :
            break
        default :
            console.log("Choix incorrect")
            return Modifier()
    }
}
// 6. Supprimer un candidat :
function Supprimer(){
    const CIN = prompt("")
    for (i=0;i<Candidat.length;i++){
        if (Candidat[i].CIN == CIN){
            console.log("===================================")
            console.log("Voulez-vous supprimer ce candidat ?\n")
            Afficher(Candidat,i)
            console.log("choisez 1 pour \"OUI\"\nchoisez 2 pour \"NO\"\nchoisez autre chose pour revenir au menu principal sans supprimer");      
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
                break
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
            Afficher(Candidat,i)
        }else if (i+1 == Candidat.length){
            console.log ("Le candidat que vous choisez n'exist pas .")
        }
    }
}
// 8. Statistiques de l'élection :
function Statistiques(){
    const Choix_8 = parseInt(prompt("                Votre choix =>"))
    switch(Choix_8){
        case 1:
            console.log("                                ==============================================================\n")  
            console.log("                                            Le nombre total de candidats est :",Candidat.length)
            console.log("\n                                ==============================================================")
            break
        case 2:
            console.log("                                ==============================================================\n")
            let j=0
            for (let i=0;i<Candidat.length;i++){
                for(let k=0;k<Candidat[i].Electeurs.length;k++){
                    j++
                }
            }
            console.log("                                Le nombre total de votes exprimés dans toute l'élection est :",j)
            console.log("\n                                ==============================================================")
            break
        case 3:
            console.log("                                ==============================================================\n")
            console.log("                                     Le Top 3 des candidats ayant le plus de votes sont :")
            const Tri_top_3 = [...Candidat]
            let top_3 = 3
            if (Tri_top_3.length<3){
                top_3 = Tri_top_3.length
            }
            for (let i=0;i<top_3;i++){
                for(let j=i+1;j<Tri_top_3.length;j++){
                    if(Tri_top_3[i].Electeurs.length<Tri_top_3[j].Electeurs.length){
                        swp = Tri_top_3[i]
                        Tri_top_3 [i] = Tri_top_3[j]
                        Tri_top_3 [j] = swp
                    }
                }
                Afficher(Tri_top_3,i)
            }
            console.log("\n                                ==============================================================")
            break
        case 4:
            console.log("                                ==============================================================\n")
            const Tri = [...Candidat]
            for (let i=0;i<Tri.length;i++){
                for(let j=i+1;j<Tri.length;j++){
                    if(Tri[i].Parti_Politique>Tri[j].Parti_Politique){
                        swp = Tri[i]
                        Tri [i] = Tri[j]
                        Tri [j] = swp
                    }
                }
            }
            const nombres = []
            let nombre = 0
            for (let i = 0; i < Tri.length; i++) {
            nombre++
                if (i ==Tri.length -1||Tri[i].Parti_Politique!=Tri[i + 1].Parti_Politique){
                    nombres.push({
                    Parti_Politique: Tri[i].Parti_Politique,
                    Nombre: nombre
                    })
                    nombre = 0
                }
            }
            for(let i=0;i<nombres.length;i++){
                console.log(` Le nombre de candidats du parti politique ${nombres[i].Parti_Politique} est: ${nombres[i].Nombre}`)
            }
            console.log("\n                                ==============================================================")
            break
        case 0:
            break
        default:
            console.log("           pardon! votre choix n'est pas valide !")
            Statistiques()
    }
}
// 0. Quitter
function quitter(){
    console.log("                                            ********Merci pour votre visite********")
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
    choix = parseInt(prompt('                Votre choix => '));
    console.log("\n\n                                ===========================================================\n")
    switch (choix) {
        case 1:
            Ajouter()
            break;
        case 2:
            Ajouter_Plusieur()
            break;
        case 3:
            console.log(`
            1) Afficher les candidats classés selon le nombre de votes obtenus.
            2) Afficher les candidats d'un parti politique spécifique.
            3) Afficher tous les candidats.
            
            
                    0) => Revenir au menu principal
                    
            `)
            Afficher_liste()
            break;
        case 4:
            Voter()
            break;
        case 5:
            console.log(`
            1) Modifier le parti politique d'un candidat.
            2) Modifier l'âge d'un candidat.
            
            
                    0) => Revenir au menu principal
            
            `);
            Modifier()
            break;
        case 6:
             console.log(`
            Entrez le CIN que vous voulez supprimer : `)
            Supprimer()
            break;
        case 7:
            Rechercher()
            break;
        case 8:
            console.log(`
            1) Afficher le nombre total de candidats.
            2) Afficher le nombre total de votes exprimés dans toute l'élection.
            3) Afficher le Top 3 des candidats ayant le plus de votes.
            4) Afficher le nombre de candidats par parti politique.
            
            
                    0) => Revenir au menu principal
                    
            `)
            Statistiques()
            break
        case 0:
            quitter();
            break;
        default:
            console.log("                                           Pardon! votre choix n'est pas valide")
    }
    console.log("\n                                ===========================================================\n\n")
} while (choix != 0)