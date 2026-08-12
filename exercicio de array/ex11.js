let itens = [12, 0, 4, 25, 0, 2]


let disponiveis = []

let zerados = []

for(let c in itens){

    if(itens[c] > 0){
        disponiveis.push(itens[c])

    }

    if(itens[c] === 0){
        zerados.push(itens[c])
    }
}

 console.log(`Disponivel: ${disponiveis}`)
 console.log(`zerados: ${zerados}`)