const prompt=require ("prompt-sync")()
const phrase ="ABCD"
let rest =""
for(let i=phrase.length-1;i>=0;i--){
    rest+=phrase[i]
}
console.log(rest)