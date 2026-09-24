const prompt = require ("prompt-sync")()
let a = prompt ("Entrer le caractère : ")
if (a>= 'A' && a<= 'Z'){
    console.log("Alphabet majuscule")
}else{
    console.log("Alphabet non majuscule")
}