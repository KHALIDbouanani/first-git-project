const prompt = require ("prompt-sync")()
let a = parseFloat(prompt("Enter a number : "))
for (let i=1 ; i<=10 ; i++){
    console.log( a ,"*",i,"=",a*i)
}