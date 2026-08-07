let notas =[6.5, 8.0, 4.5, 9.0, 7.0]
let soma = 0

for(let c in notas){
    soma += notas[c]
   } 
    console.log(` A soma de todas as notas: ${soma}`)
    


let media = soma / notas.length
 
console.log(` A media é: ${media}`)
   

   if(media >= 7.0){
    console.log(` Media: ${media} o aluno está APROVADO`)
   }else{
    console.log(`Media: ${media} O aluno está REPROVADO`)
   }


  