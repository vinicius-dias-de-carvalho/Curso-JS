function validarPix(valorTransacao){
    if(valorTransacao <= 1000){
        return 'Pix Autorizado'
    }else{
        return 'Limite Diario Exedido'
    }
}

console.log(validarPix(500))