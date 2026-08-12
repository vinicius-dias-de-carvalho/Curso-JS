let notas = [8.5, 4.0, 6.5, 3.2, 9.0, 5.5]

let aprovados = []

let recuperacao = []


for(let c in notas ){

    if(notas[c] >= 6.0){
        aprovados.push(notas[c])
    }

    if(notas[c] < 6.0){
        recuperacao.push(notas[c])
    }

}

console.log(`Aprovados ${aprovados}`)

console.log(`ficaram de recuperação: ${recuperacao}`)