let idades = [15, 22, 12, 18, 30, 8]

let menores = []

let maiores = []

for(let c in idades){
    
    if(idades[c] < 18){
        menores.push(idades[c])
    }

    if(idades[c] >= 18 ){
        maiores.push(idades[c])
    }

}

console.log(`menor de idade: ${menores}`)
console.log(`maiores de idade: ${maiores}`)