let precos = [150.0, 49.9, 299.0, 15.0, 80.0, 500.0]

let total = 0
let carros = 0


let produtoMaisCaros = precos[0]

for(let c in precos){
    total += precos[c]
    
    if(precos[c] > 100 ){
        carros++
        
    }
    if(precos[c] > produtoMaisCaros){
        produtoMaisCaros = precos[c]
    }
}
console.log(`Total da compra:R$ ${total}`)
console.log(`Produtos acima de R$ 100: ${carros}`)
console.log(`Produto mais caro: ${produtoMaisCaros}`)
    
