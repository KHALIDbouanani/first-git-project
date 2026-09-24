const prompt = require ("prompt-sync")()
const etoil = "*"
const esp = " "
const num = parseInt(prompt ("Entrez un nombre : ")) 
for(let i=0;i<num;i++){
    for(let j =i ;j <= num ;j++){

    process.stdout.write(esp)
    }
    process.stdout.write(etoil)

    for (let j=i;j<(i*2);j++){

        process.stdout.write(etoil+etoil)
    }
    console.log()
}