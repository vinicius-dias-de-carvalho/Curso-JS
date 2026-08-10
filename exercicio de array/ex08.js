let estoque = [25, 3, 18, 0, 45, 2]

let emFalta = 0

let estoqueBaixo = 0

let maiorEstoque = estoque[0]

for(let c in estoque){
    
    if(estoque[c] === 0){
        emFalta++
    }

    if(estoque[c] > 0 && estoque[c] < 5){
        estoqueBaixo++
    }
    if(estoque[c] > maiorEstoque){
      maiorEstoque = estoque[c]  
    }
}
console.log(`em falta: ${emFalta}`)
console.log(`Maior estoque : ${maiorEstoque}`)
console.log(`Estoque baixa: ${estoqueBaixo}`)

