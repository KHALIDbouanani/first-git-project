const prompt = require("prompt-sync")()
let mot = Number(prompt ("Enter a number : "));
let handle;
let tmp = "";

if (mot === 0) {
        tmp = "0";
}else {
    while (mot > 0) {
        if (mot != 0) {
            handle = parseInt((mot) % 10);
            mot = parseInt(mot / 10);
            tmp += String(handle);
        }
    }
}

console.log(tmp);