let listanotas = [5.5, 9.0 , 7.5, 6.0, 8.0]
listanotas.push(10.0)
let soma = 0

for (let pos in listanotas){
  soma = soma + listanotas[pos]
   
} console.log(`A soma é ${soma}`)

