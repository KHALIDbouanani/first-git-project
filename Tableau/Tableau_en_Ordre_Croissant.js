const prompt = require ("prompt-sync")()
const num = parseInt (prompt("Entrez le nombre des éléments : "))
const tab = []
// let swp
for(let i=1;i<=num;i++){
    const rest = Number(prompt("Entrez un nombre : "))
    tab.push(rest)
}
for (let i = 0;i<num;i++){
    for (let j=num ;j >= i;j--){
        if (tab[i] > tab [j]){
            let swp = tab[i]
            tab[i] = tab[j]
            tab[j] = swp
        }
    }
    
}
console.log (tab)