const prompt = require("prompt-sync")();
let temperature = parseFloat(prompt ("Enter the tempurature : " ));
if (temperature<0){
    console.log ("Solide")
}else if(temperature>=0 && temperature<100){
    console.log("Liquide")
}else{
    console.log("Gas")
}