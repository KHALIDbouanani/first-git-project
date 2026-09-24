const prompt = require ("prompt-sync")()
const num = parseInt(prompt("entrez votre nombre : "))
let check = 0
for (let i = 1;i<=num;i++){
    if(i%2 === 1 || i==2 || i==1){
        if (i <= 2){
            console.log(i)
        }else{
            let k = parseInt(i/2)+1
            for (k;k>1;k--){
            let r=parseInt(i)%parseInt(k)
            check = k
                if(r!=0){
                 check = i
                }else{
                break
                }
            }
        }
        if (check == i){
        console.log(check);
        
        }
    }
}