const prompt = require("prompt-sync")();
let a = parseFloat(prompt("Enter number a : "))
let b = parseFloat(prompt("Enter number b : "))
let opp = prompt("Enter operator ( + , - , * , / ) : ")
if (opp== '+'){
    console.log("Result is : "+(a+b))
}else if(opp == '-'){
    console.log("Result is : "+(a-b))
}else if (opp=='*'){
    console.log("Result is : "+(a*b))
}else if (opp == '/'){
    console.log("Result is : "+(a/b))
}else {
    console.log("Operator wrong")
}