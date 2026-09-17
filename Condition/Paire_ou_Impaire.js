const prompt =require ("prompt-sync")()
let num=parseInt (prompt("Enter number : "))
if (num%2 == 0){
    console.log("Paire")
}else {
    console.log("Impaire")
}