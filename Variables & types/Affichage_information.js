const prompt = require("prompt-sync")();
const name = prompt("What is your name ?");
const fname = prompt("what is your family name ?");
const age = prompt("How old are you ?");
const sexe = prompt("Enter your sexe ? M/F");
const email = prompt("Enter your e-mail adresse ?");
console.log("Name is : ",fname , name,"\n","Age is :",age,"\n","The sexe :",sexe ,"\n", "E-mail adresse is :" , email);