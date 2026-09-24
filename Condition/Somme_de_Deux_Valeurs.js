const prompt = require ("prompt-sync")()
let a = parseFloat(prompt("Enter 1st number : "))
let b = parseFloat(prompt("Enter 2nd number : "))
if (a===b){
    console.log(a*3)
}else{
    console.log(a+b)
}