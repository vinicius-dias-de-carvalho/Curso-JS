let numeros = [12, 5, 8, 21, 14, 7, 30, 3]

let pares = 0
let impares = 0

for(let c in numeros){
    if(numeros[c] % 2 === 0){
        pares++
    }else{
        impares++
    }
    
    
}
console.log(`Total de numeros pares: ${pares}`)
console.log(`Total de números ímpares: ${impares}`)