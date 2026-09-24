let livre ={
    titre :"",
    auteur:"",
    annee: 0
}

function données(a,b,c){
    livre.titre = a
    livre.auteur = b
    livre.annee = c
}
données("ego is the enemy","Ryan Holiday",2016)
console.log( livre)