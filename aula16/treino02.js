function calcularMedia(n1, n2){
    let media = (n1 + n2) / 2 
    
    if(media >= 7){
        return 'aprovado'
    }else{
        return 'reprovado'
    }
}

console.log(calcularMedia(8.6,8.0))