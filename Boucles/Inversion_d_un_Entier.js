const prompt = require("prompt-sync")()
let mot = prompt ("Enter a number : ");
let tmp = "";

for (let i = mot.length - 1; i >= 0; i--) {
    tmp += mot[i];
}
mot = tmp;
console.log(mot);