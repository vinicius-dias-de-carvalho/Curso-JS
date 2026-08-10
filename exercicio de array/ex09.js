let temperaturas = [32, 45, 18, 62, 28, 55, 70, 40,]

let normais = []


let alertas = []

let criticas = []

 for(let c in temperaturas ){
    
    if(temperaturas[c] < 50 ){
    normais.push(temperaturas[c])   
}
    if (temperaturas[c] >= 50 &&  temperaturas[c] <= 65 ){
        alertas.push(temperaturas[c])
    }

    if(temperaturas[c] > 65){
        criticas.push(temperaturas[c])
    }
 }

 console.log(`temperatura normais: ${normais}`)

 console.log(`[AVISO] Autas temperaturas: ${alertas}`)

 console.log(`[AUTO PERIGO] Temperatura critica: ${criticas}`)