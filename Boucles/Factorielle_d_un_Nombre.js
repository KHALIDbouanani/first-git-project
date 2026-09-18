const prompt = require("prompt-sync")()
let n = parseInt(prompt("Enter a positive number : "))
let r=1
if (n<0){
    console.log("Negative number")
}else if(n===0){
    console.log(1)
}else {
    for (let i = 1;i<=n;i++){
        r*=i
    }
    console.log(r)
}