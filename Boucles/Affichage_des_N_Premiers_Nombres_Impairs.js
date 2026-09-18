const prompt = require("prompt-sync")()
let n = parseInt(prompt("Enter a positive number : "))
let r = n%2
if (n%2 ===0){
    r = n%2 +1
}
if (n<0){
    console.log("chose a positive number")
}else {
    for (let i = 1;i<=n;i++){
        console.log(r)
        r +=2  
    }
}