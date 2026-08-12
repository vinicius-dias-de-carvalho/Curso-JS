let preços = [150, 45, 80, 210, 30, 500]

let caros = []

let baratos = []


for(let c in preços){

    if(preços[c] >= 100){
         caros.push(preços[c])
    }

    if(preços[c] < 100){
        baratos.push(preços[c])
    }
}

console.log(`Produtos caros: ${caros}`)

console.log(`Produtos baratos: ${baratos}`)