const prompt = require ("prompt-sync")()
// 0. DATA for testing
/*const Candidat = [{CIN: "HH1231" ,Nom: "nom" ,Prenom: "Prenom",Parti_Politique: "Independant",Age: 20,Electeurs: ["HH1141","HH1142","HH1143","HH1144","HH1145","HH1146"]
    },,{CIN: "HH2345" ,Nom: "nom" ,Prenom: "Prenom",Parti_Politique: "Indépendant",Age: 20,Electeurs: ["HH1121","HH1122","HH1123","HH1124",]},{
CIN: "HH3456" ,Nom: "nom" ,Prenom: "Prenom",Parti_Politique: "Independant",Age: 20,Electeurs: ["HH1131","HH1132","HH1133","HH1134","HH1135",]},{
    CIN: "HH4567" ,Nom: "nom" ,Prenom: "Prenom",Parti_Politique: "Indépendant",Age: 20,Electeurs: ["HH1111","HH1112","HH1113","HH1114","HH1115","HH1116","HH1117","HH1118"]}]*/
// 1. Ajouter un nouveau candidat : (working on)
/*function Ajouter(){
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
}*/
// 2. Ajouter plusieurs candidats à la fois :
/*function Ajouter_Plusieur(){
    const Nombre = parseInt(prompt("Combien des candidat voulez vous ajouter ? => "))
    for(let i=1;i<=Nombre;i++){
        console.log(`============Candidat ${i} / ${Nombre} ============`)
        Ajouter()
        console.log(`=======================================`)
    }
}*/
// 3. Afficher la liste des candidats :
/*function Afficher(Tableau,i){
    console.log(`CIN :${Tableau[i].CIN}\nNom :${Tableau[i].Nom}\nPrenom :${Tableau[i].Prenom}\nParti_Politique :${Tableau[i].Parti_Politique}\nNombre des vote :${Tableau[i].Electeurs.length}\n`)
}*/
/*function Afficher_liste(){
    console.log(`Choisez 1 pour Trier les candidats par nombre de votes.\nChoisez 2 pour Filtrer et afficher uniquement les candidats d'un parti politique spécifique.`);
    const choix = parseInt(prompt("Entrez votre choix :"))
    switch(choix){
        case 1 :
            //   3.1 Trier les candidats par nombre de votes (ordre décroissant pour voir les gagnants). 
            const Tri = [...Candidat]
            for (let i=0;i<Candidat.length;i++){
                if (Candidat[i] != null){
                    for(let j=i+1;j<Tri.length;j++){
                        if (Candidat[j] != null){
                            if(Tri[i].Electeurs.length<Tri[j].Electeurs.length){
                                swp = Tri[i]
                                Tri [i] = Tri[j]
                                Tri [j] = swp
                            }
                        }
                        Afficher(Tri,i)
                    }
                }
            }
            // const Tri = [...Candidat]
            //     for (let i=0;i<Tri.length;i++){
            //         for(let j=i+1;j<Tri.length;j++){
            //             if(Tri[i].Electeurs.length<Tri[j].Electeurs.length){
            //                 swp = Tri[i]
            //                 Tri [i] = Tri[j]
            //                 Tri [j] = swp
            //             }
            //         }
            //         Afficher(Tri,i)
            //     }
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
}*/
// 4. Voter pour un candidat :
/*function Voter(){
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
            break
        }else{
            console.log("Le candidat que vous choisez n'exist pas .");
            break
        }
    }
}
Voter()*/
// 5. Modifier les informations d'un candidat : 
/*function Modifier(){
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
}*/
// 6. Supprimer un candidat :
/*function Supprimer(){
    const CIN = prompt("Entrez le CIN que vous voulez supprimer : ")
    for (i=0;i<Candidat.length;i++){
        if (Candidat[i].CIN == CIN){
            console.log("===================================")
            console.log("Voulez-vous supprimer ce candidat ?\n")
            Afficher(Candidat,i)
            console.log("===================================")
            const Choix = parseInt(prompt("choisez 1 pour \"OUI\nchoisez autre chose pour \"NO\" =>"))
            if(Choix===1){
                Candidat[i] = null
                console.log(Candidat)
            }else{
                Supprimer()
            }
        }else if(i+1==Candidat.length){
            console.log ("Le candidat que vous choisez n'exist pas .")
        }
    }
}*/
// 7. Rechercher des candidats :
/*function Rechercher(){
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
}*/
// 8. Statistiques de l'élection :
/*function Statistiques(){
    let j=0
    for (i=0;i<Candidat.length;i++){
        if (Candidat[i] != null){
            j++
        }
    }
    console.log("==============================================================\n")
    console.log("         Le nombre total de candidats est :",j)
    console.log("\n==============================================================")
    j=0
    for (let i=0;i<Candidat.length;i++){
        if (Candidat[i] != null){
            for(let k=0;k<Candidat[i].Electeurs.length;k++){
                j++
            }
        }
        
    }
    console.log("==============================================================\n")
    console.log("Le nombre total de votes exprimés dans toute l'élection est :",j)
    console.log("\n==============================================================")
    console.log("==============================================================\n")
    console.log("le Top 3 des candidats ayant le plus de votes sont :")
    const Tri = [...Candidat]
    let top_3=3
    for (let i=0;i<top_3;i++){
        if (Candidat[i] != null){
            for(let j=i+1;j<Tri.length;j++){
                if (Candidat[j] != null){
                    if(Tri[i].Electeurs.length<Tri[j].Electeurs.length){
                        swp = Tri[i]
                        Tri [i] = Tri[j]
                        Tri [j] = swp
                    }
                }
            }
            Afficher(Tri,i)
        }else{
            top_3++
        }
    }
    console.log("\n==============================================================")
}*/